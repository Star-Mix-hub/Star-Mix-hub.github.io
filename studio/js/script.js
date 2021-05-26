let menuBurger = document.querySelector('.burger__menu');
let nav = document.querySelector('.nav');
menuBurger.addEventListener('click',function(){
    nav.classList.toggle('active');
});