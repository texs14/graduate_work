import './analytics.css';
import DataStorage from '../js/modules/DataStorage';

import Statistics from '../js/components/Statistics';


let data = new DataStorage();
let statistics = new Statistics(data);

statistics.getRequestHeaders();

// console.log(data.getRequest());
// console.log(data.getNews().articles);

document.querySelector('.serch-info-text__inquiry').textContent = data.getRequest().replace(/"/g, '')[0].toUpperCase() + data.getRequest().slice(2).replace(/"|\s*"$/g, '');
document.querySelector('#weeklyNews').textContent = data.getNews().totalResults;

document.querySelector('#mentionsInTitle').textContent = statistics.serch(data.getNews().articles, data.getRequest().replace(/"/g, ''));

// function getDatesArr() {
//     let arr =[];
//     for(let i = 0; i <7; i++){
//         let dat = new Date(new Date() - i * 24 * 3600 * 1000);
//         let day = dat.getDate();
//         let maunth = dat.getMonth() + 1  < 10 ? `0${dat.getMonth() + 1}` : dat.getMonth() + 1;
//         let year = dat.getFullYear();
//         arr[i] = `${day}`;
//     }
//     return arr;
// }

// let arrDays = getDatesArr();
// let obj = [];

// for( let i = 0; i < 7; i++) {
//     let regEx = new RegExp(`^.{8}${arrDays[i]}`, '');
    
//     let arr = data.getNews().articles.filter((item) => {
//         return item.publishedAt.match(regEx) != null;
//     });
//     obj[i] = arr;
//     console.log(obj[i]);
// }

// 

// obj.forEach(elem => {

//     statistics._serchAll(elem, data.getRequest().replace(/"/g, ''));
// });


let a = document.querySelectorAll('.table__item-date');
let b = document.querySelectorAll('.table__item-graph');


statistics.displayStatistics(a);
statistics.displayGraphs(b);
// console.log(a);

// console.log(arrDays);