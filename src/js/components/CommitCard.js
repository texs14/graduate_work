import dateTransform from '../utils/dateTransform';
export default class CommitCard {
    constructor() {

    }

    createCard(date, imgUrl, email, name, paragraph) {
        console.log(date);

        const templateCard = 
            `<div class="swiper-slide">
                <div class="card-comment">
                    <span class="card-comment__date">${dateTransform(date)}</span>
                    <img src="${imgUrl}" alt="аватар с Githab" class="card-comment__photo">
                    <a href="mailto:${email}" class="card-comment__email">${email}</a>
                    <p class="card-comment__name">${name}</p>
                    <p class="card-comment__paragraph">${paragraph}
                    </p>
                </div>
            </div>`;

        return templateCard;
    }
}