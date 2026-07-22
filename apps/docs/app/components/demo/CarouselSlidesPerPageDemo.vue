<script setup lang="ts">
import { Carousel } from "@vuzeno/registry/ui/carousel";

const slides = Array.from({ length: 6 });
</script>

<template>
  <Carousel.Root :slide-count="slides.length" :slides-per-page="2" spacing="20px">
    <Carousel.Control>
      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />
    </Carousel.Control>

    <Carousel.ItemGroup>
      <Carousel.Item v-for="(_, index) in slides" :key="index" :index="index">
        <div class="flex h-48 w-full items-center justify-center rounded-lg bg-muted text-2xl font-semibold text-foreground">
          Slide {{ index + 1 }}
        </div>
      </Carousel.Item>
    </Carousel.ItemGroup>

    <Carousel.Context v-slot="api">
      <Carousel.IndicatorGroup>
        <Carousel.Indicator
          v-for="(_, index) in api.pageSnapPoints"
          :key="index"
          :index="index"
        />
      </Carousel.IndicatorGroup>
    </Carousel.Context>
  </Carousel.Root>
</template>
