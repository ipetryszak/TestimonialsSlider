let num = 0;
const el = document.querySelectorAll('.slide-element--1');

function nextSlide(e) {
    num < (el.length-1) ? changeSlide(e,++num) : changeSlide(e,num = 0);
}

function prevSlide(e) {
    num > 0 ? changeSlide(e,--num) : changeSlide(e,num = el.length - 1);
}

function changeSlide(e,num) {
        for(let i = 0; i < el.length;i++)
        {
            el[i].style.display = 'none';
        }
        el[num].style.display = 'flex';
}