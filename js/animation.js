let alertBox = document.querySelector('.alert__box');
let closeButton = document.querySelector('.alert__box__close');
let hambMenu = document.querySelector('.fa-bars');

hambMenu.addEventListener('click', () => {
    alertBox.style.display = "flex"
})

closeButton.addEventListener('click', () => {
    alertBox.style.display = "none"
})