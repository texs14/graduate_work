export default class Statistics {
    constructor(dataStorage) {
        this._amountWords = 0;
        this._amountWordsall = 0;
        this._dataStorage = dataStorage;
    }

    getRequestHeaders() {
        
    }

    serch(arr, request) {
        let regEx = new RegExp(request, 'ig');
        arr.forEach(({title}) => {

            let words = title.match(regEx).length;
            
            this._amountWords += words;
        });
        return this._amountWords;
    }

    _sortByDay() {
        let arrDays = this._getDatesArr();
        let sortArrByDay = [];
        for( let i = 0; i < 7; i++) {
            let regEx = new RegExp(arrDays[i], '');
            
            let arr = this._dataStorage.getNews().articles.filter((item) => {
                return item.publishedAt.match(regEx) != null;
            });
            sortArrByDay[i] = arr;
        }

        return sortArrByDay;
    }

    _getDatesArr() {
        let arrDays =[];
        for(let i = 0; i <7; i++){
            let dat = new Date(new Date() - i * 24 * 3600 * 1000);
            let day = dat.getDate();
            arrDays[i] = `${day}`;
        }
        return arrDays;
    }

    _getWeekDays() {
        let arrWeekDays =[];
        for(let i = 0; i <7; i++){
            let dat = new Date(new Date() - i * 24 * 3600 * 1000);
            let day = dat.getDay();

            switch(day) {
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
        console.log(arrWeekDays);
        return arrWeekDays;
    }

    _serchAll(arr, request) {
        console.log(arr);
        console.log(request);
        let regEx = new RegExp(request, 'ig');
        arr.forEach(({title, description}) => {
            let wordsTitle = title.match(regEx).length;
            let wordsDescription = description != null && description.match(regEx) != null && description.match(regEx).length != null ? description.match(regEx).length : 0; 
            this._amountWordsall += wordsTitle + wordsDescription;
        });
        console.log(this._amountWordsall);
        return this._amountWordsAll;
    }

    displayStatistics(arrElems) {
        let arrDays = this._getDatesArr().reverse();
        let arrWeekDays = this._getWeekDays().reverse();

        arrElems.forEach((el, index) => {
            el.textContent = `${arrDays[index]}, ${arrWeekDays[index]}`;
        });
        console.log(arrDays);
        console.log(arrWeekDays);
        
    }
    
    displayGraphs(arrGraphs) {
        let sortByDay = this._sortByDay();
        // console.log(sortByDay);
        arrGraphs.forEach((el, index) => {
            let searchResult = this._serchAll(sortByDay[index], this._dataStorage.getRequest().replace(/"/g, ''));
            // console.log(searchResult);
            console.log(sortByDay[index]);
        });
    }

}