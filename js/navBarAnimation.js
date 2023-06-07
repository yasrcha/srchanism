let navBar = document.querySelector('nav')
let hambMenu = document.querySelector('.fa-bars')
let container = document.querySelector('main')

hambMenu.addEventListener('click', () => {
    navBar.style.cssText = "left: 0;"
    navBar.classList.add('open')
})

container.addEventListener('click', () => {
    if(navBar.classList.contains('open')) {
        navBar.style.cssText = "left: -100%;"
    }
})
