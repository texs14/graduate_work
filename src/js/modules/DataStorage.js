export default class DataStorage {
    constructor() {
    }

    getNews() {
        let news = JSON.parse(localStorage.news);
        console.log(news);
        return news;
    }

    getCommits() {
        let commits = JSON.parse(localStorage.commits);
        return commits;
    }

    saveNews(news) {
        localStorage.setItem('news', JSON.stringify(news));
    }

    saveGitComment(commits) {
        localStorage.setItem('commits', JSON.stringify(commits));
    }
}