<script setup lang="ts">
import { Carousel } from "@vuzeno/registry/ui/carousel";

const images = ["https://tinyurl.com/5b6ka8jd", "https://tinyurl.com/7rmccdn5", "https://tinyurl.com/59jxz9uu", "https://tinyurl.com/6jurv23t", "https://tinyurl.com/yp4rfum7"];
</script>

<template>
  <Carousel.Root :slide-count="images.length">
    <Carousel.ItemGroup>
      <Carousel.Item v-for="(image, index) in images" :key="image" :index="index">
        <img :src="image" :alt="`Slide ${index + 1}`" style="height: 240px; width: 100%; object-fit: cover;" />
      </Carousel.Item>
    </Carousel.ItemGroup>

    <Carousel.Control>
      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />
    </Carousel.Control>

    <Carousel.IndicatorGroup>
      <Carousel.Indicator
        v-for="(image, index) in images"
        :key="image"
        :index="index"
        class="size-auto h-10 w-[3.75rem] rounded border-2 border-transparent p-0 opacity-60 data-current:border-primary data-current:opacity-100"
      >
        <img :src="image" :alt="`Thumbnail ${index + 1}`" class="size-full object-cover" />
      </Carousel.Indicator>
    </Carousel.IndicatorGroup>
  </Carousel.Root>
</template>
