import dateTransform from '../utils/dateTransform';

export default class NewsCard {
    constructor() {}

    create({ description, title, urlToImage, publishedAt, source, url }) {
        description ? `` : description = 'текст отсутствует';
        description.match(/<ol>/) ? description = description.replace(/<ol>|<li>|<\/ol>/g, '').replace(/<\/li>/g, '<br>') : ``;

        const newsCard = document.createElement('li');
        newsCard.classList.add('news__card');
        
        const imageCard = document.createElement('img');
        imageCard.classList.add('news__card-image');
        imageCard.setAttribute('src', urlToImage);
        imageCard.setAttribute('alt', `картинка статьи`);

        const textWrapper = document.createElement('div');
        textWrapper.classList.add('news__news-text-wrapper');

        const dateCard = document.createElement('p');
        dateCard.classList.add('news__card-date');
        dateCard.textContent = dateTransform(publishedAt);

        const titleCard = document.createElement('h2');
        titleCard.classList.add('news__card-title');
        titleCard.textContent = title;

        const paragraphCard = document.createElement('p');
        paragraphCard.classList.add('news__card-paragraph');
        paragraphCard.textContent = description;

        const newspaperCard = document.createElement('address');
        newspaperCard.classList.add('news__card-newspaper');
        newspaperCard.textContent = source.name;

        const linkCard = document.createElement('a');
        linkCard.classList.add('news__card-link');
        linkCard.setAttribute('href', url);
        linkCard.setAttribute('target', '_block');

        newsCard.appendChild(imageCard);
        newsCard.appendChild(textWrapper);
        newsCard.appendChild(linkCard);
        textWrapper.appendChild(dateCard);
        textWrapper.appendChild(titleCard);
        textWrapper.appendChild(paragraphCard);
        textWrapper.appendChild(newspaperCard);

        return newsCard;
    }
}