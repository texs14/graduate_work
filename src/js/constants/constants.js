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


let TABLE_DATE = document.querySelectorAll('.table__item-date');
let TABLE_GRAPHS = document.querySelectorAll('.table__item-graph');
let TABLE_SCALES = document.querySelectorAll('.table__item-scale');


export {
    TOKEN,
    SEVEN_DAYS,
    TABLE_DATE,
    TABLE_GRAPHS,
    TABLE_SCALES,
    WORDS,
    CARD_LIST_CONTAINER,
    INPUT_SEARCH,
    NEW_BUTTON
};