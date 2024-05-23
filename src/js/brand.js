let brandBlock = document.querySelector('.brand');
let brandCard = document.querySelector('.brand___card');
let wBC = brandCard.clientWidth;
let hBC = brandCard.clientHeight;
let brandCards = document.querySelector('.brand__cards');
brandCards.style.maxHeight = hBC + 'px';
brandBlock.style.maxHeight = hBC + 'px';
let indicators = document.querySelectorAll('.brand__indicator');
let indIndex = 0;
let position = 0;

let cardBrandimg = document.querySelectorAll('.card-brand__image');
let cardBrandimgArr = Array.from(cardBrandimg);

if (window.innerWidth > 480) {
    indicators.forEach((ind, index) => {
        ind.addEventListener('click', () => {
            brandCards.scrollTop = hBC * index;
            indIndex = index;
            thisSlide(indIndex);
        })
        })

    let thisSlide = (index) => {
        for (let ind of indicators) {
            ind.classList.remove('brand__indicator_active');
        }
        indicators[indIndex].classList.add('brand__indicator_active');
}
} else {
    indicators.forEach((ind, index) => {
        ind.addEventListener('click', () => {
            brandCards.scrollLeft = wBC * index;
            indIndex = index;
            thisSlide(indIndex);
        })
        })
    
    let thisSlide = (index) => {
        for (let ind of indicators) {
            ind.classList.remove('brand__indicator_active');
        }
        indicators[indIndex].classList.add('brand__indicator_active');
}
}

if (window.innerWidth < 480) {
    brandCard.style.width = window.innerWidth + 'px';
    
    /*for (let img of cardBrandimgArr) {
        img.classList.remove('_ibg');
      }*/
}


