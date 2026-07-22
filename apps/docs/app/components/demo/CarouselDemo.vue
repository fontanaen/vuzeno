<script setup lang="ts">
import { Carousel } from "@vuzeno/registry/ui/carousel";

const images = ["https://tinyurl.com/5b6ka8jd", "https://tinyurl.com/7rmccdn5", "https://tinyurl.com/59jxz9uu", "https://tinyurl.com/6jurv23t", "https://tinyurl.com/yp4rfum7"];
</script>

<template>
  <Carousel.Root :slide-count="images.length" class="relative">
    <Carousel.ItemGroup>
      <Carousel.Item v-for="(image, index) in images" :key="image" :index="index">
        <img :src="image" :alt="image" style="height: 398px; width: 100%; object-fit: cover;" />
      </Carousel.Item>
    </Carousel.ItemGroup>
    
    <Carousel.Control>
      <Carousel.PrevTrigger />

      <Carousel.IndicatorGroup>
        <Carousel.Indicator v-for="(image, index) in images" :key="image" :aria-label="`Goto slide ${index + 1}`" />
      </Carousel.IndicatorGroup>
      
      <Carousel.NextTrigger />
    </Carousel.Control>
  </Carousel.Root>
</template>
