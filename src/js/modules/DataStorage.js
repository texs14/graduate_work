export default class DataStorage {
    constructor() {}

    getNews() {
        let news = JSON.parse(localStorage.news);
        // console.log(news);
        return news;
    }

    getCommits() {
        let commits = JSON.parse(localStorage.commits);
        return commits;
    }

    getRequest() {
        let request = localStorage.request;
        return request;
    }

    saveNews(news) {
        localStorage.setItem('news', JSON.stringify(news));
    }

    saveGitComment(commits) {
        localStorage.setItem('commits', JSON.stringify(commits));
    }

    saveRequest(request) {
        // console.log(request);
        localStorage.setItem('request', JSON.stringify(request.replace(/^\s*|\s*$/g, '')));
    }
}