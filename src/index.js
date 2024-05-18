import './sass/main.scss'

let btnBlack = document.querySelector('.btn__black');
let btnWhite = document.querySelector('.btn__white');
let bg = document.querySelector('.wrapper');

let header = document.querySelector('.header');
let headerTop = document.querySelector('.header__top');
let headerLogo = document.querySelector('.header__logo');
let headerMain = document.querySelector('.header__main');
let btnStyle = document.querySelector('.button__style');
let headerImage =document.querySelector('.header__img');
let text = document.querySelectorAll('.text');
let textArray = Array.from(text);

let aboutLine = document.querySelector('.about__line');

btnBlack.onclick = () => {
    bg.style.backgroundColor = '#E0E0E0';
    headerImage.removeAttribute('src');
    headerImage.setAttribute('src', 'images/header/bickeLineBlack1.png');
    headerTop.classList.add('header__top_black');
    headerLogo.classList.add('header__logo_black');
    headerMain.classList.add('header__main_black');
    btnStyle.classList.add('button__style_black');
    btnWhite.classList.add('btn__white_black');
    btnBlack.classList.add('btn__black_black');
    changeTextColorToBlack();
}


btnWhite.onclick = () => {
    bg.style.backgroundColor = '';
    headerImage.removeAttribute('src');
    headerImage.setAttribute('src', 'images/header/bickeLineWhite1.png');
    headerTop.classList.remove('header__top_black');
    headerLogo.classList.remove('header__logo_black');
    headerMain.classList.remove('header__main_black');
    btnStyle.classList.remove('button__style_black');
    btnWhite.classList.remove('btn__white_black');
    btnBlack.classList.remove('btn__black_black');
    changeTextColorToWhite();
}
let changeTextColorToBlack = () => {
  for (let t of textArray) {
    t.style.color = "#151515";
  }}
  let changeTextColorToWhite = () => {
    for (let t of textArray) {
      t.style.color = "#F1F1F1";
    }}


/*if (window.innerWidth <= 1000) {
    aboutLine.removeAttribute('src');
}

if (window.innerWidth <= 480) {
    aboutLine.removeAttribute('src');
    aboutLine.setAttribute('src', 'images/about/lineMobile.png');
}*/