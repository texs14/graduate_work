import NewsCard from './NewsCard';
import {NEW_BUTTON} from '../constants/constants';

export default class NewsCardList extends NewsCard {
    constructor(container) {
        super();
        this._container = container;
        this._i = 0;
    }

    renderCards(news) {
        const cardList = document.createElement('ul');
        cardList.classList.add('news__list');
        console.log(news);
        let arr = news.slice(this._i, this._i + 3);
        console.log(arr);
        arr.forEach((elem) => {
            cardList.insertAdjacentHTML("afterbegin", this.create(elem));
            this._container.append(cardList);
        });
        this._i += 3;
        this._i >= news.length ?  NEW_BUTTON.style.display = 'none' : ``;
    }



    clearList() {
        NEW_BUTTON.style.display = 'block';
        document.querySelector('.news__list-container').innerHTML = '';
        this._i = 0;
    }
}