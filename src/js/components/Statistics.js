export default class Statistics {
    constructor(dataStorage) {
        this._amountWords = 0;
        this._amountWordAall = 0;
        this._dataStorage = dataStorage;
    }

    getRequestHeaders() {

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
     * Метод возвращает отcортированный массив новостей, 
     * исключая новости без указания двты
     * @return {Array}
     */
    _sortByDay() {
        let arrDays = this._getDatesArr();
        let sortArrByDay = [];
        for (let i = 0; i < 7; i++) {
            let regEx = new RegExp(`^.{8}${arrDays[i]}`, ''); //создаётся регулярноее выражение выбирающее дату

            console.log(this._dataStorage.getNews().articles);
            console.log(regEx);
            let arr = this._dataStorage.getNews().articles.filter((item) => {
                return item.publishedAt.match(regEx) != null;
            });
            sortArrByDay[i] = arr;
        }
        console.log(sortArrByDay);

        return sortArrByDay;
    }


    /**
     * Метод возвращает массив дней с сегодняшнего по - 7 дней
     * @return{Array}
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
        // console.log(arrWeekDays);
        return arrWeekDays;
    }

    _serchAll(arr, request) {
        // console.log(arr);
        // console.log(request);
        this._amountWordAall = 0;
        let regEx = new RegExp(request, 'ig');
        arr.forEach(({ title, description }) => {
            let wordsTitle = title.match(regEx).length;
            let wordsDescription = description != null && description.match(regEx) != null && description.match(regEx).length != null ? description.match(regEx).length : 0;
            this._amountWordAall += wordsTitle + wordsDescription;
        });
        // console.log(this._amountWordAall);
        let sum = this._amountWordAall;
        return sum;
    }

    displayStatistics(arrElems) {
        let arrDays = this._getDatesArr().reverse();
        let arrWeekDays = this._getWeekDays().reverse();

        arrElems.forEach((el, index) => {
            el.textContent = `${arrDays[index]}, ${arrWeekDays[index]}`;
        });
        // console.log(arrDays);
        // console.log(arrWeekDays);

    }

    displayGraphs(arrGraphs, arrScalse = [0]) {
        let sortByDay = this._sortByDay().reverse();
        let request = this._dataStorage.getRequest().replace(/"/g, '');
        // console.log(sortByDay);

        let arrSerchResult = sortByDay.map((el, index) => {
            return this._serchAll(sortByDay[index], request);
        });

        let newArrSerchResult = arrSerchResult.map(el => { return el });

        let coefficient = 1;
        let stepScales = 25;

        newArrSerchResult.sort((a, b) => {
            return b - a;
        })

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
            // console.log(arrScalse[index]);   
            if (index < 5) arrScalse[index].textContent = index * stepScales;
            el.textContent = searchResult;
            el.style.width = `${searchResult * coefficient}%`
                // console.log(this._dataStorage.getRequest().replace(/"/g, ''));
                // console.log(searchResult);
                // console.log(sortByDay[index]);
        });
        // console.log(newArrSerchResult);
        // console.log(arrSerchResult);
    }

}