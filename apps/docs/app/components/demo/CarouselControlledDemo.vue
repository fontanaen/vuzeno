<script setup lang="ts">
import { Carousel } from "@vuzeno/registry/ui/carousel";
import { ref } from "vue";

const images = ["https://tinyurl.com/5b6ka8jd", "https://tinyurl.com/7rmccdn5", "https://tinyurl.com/59jxz9uu", "https://tinyurl.com/6jurv23t", "https://tinyurl.com/yp4rfum7"];

const page = ref(0);
</script>

<template>
  <div class="flex flex-col gap-3">
    <p class="text-sm text-muted-foreground">
      Current page: {{ page }}
    </p>

    <Carousel.Root v-model:page="page" :slide-count="images.length">
      <Carousel.ItemGroup>
        <Carousel.Item v-for="(image, index) in images" :key="image" :index="index">
          <img :src="image" :alt="`Slide ${index + 1}`" style="height: 240px; width: 100%; object-fit: cover;" />
        </Carousel.Item>
      </Carousel.ItemGroup>

      <Carousel.Control>
        <Carousel.PrevTrigger />
        <Carousel.IndicatorGroup>
          <Carousel.Indicator v-for="(_, index) in images" :key="index" :index="index" />
        </Carousel.IndicatorGroup>
        <Carousel.NextTrigger />
      </Carousel.Control>
    </Carousel.Root>
  </div>
</template>
