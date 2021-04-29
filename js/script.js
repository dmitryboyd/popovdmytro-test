const swiper = new Swiper(".header-slider-gallery", {

    spaceBetween: 0,
    navigation: {
        nextEl: '.header-slider-arrow-right',
        prevEl: '.header-slider-arrow-left',
    },
    loop: true,
    pagination: {
        el: '.header-slider-pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                ' / ' +
                '<span class="' + totalClass + '"></span>';
        }
    },

})

const thumbs = new Swiper(".header-slider-thumbs", {
    navigation: {
        nextEl: '.header-slider-arrow-right',
        prevEl: '.header-slider-arrow-left',
    },
    loop: true,
})

swiper.params.control = thumbs;
thumbs.params.control = swiper;