const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,
  slidesPerView : 1,
  autoplay : {
      delay : 3000,
  },

  pagination: {
    el: '.swiper-pagination',
  },


});