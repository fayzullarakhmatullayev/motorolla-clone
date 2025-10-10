const SHOPS = {
  photografers: [
    { id: 1, img: 'img/shops/shop-1.png', title: 'TREND PRIME 100' },
    { id: 2, img: 'img/shops/shop-2.png', title: 'TREND META 17' },
    { id: 3, img: 'img/shops/shop-3.png', title: 'TREND LITE O7' },
    { id: 4, img: 'img/shops/shop-1.png', title: 'TREND PRIME 100' }
  ],
  gamers: [
    { id: 4, img: 'img/shops/shop-2.png', title: 'TREND PRIME 100' },
    { id: 1, img: 'img/shops/shop-1.png', title: 'TREND PRIME 100' },
    { id: 3, img: 'img/shops/shop-3.png', title: 'TREND LITE O7' },
    { id: 2, img: 'img/shops/shop-2.png', title: 'TREND META 17' }
  ],
  content_creators: [
    { id: 1, img: 'img/shops/shop-3.png', title: 'TREND PRIME 100' },
    { id: 2, img: 'img/shops/shop-2.png', title: 'TREND META 17' },
    { id: 3, img: 'img/shops/shop-3.png', title: 'TREND LITE O7' },
    { id: 4, img: 'img/shops/shop-1.png', title: 'TREND PRIME 100' }
  ],
  adventures: [
    { id: 1, img: 'img/shops/shop-1.png', title: 'TREND PRIME 100' },
    { id: 2, img: 'img/shops/shop-2.png', title: 'TREND META 17' },
    { id: 3, img: 'img/shops/shop-3.png', title: 'TREND LITE O7' },
    { id: 4, img: 'img/shops/shop-1.png', title: 'TREND PRIME 100' }
  ]
};

const BLOGS = [
  { id: 1, img: 'img/blogs/blog.webp', title: 'Trend Mobile \nBlogs' },
  { id: 2, img: 'img/blogs/blog.webp', title: 'Trend Mobile \nBlogs' },
  { id: 3, img: 'img/blogs/blog.webp', title: 'Trend Mobile \nBlogs' },
  { id: 4, img: 'img/blogs/blog.webp', title: 'Trend Mobile \nBlogs' }
];

const { createApp, ref, computed, onMounted, onBeforeMount } = window.Vue;
const app = createApp({
  setup() {
    const blogSwiper = ref(null);
    const selectedShopTab = ref('photografers');
    const isPlaying = ref(true);

    const shops = ref(SHOPS);
    const blogs = ref([...BLOGS, ...BLOGS, ...BLOGS]);

    const shopTabs = ref([
      { code: 'photografers', title: 'Photografers' },
      { code: 'gamers', title: 'Gamers' },
      { code: 'content_creators', title: 'Content creators' },
      { code: 'adventures', title: 'Adventures' }
    ]);

    const selectedShopArray = computed(() => {
      return shops.value[selectedShopTab.value];
    });

    function sliderInit() {
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
    }

    function blogSliderInit() {
      blogSwiper.value = new Swiper('.blog-swiper', {
        slidesPerView: 3.6,
        spaceBetween: 16,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }
      });

      setTimeout(() => {
        if (blogSwiper.value.autoplay.running) {
          blogSwiper.value.autoplay.stop();
          blogSwiper.value.params.autoplay.delay = 3000;
          blogSwiper.value.autoplay.start();
        }
      }, 100);
    }

    const toggleAutoplayHandler = () => {
      isPlaying.value = !isPlaying.value;
      if (isPlaying.value) {
        blogSwiper.value?.autoplay?.start();
      } else {
        blogSwiper.value?.autoplay?.stop();
      }
    };

    onMounted(() => {
      sliderInit();
      blogSliderInit();
    });

    return {
      shops,
      selectedShopArray,
      shopTabs,
      selectedShopTab,
      blogs,
      isPlaying,
      toggleAutoplayHandler
    };
  }
});
app.mount('#app');
