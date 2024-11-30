let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.header-nav')
menu.onclick = () => {
    menu.classList.toggle('move');
    navbar.classList.toggle('open-menu');
}

window.onscroll = () => {
    if (navbar.classList.contains('open-menu')) {
        menu.classList.remove('move');
        navbar.classList.remove('open-menu');
    }
}