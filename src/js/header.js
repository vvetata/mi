let headerNav = document.querySelector('.header__nav');
let nav = headerNav.children;
let btnBuy = document.querySelector('.header__button');
let about = document.querySelector('.about');
let view = document.querySelector('.view');
let security = document.querySelector('.security');
let rewievs = document.querySelector('.rewievs');
let questions = document.querySelector('.questions');
let buy = document.querySelector('.buy');
let burger = document.querySelector('.header__burger');

console.log()

nav[0].onclick = () => {
   about.scrollIntoView({
    behavior: 'smooth'
   });
   headerNav.classList.remove('display_block');
    return false;
}

nav[1].onclick = () => {
    view.scrollIntoView({
        behavior: 'smooth'
       });
       headerNav.classList.remove('display_block');
     return false;
}

nav[2].onclick = () => {
    security.scrollIntoView({
        behavior: 'smooth'
       });
       headerNav.classList.remove('display_block');
     return false;
}

nav[3].onclick = () => {
    rewievs.scrollIntoView({
        behavior: 'smooth'
       });
       headerNav.classList.remove('display_block');
     return false;
}

nav[4].onclick = () => {
    questions.scrollIntoView({
        behavior: 'smooth'
       });
       headerNav.classList.remove('display_block');
     return false;
}

btnBuy.onclick = () => {
    buy.scrollIntoView({
        behavior: 'smooth'
       });
       headerNav.classList.remove('display_block');
       return false;
}

burger.onclick = () => {
        headerNav.classList.toggle('display_block');
        
}