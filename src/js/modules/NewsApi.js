import { SEVEN_DAYS } from '../constants/constants';


export default class NewsApi {
    constructor(token) {
        this._token = token;
    }

    getNews(reqest) {
        return fetch(
                `https://newsapi.org/v2/everything?qInTitle=+"${reqest}"&from=${new Date(new Date() - SEVEN_DAYS).toISOString()}&to=${new Date().toISOString()}&language=ru&pageSize=100&apiKey=${this._token}`
            )
            .then(res => {
                if (res.ok) return res.json();
                return Promise.reject(res.status);
            })
            .catch(err => {
                throw err;
            });
    }
}