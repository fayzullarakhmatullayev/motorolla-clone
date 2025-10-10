const SHOPS = {
  photografers: [
    { id: 1, img: 'img/shops/shop-1.png', title: 'edge 60 pro' },
    { id: 2, img: 'img/shops/shop-2.png', title: 'edge 60 fusion' },
    { id: 3, img: 'img/shops/shop-3.png', title: 'edge 50 ultra' },
    { id: 4, img: 'img/shops/shop-4.png', title: 'edge 50 pro' }
  ],
  gamers: [
    { id: 5, img: 'img/shops/shop-5.png', title: 'edge 60 pro' },
    { id: 6, img: 'img/shops/shop-6.png', title: 'edge 50 pro' },
    { id: 7, img: 'img/shops/shop-7.png', title: 'g85 5g' },
    { id: 8, img: 'img/shops/shop-8.png', title: 'g55 5G' }
  ],
  content_creators: [
    { id: 9, img: 'img/shops/shop-9.png', title: 'razr 60 ultra' },
    { id: 10, img: 'img/shops/shop-10.png', title: 'razr 60' },
    { id: 11, img: 'img/shops/shop-11.png', title: 'razr 50 ultra' },
    { id: 12, img: 'img/shops/shop-12.png', title: 'razr 50' }
  ],
  adventures: [
    { id: 13, img: 'img/shops/shop-13.png', title: 'g85 5g' },
    { id: 14, img: 'img/shops/shop-14.png', title: 'g55 5G' },
    { id: 15, img: 'img/shops/shop-15.png', title: 'g35 5G' },
    { id: 16, img: 'img/shops/shop-16.png', title: 'g24' }
  ]
};

const BLOGS = [
  { id: 1, img: 'img/blogs/blog-1.jpg', title: 'Joins \nEuroLeague action' },
  { id: 2, img: 'img/blogs/blog-2.jpg', title: 'Joins the \nFormula 1 grid' },
  { id: 3, img: 'img/blogs/blog-3.jpg', title: 'Driving change with \nBounce for Good' },
  { id: 4, img: 'img/blogs/blog-4.jpg', title: 'Express yourself \nwith Pantone' }
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
