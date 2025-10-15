<template>
  <section class="blog">
    <client-only>
      <SwiperContainer
        ref="blogSwiperRef"
        class="blog-swiper"
        :slides-per-view="3.6"
        :space-between="16"
        :centered-slides="true"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }"
        :modules="[Autoplay]"
        @swiper="onSwiper"
      >
        <SwiperSlide v-for="blog in blogs" :key="blog.id">
          <div class="blog__card" :style="{ backgroundImage: `url(${blog.img})` }">
            <h3 class="blog__card--title">{{ blog.title }}</h3>
            <div class="blog__card--overlay">
              <a href="#" class="btn btn-white">Learn more</a>
            </div>
          </div>
        </SwiperSlide>
      </SwiperContainer>
      <div class="blog__action">
        <button class="blog__action--btn" @click="toggleAutoplayHandler()">
          <img :src="`/icons/${isPlaying ? 'pause' : 'play'}.svg`" alt="play" />
        </button>
      </div>
    </client-only>
  </section>
</template>

<script lang="ts" setup>
import type Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/vue";
import { BLOGS } from "~/constants";

const blogs = ref([...BLOGS, ...BLOGS, ...BLOGS]);
const isPlaying = ref(true);

const swiperInstance = ref<Swiper | null>(null);

const onSwiper = (swiper: Swiper) => {
  swiperInstance.value = swiper;
};

const toggleAutoplayHandler = () => {
  if (!swiperInstance.value) return;

  isPlaying.value = !isPlaying.value;
  if (isPlaying.value) {
    swiperInstance.value.autoplay.start();
  } else {
    swiperInstance.value.autoplay.stop();
  }
};
</script>
