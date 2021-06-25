import { searchForm, searchResult, newsBlock, preloader, notFound, button, errorMassege, inputSearch, REG_EX, searchErrorMassege, searchButton } from '../constants/constants';
import showError from '../utils/showError';
import hideError from '../utils/hideError';

export default class SearchInput {
    constructor(cardsList, dataStorage, newsApi, request, WORDS) {
        this._cardsList = cardsList;
        this._dataStorage = dataStorage;
        this._newsApi = newsApi;
        this._request = request;
        this._WORDS = WORDS;
    }

    validationLingth() {
        inputSearch.addEventListener('input', (e) => {
            if (!(e.target.value.length > 1)) {
                searchButton.setAttribute('disabled', 'disabled');
                showError(this._WORDS.RU.ERROR_LENGTH);
            } else {
                searchButton.removeAttribute('disabled');
                hideError();
            }
        });
    }


    validationSings() {
        if (REG_EX.test(this._request.value)) {
            showError(this._WORDS.RU.ERROR_SINGS);
            return false;
        } else {
            hideError();
            return true;
        }
    }

    submit() {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            if (this.validationSings()) {
                button.setAttribute('disabled', 'disabled');
                inputSearch.setAttribute('disabled', 'disabled');
                this._cardsList.clearList();
                newsBlock.style.display = 'none';
                notFound.style.display = 'none';
                searchResult.style.display = 'block';
                preloader.style.display = 'block';
                this._newsApi.getNews(this._request.value)
                    .then(res => {
                        this._dataStorage.saveNews(res);
                        return res.articles;
                    })
                    .then(news => {
                        this._dataStorage.saveRequest(this._request);
                        return news;
                    })
                    .then(news => {
                        if (news.length != 0) {
                            this._cardsList.renderCards(news);
                            newsBlock.style.display = 'block';
                        } else notFound.style.display = 'flex';
                    })
                    .catch(err => {
                        console.log("Номер ошибки сервера:" + err);
                        searchErrorMassege.style.display = 'block';
                    })
                    .finally(() => {
                        preloader.style.display = 'none';
                        button.removeAttribute('disabled');
                        inputSearch.removeAttribute('disabled');
                    });
            }
        });
    }
}