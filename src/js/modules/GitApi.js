export default class GitApi {
    constructor() {

    }

    getCommits() {
        return fetch('https://api.github.com/repos/texs14/graduate_work/commits?per_page=20')
        .then(res => {
            if (res.ok) return res.json();
            return Promise.reject(res.status);
        })
        .catch(err => {
            console.log(err);
        });
    }
}