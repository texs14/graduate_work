import './analytics.css';
import DataStorage from '../js/modules/DataStorage';
import Statistics from '../js/components/Statistics';
import { tableDate, tableGraphs, tableScales } from '../js/constants/constants';
import getMonth from '../js/utils/getMonth';

const data = new DataStorage();
const statistics = new Statistics(data);

// вывод на страницу текущего месяца, запроса, колличество новостей и совпадений в загаловках
document.querySelector('.table__title_month').textContent = `(${getMonth()})`;
document.querySelector('.serch-info-text__inquiry').textContent = data.getRequest().replace(/"/g, '')[0].toUpperCase() + data.getRequest().slice(2).replace(/"|\s*"$/g, '');
document.querySelector('#weeklyNews').textContent = data.getNews().totalResults;



document.querySelector('#mentionsInTitle').textContent = statistics.serch(data.getNews().articles, data.getRequest().replace(/"/g, ''));

statistics.displayStatistics(tableDate);
statistics.displayGraphs(tableGraphs, tableScales);