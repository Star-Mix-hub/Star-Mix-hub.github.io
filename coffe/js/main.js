$(function(){
 $(".slider-style").slick({
     arrows:false,
     dots:true,
     autoplay:true,
     autoplaySpeed:1000

 });
 $(".burger").click(function(event){
    $(".burger,.header__nav").toggleClass("active");
    });
});