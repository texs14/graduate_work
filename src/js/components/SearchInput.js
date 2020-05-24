import {SEARCH_RESULT, NEWS_BLOCK, PRELOAD, NOT_FOUND, BUTTON, ERROR_MESSAGE, INPUT, REG_EX} from '../constants/constants';

export default class SearchINPUT {
    constructor(cardsList, dataStorage, newsApi, request, WORDS) {
        this._cardsList = cardsList;
        this._dataStorage = dataStorage;
        this._newsApi = newsApi;
        this._request = request;
        this._WORDS = WORDS;
    }

    validation() {
        document.querySelector('.search-form__input').addEventListener('input', (e) => {
            if (e.target.value.length > 1) document.querySelector('.search-form__button').removeAttribute('disabled');
            else document.querySelector('.search-form__button').setAttribute('disabled', 'disabled');
        });

        if (REG_EX.test(this._request.value)) {
            ERROR_MESSAGE.textContent = this._WORDS.RU.ERROR;
            ERROR_MESSAGE.style.boxShadow = '0px 0px 20px 10px #cc2a2a';
            if (window.innerWidth <= 450) {
                ERROR_MESSAGE.style.top = '-25%';
            } else {
                ERROR_MESSAGE.style.top = '100%';
            }
            INPUT.classList.add('search-form__input_error');
            return false;
        } else {
            ERROR_MESSAGE.style.top = '0%';
            ERROR_MESSAGE.style.boxShadow = 'none';
            setTimeout(() => {
                ERROR_MESSAGE.textContent = '';
            }, 300);
            INPUT.classList.remove('search-form__input_error');
            return true;
        }
    }

    submit() {

        document.forms[0].addEventListener('submit', (event) => {
            event.preventDefault();
            if (this.validation()) {

                BUTTON.setAttribute('disabled', 'disabled');
                this._cardsList.clearList();
                NEWS_BLOCK.style.display = 'none';
                NOT_FOUND.style.display = 'none';
                SEARCH_RESULT.style.display = 'block';
                PRELOAD.style.display = 'block';
                this._newsApi.getNews(this._request.value)
                    .then(res => {
                        this._dataStorage.saveNews(res);
                        console.log(res);
                        return res.articles;
                    })
                    .then(news => {
                        this._dataStorage.saveRequest(this._request);
                        return news;
                    })
                    .then(news => {
                        if (news.length != 0) {
                            console.log(news);
                            this._cardsList.renderCards(news);
                            NEWS_BLOCK.style.display = 'block';
                        } else NOT_FOUND.style.display = 'flex';
                    })
                    .catch(err => {
                        console.log(err);
                        alert('Что-то пошло не так...');
                    })
                    .finally(() => {
                        PRELOAD.style.display = 'none';
                        BUTTON.removeAttribute('disabled');
                    });
            }
        });
    }
}