<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Carousel, useCarousel } from "@vuzeno/registry/ui/carousel";

const images = ["https://tinyurl.com/5b6ka8jd", "https://tinyurl.com/7rmccdn5", "https://tinyurl.com/59jxz9uu", "https://tinyurl.com/6jurv23t", "https://tinyurl.com/yp4rfum7"];

const carousel = useCarousel({ slideCount: images.length });
</script>

<template>
  <div class="flex flex-col gap-4">
    <p class="text-sm text-muted-foreground">
      Page: {{ carousel.page }}
    </p>

    <Carousel.RootProvider :value="carousel">
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
    </Carousel.RootProvider>

    <div class="flex flex-wrap items-center gap-2">
      <Button size="sm" variant="outline" @click="carousel.scrollTo(0)">
        Go to first
      </Button>
      <Button size="sm" variant="outline" @click="carousel.scrollNext()">
        Next page
      </Button>
      <Button size="sm" variant="outline" @click="carousel.scrollPrev()">
        Previous page
      </Button>
    </div>
  </div>
</template>
