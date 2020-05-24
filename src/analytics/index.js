import './analytics.css';
import DataStorage from '../js/modules/DataStorage';
import Statistics from '../js/components/Statistics';
import { TABLE_DATE, TABLE_GRAPHS, TABLE_SCALES } from '../js/constants/constants';

let data = new DataStorage();
let statistics = new Statistics(data);

// вывод запроса на страницу, колличество новостей и совпадений в загаловках
document.querySelector('.serch-info-text__inquiry').textContent = data.getRequest().replace(/"/g, '')[0].toUpperCase() + data.getRequest().slice(2).replace(/"|\s*"$/g, '');
document.querySelector('#weeklyNews').textContent = data.getNews().totalResults;

document.querySelector('#mentionsInTitle').textContent = statistics.serch(data.getNews().articles, data.getRequest().replace(/"/g, ''));

statistics.displayStatistics(TABLE_DATE);
statistics.displayGraphs(TABLE_GRAPHS, TABLE_SCALES);