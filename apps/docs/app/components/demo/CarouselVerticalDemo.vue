<script setup lang="ts">
import { Carousel } from "@vuzeno/registry/ui/carousel";

const images = ["https://tinyurl.com/5b6ka8jd", "https://tinyurl.com/7rmccdn5", "https://tinyurl.com/59jxz9uu", "https://tinyurl.com/6jurv23t", "https://tinyurl.com/yp4rfum7"];
</script>

<template>
  <Carousel.Root orientation="vertical" :slide-count="images.length">
    <Carousel.Control>
      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />
    </Carousel.Control>

    <Carousel.ItemGroup>
      <Carousel.Item v-for="(image, index) in images" :key="image" :index="index">
        <img :src="image" :alt="`Slide ${index + 1}`" style="height: 160px; width: 100%; object-fit: cover;" />
      </Carousel.Item>
    </Carousel.ItemGroup>

    <Carousel.IndicatorGroup>
      <Carousel.Indicator v-for="(_, index) in images" :key="index" :index="index" />
    </Carousel.IndicatorGroup>
  </Carousel.Root>
</template>
