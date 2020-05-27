import "./index.css";

import SearchInput from './js/components/SearchInput';
import NewsApi from './js/modules/NewsApi';
import DataStorage from './js/modules/DataStorage';
import NewsCardList from './js/components/NewsCardList';
import { TOKEN, WORDS, cardListContainer, inputSearch, newsButton } from './js/constants/constants';


let newsApi = new NewsApi(TOKEN);
let dataStorage = new DataStorage();
let newsListCards = new NewsCardList(cardListContainer);
let input = new SearchInput(newsListCards, dataStorage, newsApi, inputSearch, WORDS);

input.validation();
input.submit();
console.log(document.forms);

newsButton.addEventListener('click', (event) => {
    newsListCards.renderCards(dataStorage.getNews().articles);
});