import { ONE_DAY } from '../constants/constants';

export default class Statistics {
    constructor(dataStorage) {
        this._amountWords = 0;
        this._amountWordAall = 0;
        this._dataStorage = dataStorage;
    }

    serch(arrNews, request) {
        const regEx = new RegExp(request, 'ig');
        arrNews.forEach(({ title }) => {

            const words = title.match(regEx).length;

            this._amountWords += words;
        });
        return this._amountWords;
    }


    /***
     * @return {Array} возвращает отcортированный массив новостей, 
     * исключая новости без указания двты
     */
    _sortByDay() {
        const arrDays = this._getDatesArr();
        const sortArrByDay = [];
        for (let i = 0; i < 7; i++) {
            const regEx = new RegExp(`^.{8}${arrDays[i]}`, ''); //создаётся регулярноее выражение выбирающее дату

            const arrNewsForDay = this._dataStorage.getNews().articles.filter((item) => {
                return item.publishedAt.match(regEx) != null;
            });
            sortArrByDay[i] = arrNewsForDay;
        }

        return sortArrByDay;
    }


    /**
     * @return{Array} озвращает массив дней с сегодняшнего по - 6 дней
     */
    _getDatesArr() {
        const arrDays = [];
        for (let i = 0; i < 7; i++) {
            const dat = new Date(new Date() - i * ONE_DAY);
            const day = dat.getDate();
            arrDays[i] = `${day}`;
        }
        return arrDays;
    }

    /**
     * @return {Array} возвращает массив дней недели от сегоднешнего до - 6 дней
     */
    _getWeekDays() {
        const arrWeekDays = [];
        for (let i = 0; i < 7; i++) {
            const dat = new Date(new Date() - i * ONE_DAY);
            const day = dat.getDay();

            switch (day) {
                case 1:
                    arrWeekDays[i] = `пн`;
                    break;
                case 2:
                    arrWeekDays[i] = `вт`;
                    break;
                case 3:
                    arrWeekDays[i] = `ср`;
                    break;
                case 4:
                    arrWeekDays[i] = `чт`;
                    break;
                case 5:
                    arrWeekDays[i] = `пт`;
                    break;
                case 6:
                    arrWeekDays[i] = `сб`;
                    break;
                case 0:
                    arrWeekDays[i] = `вс`;
                    break;
            }
        }
        return arrWeekDays;
    }

    /**
     * @param {Array} arrNews масив новостей
     * @param {String} request запрос для поиска
     * @return {Number} возвращает сумму запроса повторений в заголовке и описании новостей
     */
    _serchAll(arrNews, request) {
        this._amountWordAall = 0;
        const regEx = new RegExp(request, 'ig');
        arrNews.forEach(({ title, description }) => {
            const wordsTitle = title.match(regEx).length;
            const wordsDescription = description != null && description.match(regEx) != null && description.match(regEx).length != null ? description.match(regEx).length : 0;
            this._amountWordAall += wordsTitle + wordsDescription;
        });
        return this._amountWordAall;

    }

    displayStatistics(arrElems) {
        const arrDays = this._getDatesArr().reverse();
        const arrWeekDays = this._getWeekDays().reverse();

        arrElems.forEach((el, index) => {
            el.textContent = `${arrDays[index]}, ${arrWeekDays[index]}`;
        });

    }

    displayGraphs(arrGraphs, arrScalse = [0]) {
        const sortByDay = this._sortByDay().reverse();
        const request = this._dataStorage.getRequest().replace(/"/g, '');

        const arrSerchResult = sortByDay.map((el, index) => {
            return this._serchAll(sortByDay[index], request);
        });

        const newArrSerchResult = arrSerchResult.slice();

        let coefficient = 1;
        let stepScales = 25;

        newArrSerchResult.sort((a, b) => {
            return b - a;
        });

        switch (true) {
            case (newArrSerchResult[0] > 1000):
                coefficient = 0.02;
                stepScales = 1250;
                break;
            case (newArrSerchResult[0] > 500):
                coefficient = 0.1;
                stepScales = 250;
                break;
            case (newArrSerchResult[0] > 100):
                coefficient = 0.2;
                stepScales = 125;
                break;
        }

        arrGraphs.forEach((el, index) => {
            const searchResult = this._serchAll(sortByDay[index], request);
            if (index < 5) arrScalse[index].textContent = index * stepScales;
            el.textContent = searchResult;
            el.style.width = `${searchResult * coefficient}%`;

        });

    }

}