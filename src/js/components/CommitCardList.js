import CommitCard from './CommitCard';
import {mySwiper} from '../../vendor/swiper/swiper'; 

export default class CommitCardList extends CommitCard {
    constructor(dataStorage, gitApi) {
        super();
        this._gitApi = gitApi;
        this._dataStorage = dataStorage;
    }

    renderSlaider() {
        if (localStorage.commits) {
            this._dataStorage.getCommits().forEach(commit => {
                mySwiper.appendSlide(
                this.createCard(
                    commit.commit.author.date,
                    commit.author.avatar_url,
                    commit.commit.author.email,
                    commit.commit.author.name,
                    commit.commit.message)
                );
            });
        } else {
            this._gitApi.getCommits()
            .then(commits => {
                this._dataStorage.saveGitComment(commits);
                return commits;
            })
            .then(commits => {
                commits.forEach(commit => {
                    mySwiper.appendSlide(
                    this.createCard(
                        commit.commit.author.date,
                        commit.author.avatar_url,
                        commit.commit.author.email,
                        commit.commit.author.name,
                        commit.commit.message)
                    );
                });
            });
            
        }
    }
}