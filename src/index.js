import "./index.css";

import SearchInput from './js/components/SearchInput';
import NewsApi from './js/modules/NewsApi';
import DataStorage from './js/modules/DataStorage';
import NewsCardList from './js/components/NewsCardList';


const words = {
    ru: {
        minlength: 'Упс! Тема не может быть короче двух символов...',
        require: 'Упс! Поле не может быть пустым...'
    }
};
const token = '594335bd431545fc8fec7762f8aa3cf6';
let inputSearch = document.querySelector('.search-form__input');
let cardListContainer = document.querySelector('.news__list-container');

let newsApi = new NewsApi(token);
let dataStorage = new DataStorage();
let newsListCards = new NewsCardList(cardListContainer);
let input = new SearchInput(newsListCards, dataStorage, newsApi, inputSearch, words);


let newButton = document.querySelector('.news__button');

input.submit();
console.log(dataStorage.getNews());
newButton.addEventListener('click', (event) => {
    newsListCards.renderCards(dataStorage.getNews().articles);
});