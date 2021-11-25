$('.carousel__blocks').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/right.svg"></button>',
});

$('.questions__item-title').on('click', function() {
    $('.questions__item').removeClass('questions__item--active');
    $(this).parent().addClass('questions__item--active');
});