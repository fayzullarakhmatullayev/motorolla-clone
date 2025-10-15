<template>
  <section class="catalog">
    <div class="catalog__wrapper">
      <div v-for="card in shops.gamers" :key="card.id" class="catalog__item">
        <div class="catalog__item--img">
          <img :src="card.img" :alt="card.title" />
        </div>
        <h3 class="catalog__item--title">{{ card.title }}</h3>
        <div class="catalog__item--actions">
          <a href="#" class="btn btn-primary">Buy now</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { SHOPS } from "~/constants";

const shops = ref(SHOPS);
</script>
