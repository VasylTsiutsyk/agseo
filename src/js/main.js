/*cursor*/
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})


//swiper
import Swiper from 'swiper';
const mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    effect: 'coverflow',
    slidesPerView: 1.5,
    updateOnWindowResize: true,
    loop: true,
    watchOverflow: true,
    centeredSlides: true,
})



// parallax
const body = document.querySelector('body');


body.addEventListener("mousemove", (event) => parallaxed(event));

function parallaxed(e) {
    const amountMovedX = (e.clientX * -0.3 / 10);
    const amountMovedY = (e.clientY * -0.3 / 10);
    const x = document.getElementsByClassName("parallaxed");
    for (let i = 0; i < x.length; i++) {
        x[i].style.transform = 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
    }
}