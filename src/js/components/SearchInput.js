export default class SearchInput {
    constructor(cardsList, dataStorage, newsApi, request, words) {
        this.cardsList = cardsList;
        this._dataStorage = dataStorage;
        this._newsApi = newsApi;
        this.request = request;
        this.words = words;
    }
    
    _validation() {
        let errirMessage = document.querySelector('.error-massege');
        let input = document.querySelector('.search-form__input');
        const regEx = /[^\wа-яА-ЯёЁ\s_]/;
        
        if (regEx.test(this.request.value)) {
            errirMessage.textContent = this.words.ru.minlength;
            errirMessage.style.boxShadow = '0px 0px 20px 10px #cc2a2a';
            if (window.innerWidth <= 450) {
                errirMessage.style.top = '-25%';
            } else {
                errirMessage.style.top = '100%';
            }
            input.classList.add('search-form__input_error');
            return false;
        } else {
            errirMessage.style.top = '0%';
            errirMessage.style.boxShadow = 'none';
            setTimeout(() => {
                errirMessage.textContent = '';
            }, 300);
            input.classList.remove('search-form__input_error');
            return true;
        }
    }
    
    submit() {
        const searchResult = document.querySelector('.search-result');
        const newsBlock = document.querySelector('.news');
        const preloader = document.querySelector('.preloader');
        const notFound = document.querySelector('.not-found');
        const button = document.querySelector('.search-form__button');
        
        document.forms[0].addEventListener('submit', (event) => {
            event.preventDefault();
            if (this._validation()) {

                button.setAttribute('disabled', 'disabled');
                this.cardsList.clearList();
                newsBlock.style.display = 'none';
                notFound.style.display = 'none';
                searchResult.style.display = 'block';
                preloader.style.display = 'block';
                this._newsApi.getNews(this.request)
                    .then(res => {
                        this._dataStorage.saveNews(res);
                        console.log(res.articles);
                        return res.articles;
                    })
                    .then(news => {
                        this._dataStorage.saveRequest(this.request);
                        return news;
                    })
                    .then(news => {
                        if (news.length != 0) {
                            console.log(news);
                            this.cardsList.renderCards(news);
                            newsBlock.style.display = 'block';
                        } else notFound.style.display = 'flex';
                    })
                    .catch(err => {
                        alert('Что-то пошло не так...');
                    })
                    .finally(() => {
                        preloader.style.display = 'none';
                        button.removeAttribute('disabled');
                    });
            }
                
                
            });
            
        }
    }