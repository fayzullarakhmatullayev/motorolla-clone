const swiper = new Swiper('.slider-swiper', {
  direction: 'horizontal',

  // gap
  slidesPerView: 'auto',
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination'
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
