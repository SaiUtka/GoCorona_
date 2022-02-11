const burgerMenu = document.querySelector('.burger-menu')
const burgerIcon = document.querySelector('.header__burger-open')
const body = document.body



burgerIcon.addEventListener("click", function () {
    burgerMenu.classList.toggle("visible");
    body.classList.toggle("scroll-locked");
    burgerIcon.classList.toggle("header__burger-close");
    
});
