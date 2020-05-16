import "./index.css";

import SearchInput from './js/components/SearchInput';
import NewsApi from './js/modules/NewsApi';
import DataStorage from './js/modules/DataStorage';
import NewsCardList from './js/components/NewsCardList';


const words = {
    ru: {
        minlength: 'Упс! Тема не может быть короче двух символов...',
        require: 'Упс! Поле не может быть пустым...'
    }
};
const token = '594335bd431545fc8fec7762f8aa3cf6';
let inputSearch = document.querySelector('.search-form__input');
let cardListContainer = document.querySelector('.news__list-container');

let newsApi = new NewsApi(token); 
let dataStorage = new DataStorage();
let newsListCards = new NewsCardList(cardListContainer);
let input = new SearchInput(newsListCards, dataStorage, newsApi, inputSearch, words);


let newButton = document.querySelector('.news__button');

input.submit();

newButton.addEventListener('click', (event) => {
    newsListCards.renderCards(dataStorage.getNews());
});


function dateTransform(date) {
    
    let correctDate = date.split('-');

    correctDate[2] = correctDate[2].replace(/.{10}$/, '');
    let mounth = +correctDate[1];

    switch (mounth) {
        case 1: 
            correctDate[1] = 'января';
            break;
        case 2: 
            correctDate[1] = 'февраля';
            break;
        case 3: 
            correctDate[1] = 'марта';
            break;
        case 4: 
            correctDate[1] = 'апреля';
            break;
        case 5: 
            correctDate[1] = 'мая';
            break;
        case 6: 
            correctDate[1] = 'июня';
            break;
        case 7: 
            correctDate[1] = 'июля';
            break;
        case 8: 
            correctDate[1] = 'августа';
            break;
        case 9: 
            correctDate[1] = 'сентября';
            break;
        case 10: 
            correctDate[1] = 'октября';
            break;
        case 11: 
            correctDate[1] = 'ноября';
            break;
        case 12: 
            correctDate[1] = 'деквбря';
            break;
        default: 
            console.log('Очень странно');    
    }

    correctDate = `${correctDate[2]} ${correctDate[1]}, ${correctDate[0]}`;
    
    return correctDate;
}


console.log(dateTransform('2020-05-16T12:32:00Z'));