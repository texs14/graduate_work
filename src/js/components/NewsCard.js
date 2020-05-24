import dateTransform from '../utils/dateTransform';

export default class NewsCard {
    constructor() {}

    create({ description, title, urlToImage, publishedAt, source, url }) {
        description ? `` : description = 'текст отсутствует';
        description.match(/<ol>/) ? description = description.replace(/<ol>|<li>|<\/ol>/g, '').replace(/<\/li>/g, '<br>') : ``;
        let templateNewsCard =
        `<li class="news__card">
            <img src="${urlToImage}" alt="картинка статьи" class="news__card-image">
            <div class="news__news-text-wrapper">
                <p class="news__card-date">${dateTransform(publishedAt)}</p>
                <h2 class="news__card-title">${title}</h2>
                <p class="news__card-paragraph">${description}</p>
                <address class="news__card-newspaper">${source.name}</address>
            </div>
                <a href="${url}" target="_block" class="news__card-link">
                </a>    
        </li>`;
        return templateNewsCard;
    }
}