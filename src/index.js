import "./index.css";

import SearchInput from './js/components/SearchInput';
import NewsApi from './js/modules/NewsApi';
import DataStorage from './js/modules/DataStorage';
import NewsCardList from './js/components/NewsCardList';
import { TOKEN, WORDS, CARD_LIST_CONTAINER, INPUT_SEARCH, NEW_BUTTON } from './js/constants/constants';


let newsApi = new NewsApi(TOKEN);
let dataStorage = new DataStorage();
let newsListCards = new NewsCardList(CARD_LIST_CONTAINER);
let input = new SearchInput(newsListCards, dataStorage, newsApi, INPUT_SEARCH, WORDS);


input.submit();

NEW_BUTTON.addEventListener('click', (event) => {
    newsListCards.renderCards(dataStorage.getNews().articles);
});

document.querySelector('.search-form__input').addEventListener('input', (e) => {
    if (e.target.value.length > 2) document.querySelector('.search-form__button').removeAttribute('disabled');
    else document.querySelector('.search-form__button').setAttribute('disabled', 'disabled');
});