import './analytics.css';
import DataStorage from '../js/modules/DataStorage';

import Statistics from '../js/components/Statistics';


let data = new DataStorage();
let statistics = new Statistics(data);

let tableDate = document.querySelectorAll('.table__item-date');
let tableGraphs = document.querySelectorAll('.table__item-graph');
let tableScales = document.querySelectorAll('.table__item-scale');

document.querySelector('.serch-info-text__inquiry').textContent = data.getRequest().replace(/"/g, '')[0].toUpperCase() + data.getRequest().slice(2).replace(/"|\s*"$/g, '');
document.querySelector('#weeklyNews').textContent = data.getNews().totalResults;

document.querySelector('#mentionsInTitle').textContent = statistics.serch(data.getNews().articles, data.getRequest().replace(/"/g, ''));

statistics.displayStatistics(tableDate);
statistics.displayGraphs(tableGraphs, tableScales);