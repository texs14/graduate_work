export var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        310: {
            loop: false,
            slidesPerView: 1,
            spaceBetween: 8,
            freeMode: true,
        },

        650: {
            loop: false,
            slidesPerView: 2,
            spaceBetween: 8,
            freeMode: false,
        },

        1200: {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: false,
        }


    },
    grabCursor: true,


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})