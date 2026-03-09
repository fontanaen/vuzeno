<script setup lang="ts">
import { watchOnce } from "@vueuse/core";
import { ref } from "vue";
import type { CarouselApi } from "@/components/ui/carousel";
import { Carousel } from "@/components/ui/carousel";

const emits = defineEmits<(e: "select", index: number) => void>();

const api = ref<CarouselApi>();
const selectedIndex = ref<number>(0);

function initApi(val: CarouselApi) {
  api.value = val;
}

watchOnce(api, (api) => {
  if (!api) {
    return;
  }

  api.on("select", () => {
    selectedIndex.value = api.selectedScrollSnap() + 1;
    emits("select", selectedIndex.value);
  });
});
</script>

<template>
  <Carousel @init-api="initApi">
    <slot :selected-index="selectedIndex" />
  </Carousel>
</template>