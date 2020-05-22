import "./index.css";

import SearchInput from './js/components/SearchInput';
import NewsApi from './js/modules/NewsApi';
import DataStorage from './js/modules/DataStorage';
import NewsCardList from './js/components/NewsCardList';


// const words = {
//     ru: {
//         minlength: 'Используйте только кириллицу и латиницу',
//         require: 'Упс! Поле не может быть пустым...'
//     }
// };
// const token = '7b31ce5e97e84514a00962ee4b35b7cd';
// let inputSearch = document.querySelector('.search-form__input');
// let cardListContainer = document.querySelector('.news__list-container');

// let newsApi = new NewsApi(token);
// let dataStorage = new DataStorage();
// let newsListCards = new NewsCardList(cardListContainer);
// let input = new SearchInput(newsListCards, dataStorage, newsApi, inputSearch, words);


// let newButton = document.querySelector('.news__button');

// input.submit();
// newButton.addEventListener('click', (event) => {
//     newsListCards.renderCards(dataStorage.getNews().articles);
// });

// document.querySelector('.search-form__input').addEventListener('input', (e) => {
//     if (e.target.value.length > 2) document.querySelector('.search-form__button').removeAttribute('disabled');
//     else  document.querySelector('.search-form__button').setAttribute('disabled', 'disabled');
// });

function solution(str){
   let arr = str.split('');
   if(arr.length % 2 != 0) arr.push('_');
   let newArr = [];
   arr = arr.map( (el, i) => {
       el + 1;
   });
    newArr.join();
   console.log(arr);
}


solution('stasdasdasdr');