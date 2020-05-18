import './analytics.css';
import DataStorage from '../js/modules/DataStorage';

import Statistics from '../js/components/Statistics';


let data = new DataStorage();

let statistics = new Statistics();
document.querySelector('.serch-info-text__inquiry').textContent = data.getRequest().replace(/"/g, '')[0].toUpperCase() + data.getRequest().slice(2, -1);
document.querySelector('#weeklyNews').textContent = data.getNews().totalResults;

let i = 0;

function serch(arr, request) {
    let regEx = new RegExp(request, 'ig');
    arr.forEach(({ title }) => {
        let summ = title.match(regEx).length;
        i += summ;
    });
    return i;
}

document.querySelector('#mentionsInTitle').textContent = serch(data.getNews().articles, data.getRequest().replace(/"/g, ''));