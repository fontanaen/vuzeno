<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Carousel } from "@vuzeno/registry/ui/carousel";
import { ref } from "vue";

const slides = ref([0, 1, 2, 3, 4]);
const page = ref(0);

function addSlide() {
  const max = Math.max(...slides.value);
  slides.value = [...slides.value, max + 1];
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-3">
      <Button size="sm" variant="outline" @click="addSlide">
        Add slide
      </Button>
      <p class="text-sm text-muted-foreground">
        Slides: {{ slides.length }} · Page: {{ page }}
      </p>
    </div>

    <Carousel.Root v-model:page="page" :slide-count="slides.length">
      <Carousel.ItemGroup>
        <Carousel.Item v-for="(slide, index) in slides" :key="slide" :index="index">
          <div class="flex h-48 w-full items-center justify-center rounded-lg bg-muted text-2xl font-semibold text-foreground">
            Slide {{ slide + 1 }}
          </div>
        </Carousel.Item>
      </Carousel.ItemGroup>

      <Carousel.Control data-justify="center">
        <Carousel.PrevTrigger />
        <Carousel.IndicatorGroup>
          <Carousel.Indicator v-for="(_, index) in slides" :key="index" :index="index" />
        </Carousel.IndicatorGroup>
        <Carousel.NextTrigger />
      </Carousel.Control>
    </Carousel.Root>
  </div>
</template>
