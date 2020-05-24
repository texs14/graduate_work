const TOKEN = '7b31ce5e97e84514a00962ee4b35b7cd';
const SEVEN_DAYS = 7 * 24 * 3600 * 1000;


let INPUT_SEARCH = document.querySelector('.search-form__input');
let CARD_LIST_CONTAINER = document.querySelector('.news__list-container');
let NEW_BUTTON = document.querySelector('.news__button');

const WORDS = {
    RU: {
        ERROR: 'Используйте только кириллицу и латиницу'
    }
};

// элементы таблицы аналитики
let TABLE_DATE = document.querySelectorAll('.table__item-date');
let TABLE_GRAPHS = document.querySelectorAll('.table__item-graph');
let TABLE_SCALES = document.querySelectorAll('.table__item-scale');


// элементы результата поиска
const SEARCH_RESULT = document.querySelector('.search-result');
const NEWS_BLOCK = document.querySelector('.news');
const PRELOAD = document.querySelector('.preloader');
const NOT_FOUND = document.querySelector('.not-found');
const BUTTON = document.querySelector('.search-form__button');


// элементы для валидации
const ERROR_MESSAGE = document.querySelector('.error-massege');
const INPUT = document.querySelector('.search-form__input');

// регулярное выражение для валидации
const REG_EX = /[^\wа-яА-ЯёЁ\s_]/;

export {
    TOKEN,
    SEVEN_DAYS,
    TABLE_DATE,
    TABLE_GRAPHS,
    TABLE_SCALES,
    WORDS,
    CARD_LIST_CONTAINER,
    INPUT_SEARCH,
    NEW_BUTTON,
    SEARCH_RESULT,
    NEWS_BLOCK,
    PRELOAD,
    NOT_FOUND,
    BUTTON,
    ERROR_MESSAGE,
    INPUT,
    REG_EX
    
};