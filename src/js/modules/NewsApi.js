export default class NewsApi {
    constructor(token) {
        this._token = token;
    }

    getNews(reqest) {
        const SEVEN_DAYS = 7 * 24 * 3600 * 1000;
    let date = new Date();  
        return fetch(
            `https://newsapi.org/v2/everything?qInTitle=+"${reqest}"&from=${new Date(date - SEVEN_DAYS).toISOString()}&to=${new Date().toISOString()}&sortBy=publishedAt&language=ru&pageSize=100&apiKey=${this._token}`
            )
        .then((res) => {
            if (res.ok) return res.json();
            return Promise.reject(res.status);
        })
        .catch((err) => {
            console.log(err);
        });
    }
}