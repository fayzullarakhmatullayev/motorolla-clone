<template>
  <section class="market">
    <h2 class="market__title">Find your perfect match</h2>

    <div class="market__tab">
      <div
        v-for="tab in shopTabs"
        :key="tab.code"
        :class="{ active: tab.code === selectedShopTab }"
        class="market__tab--item"
        @click="selectedShopTab = tab.code"
      >
        {{ tab.title }}
      </div>
    </div>
    <div class="market__wrapper">
      <div v-for="card in selectedShopArray" :key="card.id" class="market__card">
        <div class="market__card--img">
          <img :src="card.img" :alt="card.title" />
        </div>
        <h3 class="market__card--title">{{ card.title }}</h3>
        <a href="#" class="btn btn-primary">Learn More</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { SHOPS } from "~/constants";

const shops = ref(SHOPS);
const selectedShopTab = ref("photografers");

const shopTabs = ref([
  { code: "photografers", title: "Photografers" },
  { code: "gamers", title: "Gamers" },
  { code: "content_creators", title: "Content creators" },
  { code: "adventures", title: "Adventures" }
]);

const selectedShopArray = computed(() => {
  return shops.value[selectedShopTab.value as keyof typeof shops.value];
});
</script>
