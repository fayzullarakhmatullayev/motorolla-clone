<template>
  <section class="slider">
    <client-only>
      <Swiper
        class="slider-swiper"
        :modules="modules"
        :direction="'horizontal'"
        :slides-per-view="'auto'"
        :space-between="16"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true
        }"
        :navigation="true"
      >
        <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
          <div class="slider__card" :style="{ backgroundImage: `url(${slide})` }"></div>
        </SwiperSlide>
        <div class="slider__dots">
          <div class="swiper-pagination"></div>
        </div>
      </Swiper>
    </client-only>
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

const modules = [Navigation, Pagination];

const slides = reactive(["/img/slider-1.png", "/img/slider-2.png", "/img/slider-3.png"]);
</script>
