import { searchForm, searchResult, newsBlock, preloader, notFound, button, errorMassege, input, REG_EX, searchErrorMassege } from '../constants/constants';

export default class SearchInput {
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
            errorMassege.textContent = this._WORDS.RU.ERROR;
            errorMassege.style.boxShadow = '0px 0px 20px 10px #cc2a2a';
            if (window.innerWidth <= 450) {
                errorMassege.style.top = '-25%';
            } else {
                errorMassege.style.top = '100%';
            }
            input.classList.add('search-form__input_error');
            return false;
        } else {
            errorMassege.style.top = '0%';
            errorMassege.style.boxShadow = 'none';
            setTimeout(() => {
                errorMassege.textContent = '';
            }, 300);
            input.classList.remove('search-form__input_error');
            return true;
        }
    }

    submit() {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            if (this.validation()) {

                button.setAttribute('disabled', 'disabled');
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
                        console.log(err);
                        searchErrorMassege.style.display = 'block';
                    })
                    .finally(() => {
                        preloader.style.display = 'none';
                        button.removeAttribute('disabled');
                    });
            }
        });
    }
}