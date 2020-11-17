$(function(){
    $('.slider-inner, .news-slider-inner').slick({
        nextArrow:'<button type="button" class="slick-btn slick-next">Next</button>',
        prevArrow:'<button type="button" class="slick-btn slick-prev">back</button>'
    });
    $('.header-btn-menu').on('click',function(){
    $('.menu ul').slideToggle();
    });
});
