let resursesTitle = document.querySelector('.buy__resursesTitle');
let resursesTextMobile = document.querySelector('.buy__resursesText__mobile');


resursesTitle.onclick = () => {
    resursesTitle.classList.toggle('margin_10');
    resursesTextMobile.classList.toggle('display_block');
    
}