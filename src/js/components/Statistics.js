export default class Statistics {
    constructor(dataStorage) {
        this._amountWords = 0;
        this._amountWordAall = 0;
        this._dataStorage = dataStorage;
    }

    serch(arr, request) {
        let regEx = new RegExp(request, 'ig');
        arr.forEach(({ title }) => {

            let words = title.match(regEx).length;

            this._amountWords += words;
        });
        return this._amountWords;
    }


    /***
     * @return {Array} возвращает отcортированный массив новостей, 
     * исключая новости без указания двты
     */
    _sortByDay() {
        let arrDays = this._getDatesArr();
        let sortArrByDay = [];
        for (let i = 0; i < 7; i++) {
            let regEx = new RegExp(`^.{8}${arrDays[i]}`, ''); //создаётся регулярноее выражение выбирающее дату

            let arr = this._dataStorage.getNews().articles.filter((item) => {
                return item.publishedAt.match(regEx) != null;
            });
            sortArrByDay[i] = arr;
        }

        return sortArrByDay;
    }


    /**
     * @return{Array} озвращает массив дней с сегодняшнего по - 6 дней
     */
    _getDatesArr() {
        let arrDays = [];
        for (let i = 0; i < 7; i++) {
            let dat = new Date(new Date() - i * 24 * 3600 * 1000);
            let day = dat.getDate();
            arrDays[i] = `${day}`;
        }
        return arrDays;
    }

    /**
     * @return {Array} возвращает массив дней недели от сегоднешнего до - 6 дней
    */
    _getWeekDays() {
        let arrWeekDays = [];
        for (let i = 0; i < 7; i++) {
            let dat = new Date(new Date() - i * 24 * 3600 * 1000);
            let day = dat.getDay();

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
     * @param {Array} arr масив новостей
     * @param {String} request запрос для поиска
     * @return {Number} возвращает сумму запроса повторений в заголовке и описании новостей
    */
    _serchAll(arr, request) {
        this._amountWordAall = 0;
        let regEx = new RegExp(request, 'ig');
        arr.forEach(({ title, description }) => {
            let wordsTitle = title.match(regEx).length;
            let wordsDescription = description != null && description.match(regEx) != null && description.match(regEx).length != null ? description.match(regEx).length : 0;
            this._amountWordAall += wordsTitle + wordsDescription;
        });
        return this._amountWordAall;
         
    }

    displayStatistics(arrElems) {
        let arrDays = this._getDatesArr().reverse();
        let arrWeekDays = this._getWeekDays().reverse();

        arrElems.forEach((el, index) => {
            el.textContent = `${arrDays[index]}, ${arrWeekDays[index]}`;
        });

    }

    displayGraphs(arrGraphs, arrScalse = [0]) {
        let sortByDay = this._sortByDay().reverse();
        let request = this._dataStorage.getRequest().replace(/"/g, '');

        let arrSerchResult = sortByDay.map((el, index) => {
            return this._serchAll(sortByDay[index], request);
        });

        let newArrSerchResult = arrSerchResult.slice();

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
            let searchResult = this._serchAll(sortByDay[index], request);
            if (index < 5) arrScalse[index].textContent = index * stepScales;
            el.textContent = searchResult;
            el.style.width = `${searchResult * coefficient}%`

        });

    }

}