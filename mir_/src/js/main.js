import Swiper from 'swiper';
import actions from './custom';
import scrolling from './scrolling';


window.addEventListener('DOMContentLoaded', () => {
   
   scrolling('.scroll');

   actions();

	const swiper = new Swiper('.swiper-container', {
  loop: false,
  autoLength: true,
    spaceBetween: 20,
    slidesPerView: 4
});
});