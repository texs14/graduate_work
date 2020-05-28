import dateTransform from '../utils/dateTransform';
export default class CommitCard {
    constructor() {}

    createCard(date, imgUrl, email, name, paragraph) {

        
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');

        const card = document.createElement('div');
        card.classList.add('card-comment');

        const dateCard = document.createElement('span');
        dateCard.classList.add('card-comment__date');
        dateCard.textContent = dateTransform(date);

        const image = document.createElement('img');
        image.setAttribute('src', imgUrl); 
        image.setAttribute('alt', 'аватар с Githab'); 
        image.classList.add('card-comment__photo');

        const emailCard = document.createElement('a');
        emailCard.setAttribute('href', `mailto:${email}`); 
        emailCard.classList.add('card-comment__email');
        emailCard.textContent = email

        const nameCard = document.createElement('p');
        nameCard.classList.add('card-comment__name');
        nameCard.textContent = name;

        const paragraphCard = document.createElement('p');
        paragraphCard.classList.add('card-comment__paragraph');
        paragraphCard.textContent = paragraph;

        swiperSlide.appendChild(card);
        card.appendChild(dateCard);
        card.appendChild(image);
        card.appendChild(emailCard);
        card.appendChild(nameCard);
        card.appendChild(paragraphCard);

        return swiperSlide;
    }
}