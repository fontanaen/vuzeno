<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Carousel } from "@vuzeno/registry/ui/carousel";

const slides = Array.from({ length: 6 });
</script>

<template>
  <div class="flex flex-col gap-4">
    <Carousel.Root :slide-count="slides.length">
      <Carousel.Context v-slot="api">
        <Button size="sm" variant="outline" @click="api.scrollToIndex(3)">
          Go to slide 4
        </Button>
      </Carousel.Context>

      <Carousel.ItemGroup>
        <Carousel.Item v-for="(_, index) in slides" :key="index" :index="index">
          <div class="flex h-48 w-full items-center justify-center rounded-lg bg-muted text-2xl font-semibold text-foreground">
            Slide {{ index + 1 }}
          </div>
        </Carousel.Item>
      </Carousel.ItemGroup>

      <Carousel.Control>
        <Carousel.PrevTrigger />
        <Carousel.IndicatorGroup>
          <Carousel.Indicator v-for="(_, index) in slides" :key="index" :index="index" />
        </Carousel.IndicatorGroup>
        <Carousel.NextTrigger />
      </Carousel.Control>
    </Carousel.Root>
  </div>
</template>
