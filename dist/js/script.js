const { createApp, ref } = window.Vue;
const app = createApp({
  setup() {
    return {};
  }
});
app.mount('#app');

new Swiper('.slider-swiper', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
