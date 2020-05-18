import dateTransform from '../utils/dateTransform';
export default class CommitCard {
    constructor() {

    }

    createCard(date, imgUrl, email, name, paragraph) {
        // const swiperSlide = document.createElement('div');
        // swiperSlide.classList.add('swiper-slide');

        // const card = document.createElement('div');
        // card.classList.add('card-comment');

        // const dateCard = document.createElement('span');
        // dateCard.classList.add('card-comment__date');
        // dateCard.textContent = date;

        // const image = document.createElement('img');
        // image.setAttribute('src', imgUrl); // !!!ADD LINK!!!
        // image.setAttribute('alt', 'аватар с Githab'); 
        // image.classList.add('card-comment__photo');

        // const emailCard = document.createElement('a');
        // emailCard.setAttribute('href', `mailto:${email}`); // !!!ADD EMAIL!!!
        // emailCard.classList.add('card-comment__email');
        // emailCard.textContent = email

        // const nameCard = document.createElement('p');
        // nameCard.classList.add('card-comment__name');
        // nameCard.textContent = name;

        // const paragraphCard = document.createElement('p');
        // paragraphCard.classList.add('card-comment__paragraph');
        // paragraphCard.textContent = paragraph;

        // swiperSlide.appendChild(card);
        // card.appendChild(dateCard);
        // card.appendChild(image);
        // card.appendChild(emailCard);
        // card.appendChild(nameCard);
        // card.appendChild(paragraphCard);
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