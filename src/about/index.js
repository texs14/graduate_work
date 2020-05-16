import './about.css';
// import Swiper from '../../node_modules/swiper/js/swiper';
import GitApi from '../js/modules/GitApi';
import CommitCardList from '../js/components/CommitCardList'
import CommitCard from '../js/components/CommitCard'
import DataStorage from '../js/modules/DataStorage';

let dataStorage = new DataStorage();
let git = new GitApi();
let commitCardList = new CommitCardList(dataStorage, git);
let commitCard = new CommitCard();
commitCard.createCard();
commitCardList.renderSlaider();
import {mySwiper} from '../vendor/swiper/swiper';
mySwiper.update();