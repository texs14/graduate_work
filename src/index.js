import "./index.css";

import SearchInput from './js/components/SearchInput';
import NewsApi from './js/modules/NewsApi';
import DataStorage from './js/modules/DataStorage';
import NewsCard from './js/components/NewsCard';
import NewsCardList from './js/components/NewsCardList';
import { TOKEN, WORDS, cardListContainer, inputSearch, newsButton, newsBlock, searchResult, preloader, searchButton, baseUrl } from './js/constants/constants';


const newsApi = new NewsApi(TOKEN);
const dataStorage = new DataStorage();
const newsCard = new NewsCard();
const newsListCards = new NewsCardList(cardListContainer, newsCard);
const input = new SearchInput(newsListCards, dataStorage, newsApi, inputSearch, WORDS);


input.validationSings();
input.validationLingth();
input.submit();

if ((document.referrer === `${baseUrl}index.html` || document.referrer === `${baseUrl}about.html` || document.referrer === `${baseUrl}analytics.html`) && dataStorage.getNews() && dataStorage.getNews().articles.length > 0) {
    newsListCards.renderCards(dataStorage.getNews().articles);
    inputSearch.value = dataStorage.getRequest().replace(/"/g, '');
    searchButton.removeAttribute('disabled');
    preloader.style.display = 'none';
    newsBlock.style.display = 'block';
    searchResult.style.display = 'block';
} else {
    dataStorage.removeNews();
}

newsButton.addEventListener('click', (event) => {
    newsListCards.renderCards(dataStorage.getNews().articles);
});