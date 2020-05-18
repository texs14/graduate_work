import './about.css';
import GitApi from '../js/modules/GitApi';
import CommitCardList from '../js/components/CommitCardList'
import CommitCard from '../js/components/CommitCard'
import DataStorage from '../js/modules/DataStorage';

let dataStorage = new DataStorage();
let git = new GitApi();
let commitCardList = new CommitCardList(dataStorage, git);
let commitCard = new CommitCard();
commitCardList.renderSlaider();
import {mySwiper} from '../vendor/swiper/swiper';
mySwiper.update();