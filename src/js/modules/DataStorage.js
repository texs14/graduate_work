export default class DataStorage {
    constructor() {}

    getNews() {
        if (localStorage.news){
            const news = JSON.parse(localStorage.getItem(`news`));
            return news;
        } else return false;
    }

    getCommits() {
        const commits = JSON.parse(localStorage.getItem(`commits`));
        return commits;
    }

    getRequest() {
        const request = localStorage.getItem(`request`);
        return request;
    }

    saveNews(news) {
        localStorage.setItem('news', JSON.stringify(news));
    }

    saveGitComment(commits) {
        localStorage.setItem('commits', JSON.stringify(commits));
    }

    saveRequest(request) {
        localStorage.setItem('request', JSON.stringify(request.value.replace(/^\s*|\s*$/g, '')));
    }

    removeNews() {
        localStorage.removeItem(`news`);
    }
}