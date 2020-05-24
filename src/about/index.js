import './about.css';
import GitApi from '../js/modules/GitApi';
import CommitCardList from '../js/components/CommitCardList'
import DataStorage from '../js/modules/DataStorage';

let dataStorage = new DataStorage();
let git = new GitApi();
let commitCardList = new CommitCardList(dataStorage, git);

commitCardList.renderSlaider();

import { mySwiper } from '../vendor/swiper/swiper';
mySwiper.update();