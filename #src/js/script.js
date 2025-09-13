const { createApp, ref, computed } = window.Vue;
const app = createApp({
  setup() {
    const selectedShopTab = ref('photografers');

    const shopTabs = ref([
      { code: 'photografers', title: 'Photografers' },
      { code: 'gamers', title: 'Gamers' },
      { code: 'content_creators', title: 'Content creators' },
      { code: 'adventures', title: 'Adventures' }
    ]);

    const shops = ref({
      photografers: [
        { id: 1, img: 'img/shops/shop-1.png', title: 'motorola edge 60 pro' },
        { id: 2, img: 'img/shops/shop-2.png', title: 'motorola edge 60 fusion' },
        { id: 3, img: 'img/shops/shop-3.png', title: 'motorola edge 50 ultra' },
        { id: 4, img: 'img/shops/shop-4.png', title: 'motorola edge 50 pro' }
      ],
      gamers: [
        { id: 5, img: 'img/shops/shop-5.png', title: 'motorola edge 60 pro' },
        { id: 6, img: 'img/shops/shop-6.png', title: 'motorola edge 50 pro' },
        { id: 7, img: 'img/shops/shop-7.png', title: 'moto g85 5g' },
        { id: 8, img: 'img/shops/shop-8.png', title: 'moto g55 5G' }
      ],
      content_creators: [
        { id: 9, img: 'img/shops/shop-9.png', title: 'motorola razr 60 ultra' },
        { id: 10, img: 'img/shops/shop-10.png', title: 'motorola razr 60' },
        { id: 11, img: 'img/shops/shop-11.png', title: 'motorola razr 50 ultra' },
        { id: 12, img: 'img/shops/shop-12.png', title: 'motorola razr 50' }
      ],
      adventures: [
        { id: 13, img: 'img/shops/shop-13.png', title: 'moto g85 5g' },
        { id: 14, img: 'img/shops/shop-14.png', title: 'moto g55 5G' },
        { id: 15, img: 'img/shops/shop-15.png', title: 'moto g35 5G' },
        { id: 16, img: 'img/shops/shop-16.png', title: 'moto g24' }
      ]
    });

    const selectedShopArray = computed(() => {
      return shops.value[selectedShopTab.value];
    });

    return {
      selectedShopArray,
      shopTabs,
      selectedShopTab
    };
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
