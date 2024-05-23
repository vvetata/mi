import './sass/main.scss';
import './js/brand.js';
import './js/rewievs.js';
import './js/header.js';

let btnBlack = document.querySelector('.btn__black');
let btnWhite = document.querySelector('.btn__white');
let bg = document.querySelector('.wrapper');


let headerTop = document.querySelector('.header__top');
let headerLogo = document.querySelector('.header__logo');
let headerMain = document.querySelector('.header__main');
let btnStyle = document.querySelector('.button__style');
let headerImage = document.querySelector('.header__img');
let burger = document.querySelector('.header__burger');
let text = document.querySelectorAll('.text');
let textArray = Array.from(text);
let aboutHead = document.querySelector('.about__head');
let viewHead = document.querySelector('.view__head');
let textView = document.querySelectorAll('.textMobile');
let textMobileArray = Array.from(textView);
let securityHead  = document.querySelector('.security__head');
let phone = document.querySelector('.app__phone');
let rewiewsCard = document.querySelectorAll('.rewievs__card');
let indicatorsRew = document.querySelectorAll('.rewievs__indicator');
let indicatorsRewArray = Array.from(indicatorsRew);
let rewiewsCardArray = Array.from(rewiewsCard);
let buyContainer = document.querySelector('.buy__container');
let buyBicke = document.querySelector('.buy__bicke');
let btnStyleBuy = document.querySelector('.button__style_buy');
let btnWhiteBuy = document.querySelector('.btn__white_buy');
let btnBlackBuy = document.querySelector('.btn__black_buy');


btnBlack.onclick = () => {

    bg.style.backgroundColor = '#E0E0E0';
    changeHeaderToBlack();
    changeTextColor('#151515');
    aboutHead.style.color = '#151515';
    viewHead.classList.add('view__head_black');
    changeColorViewCardToBlack();
    securityHead.style.color = '#FF4C0D';
    changeColorPhone ('src', 'images/app/phoneWhite.png');
    changeColorRewievsToBlack();
    buyContainer.style.background = '#F1F1F1';
    changeColorBicke('src', 'images/buy/bickeWhite.png');
    changeBuyToBlack();
}


btnWhite.onclick = () => {
    bg.style.backgroundColor = '';
    changeHeaderToWhite();
    changeTextColor('#F1F1F1');
    aboutHead.style.color = '';
    viewHead.classList.remove('view__head_black');
    changeColorViewCardToWhite();
    securityHead.style.color = '';
    changeColorPhone('src', 'images/app/phoneBlack.png');
    changeColorRewievsToWhite();
    buyContainer.style.background = '';
    changeColorBicke('src', 'images/buy/bickeBlack.png');
    changeBuyToWhite();
}

let changeHeaderToBlack = () => {
   headerImage.removeAttribute('src');
    headerImage.setAttribute('src', 'images/header/bickeLineBlack1.png');
    headerTop.classList.add('header__top_black');
    headerLogo.classList.add('header__logo_black');
    headerMain.classList.add('header__main_black');
    btnStyle.classList.add('button__style_black');
    btnWhite.classList.add('btn__white_black');
    btnBlack.classList.add('btn__black_black');
    burger.classList.add('header__burger_black');
}

let changeHeaderToWhite = () => {
headerImage.removeAttribute('src');
    headerImage.setAttribute('src', 'images/header/bickeLineWhite1.png');
    headerTop.classList.remove('header__top_black');
    headerLogo.classList.remove('header__logo_black');
    headerMain.classList.remove('header__main_black');
    btnStyle.classList.remove('button__style_black');
    btnWhite.classList.remove('btn__white_black');
    btnBlack.classList.remove('btn__black_black');
    burger.classList.remove('header__burger_black');
}

let changeTextColor = (color) => {
  for (let t of textArray) {
    t.style.color = color;
  }}

let changeColorViewCardToBlack = () => {
  if (window.innerWidth < 480) {
    for (let tM of textMobileArray) {
      tM.style.color = '#151515';
    }} else {
      for (let tM of textMobileArray) {
      tM.style.color = '';
    }}}

let changeColorViewCardToWhite = () => {
    for (let tM of textMobileArray) {
      tM.style.color = '';
  }
}

let changeColorPhone = (atr, file) => {
phone.removeAttribute(atr);
phone.setAttribute(atr, file);
}

  let changeColorRewievsToBlack = () => {
    for (let rC of rewiewsCardArray) {
      rC.classList.add('rewievs__card_black');
    }
    for (let iR of indicatorsRewArray) {
      iR.style.color = '#151515';
  }
  }

  let changeColorRewievsToWhite = () => {
    for (let rC of rewiewsCardArray) {
      rC.classList.remove('rewievs__card_black');
    }
    for (let iR of indicatorsRewArray) {
      iR.style.color = '';
  }
  }

  let changeColorBicke = (atr, file) => {
    buyBicke.removeAttribute(atr);
    buyBicke.setAttribute(atr, file);
  }

  let changeBuyToBlack = () => {
    btnStyleBuy.classList.add('button__style_black');
    btnWhiteBuy.classList.add('btn__white_black');
    btnBlackBuy.classList.add('btn__black_black');
  }

  let changeBuyToWhite = () => {
    btnStyleBuy.classList.remove('button__style_black');
    btnWhiteBuy.classList.remove('btn__white_black');
    btnBlackBuy.classList.remove('btn__black_black');
  }

  let textBuy = document.querySelectorAll('.textBuy');
  let textBuyArry = Array.from(textBuy);

  btnWhiteBuy.onclick = () =>{
    changeBuyToWhite();
    changeColorBicke('src', 'images/buy/bickeWhite.png');
    buyContainer.style.background = '';
    for (let tB of textBuyArry) {
      tB.style.color = '';
    }
  }
 btnBlackBuy.onclick = () =>{
  changeBuyToBlack();
  changeColorBicke('src', 'images/buy/bickeBlack.png');
  buyContainer.style.background = '#F1F1F1';
  for (let tB of textBuyArry) {
    tB.style.color = '#151515';
  }
}

