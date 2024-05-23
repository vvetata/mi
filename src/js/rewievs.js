let rewievsBlock = document.querySelector('.rewievs');
let btnLeft = document.querySelector('.rewievs__btnLeft');
let btnRight = document.querySelector('.rewievs__btnRight');
let rewievsCards = document.querySelector('.rewievs__cards');
let rewievsCard = document.querySelector('.rewievs__card');
let indicatorsRew = document.querySelectorAll('.rewievs__indicator');
let indicatorsRewArray = Array.from(indicatorsRew);
let rewievsAddBtn = document.querySelector('.rewievs__button');

btnRight.onclick = () => {
    
    rewievsCards.scrollBy({ 
        left: rewievsCard.clientWidth + 40, 
        behavior: 'smooth' 
      });
    setTimeout(() => {isNotActive();}, 100);
    
}

btnLeft.onclick = () => {
    rewievsCards.scrollBy({ 
        left: -(rewievsCard.clientWidth + 40), 
        behavior: 'smooth' 
      })
    setTimeout(() => {isNotActive();}, 400);
}

indicatorsRew.forEach((ind, index) => {
    ind.addEventListener('click', () => {
        rewievsCards.scrollLeft = (rewievsCard.clientWidth + 40) * index;
        indIndex = index;
        thisSlide(indIndex);
    })
    })

let thisSlide = (index) => {
    for (let ind of indicatorsRew) {
        ind.classList.remove('rewievs__indicator_active');
    }
    indicatorsRew[indIndex].classList.add('rewievs__indicator_active');
}


let isNotActive = () => { 
    console.log(rewievsCards.scrollLeft);
if (rewievsCards.scrollLeft === 0) {
    btnRight.classList.add('rewievs__btn_active');
    btnLeft.classList.remove('rewievs__btn_active');
} else if (rewievsCards.scrollLeft > 0 && rewievsCards.scrollLeft < rewievsCards.clientWidth) {
    btnLeft.classList.add('rewievs__btn_active');
    btnRight.classList.add('rewievs__btn_active');
} else {
    btnLeft.classList.add('rewievs__btn_active');
    btnRight.classList.remove('rewievs__btn_active');
}}


if (window.innerWidth < 480) {
    rewievsBlock.append(rewievsAddBtn);
}