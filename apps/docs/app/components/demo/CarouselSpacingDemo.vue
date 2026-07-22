<script setup lang="ts">
import { Carousel } from "@vuzeno/registry/ui/carousel";

const slides = Array.from({ length: 6 });
</script>

<template>
  <Carousel.Root :slide-count="slides.length" :slides-per-page="1.5" spacing="48px">
    <p class="text-sm text-muted-foreground">
      spacing="48px"
    </p>

    <Carousel.ItemGroup>
      <Carousel.Item v-for="(_, index) in slides" :key="index" :index="index">
        <div class="flex h-48 w-full items-center justify-center rounded-lg bg-muted text-2xl font-semibold text-foreground">
          {{ index + 1 }}
        </div>
      </Carousel.Item>
    </Carousel.ItemGroup>

    <Carousel.Control data-justify="center">
      <Carousel.PrevTrigger />
      <Carousel.Context v-slot="api">
        <Carousel.IndicatorGroup>
          <Carousel.Indicator
            v-for="(_, index) in api.pageSnapPoints"
            :key="index"
            :index="index"
          />
        </Carousel.IndicatorGroup>
      </Carousel.Context>
      <Carousel.NextTrigger />
    </Carousel.Control>
  </Carousel.Root>
</template>
