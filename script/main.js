let num = 0;
const el = document.querySelectorAll('.slide-element--1');

function nextSlide(e) {
    if(num < el.length - 1)
    {
        num++;
        changeSlide(e,num);
    }
    else
    {
        num = 0;
        changeSlide(e,num);
    }

}

function prevSlide(e) {
    if(num>0)
    {
        num--;
        changeSlide(e,num);
    }
    else {
        num = el.length - 1;
        changeSlide(e,num);
    }
}


function changeSlide(e,num) {
        console.log(el, num);
        for(let i = 0; i < el.length;i++)
        {
            el[i].style.display = 'none';
        }
        el[num].style.display = 'flex';
}