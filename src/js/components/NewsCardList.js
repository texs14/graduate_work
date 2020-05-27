import NewsCard from './NewsCard';
import { newsButton, searchErrorMassege, THREE_CARDS } from '../constants/constants';

export default class NewsCardList extends NewsCard {
    constructor(container) {
        super();
        this._container = container;
        this._i = 0;
    }

    renderCards(news) {
        const cardList = document.createElement('ul');
        cardList.classList.add('news__list');
        let arrThreeCards = news.slice(this._i, this._i + THREE_CARDS);
        arrThreeCards.forEach((elem) => {
            cardList.insertAdjacentHTML("afterbegin", this.create(elem));
            this._container.append(cardList);
        });
        this._i += THREE_CARDS;
        this._i >= news.length ? newsButton.style.display = 'none' : ``;
    }



    clearList() {
        newsButton.style.display = 'block';
        searchErrorMassege.style.display = 'none';
        document.querySelector('.news__list-container').innerHTML = '';
        this._i = 0;
    }
}