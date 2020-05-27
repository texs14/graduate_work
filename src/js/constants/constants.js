const TOKEN = '7b31ce5e97e84514a00962ee4b35b7cd';
const SEVEN_DAYS = 7 * 24 * 3600 * 1000;
const ONE_DAY = 24 * 3600 * 1000;
const THREE_CARDS = 3;
const WORDS = {
    RU: {
        ERROR: 'Используйте только кириллицу и латиницу'
    }
};


const inputSearch = document.querySelector('.search-form__input');
const cardListContainer = document.querySelector('.news__list-container');
const newsButton = document.querySelector('.news__button');
const searchForm = document.forms.search;

// элементы таблицы аналитики
const tableDate = document.querySelectorAll('.table__item-date');
const tableGraphs = document.querySelectorAll('.table__item-graph');
const tableScales = document.querySelectorAll('.table__item-scale');


// элементы результата поиска
const searchResult = document.querySelector('.search-result');
const newsBlock = document.querySelector('.news');
const preloader = document.querySelector('.preloader');
const notFound = document.querySelector('.not-found');
const button = document.querySelector('.search-form__button');
const searchErrorMassege = document.querySelector('.serch-result__error-massege');


// элементы для валидации
const errorMassege = document.querySelector('.error-massege');
const input = document.querySelector('.search-form__input');

// регулярное выражение для валидации
const REG_EX = /[^\wа-яА-ЯёЁ\s_]/;

// прокси, посути не нужен, но пусть на всякий тут полежит
const PROXY = 'https://cors-anywhere.herokuapp.com/';

export {
    TOKEN,
    SEVEN_DAYS,
    tableDate,
    tableGraphs,
    tableScales,
    WORDS,
    cardListContainer,
    inputSearch,
    newsButton,
    searchResult,
    newsBlock,
    preloader,
    notFound,
    button,
    errorMassege,
    input,
    REG_EX,
    searchErrorMassege,
    searchForm,
    PROXY,
    THREE_CARDS,
    ONE_DAY

};