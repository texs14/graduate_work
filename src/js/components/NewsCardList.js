import NewsCard from "./NewsCard";

export default class NewsCardList extends NewsCard {
    constructor(container) {
        super();
        this._container = container;
        this._i = 0;
    }

    renderCards(news) {
        const cardList = document.createElement('ul');
        cardList.classList.add('news__list');

        let arr = news.slice(this._i, this._i + 3);

        arr.forEach((elem) => {
            cardList.insertAdjacentHTML("afterbegin", this.create(elem));
            this._container.append(cardList);
        });
        this._i += 3;
    }



    clearList() {
        document.querySelector('.news__list-container').innerHTML = '';
        this._i = 0;
    }
}