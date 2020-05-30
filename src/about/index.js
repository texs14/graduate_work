import './about.css';
import GitApi from '../js/modules/GitApi';
import CommitCard from '../js/components/CommitCard';
import CommitCardList from '../js/components/CommitCardList'
import DataStorage from '../js/modules/DataStorage';

const dataStorage = new DataStorage();
const git = new GitApi();
const commitCard = new CommitCard();
const commitCardList = new CommitCardList(dataStorage, git, commitCard);

commitCardList.renderSlaider();

import { mySwiper } from '../../node_modules/swiper/js/mySwiper';
mySwiper.update();