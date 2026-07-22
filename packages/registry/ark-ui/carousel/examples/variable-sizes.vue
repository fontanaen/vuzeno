<script setup lang="ts">
import { Carousel } from "@vuzeno/registry/ui/carousel";

const items = [
  { id: "1", width: "120px", label: "Small" },
  { id: "2", width: "200px", label: "Medium Size" },
  { id: "3", width: "80px", label: "XS" },
  { id: "4", width: "250px", label: "Large Content Here" },
  { id: "5", width: "150px", label: "Regular" },
];
</script>

<template>
  <Carousel.Root auto-size :slide-count="items.length" spacing="8px">
    <Carousel.Control>
      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />
    </Carousel.Control>

    <Carousel.ItemGroup>
      <Carousel.Item
        v-for="(item, index) in items"
        :key="item.id"
        :index="index"
        snap-align="center"
        class="basis-auto"
      >
        <div
          class="flex items-center justify-center rounded-lg bg-muted px-4 text-sm font-medium text-foreground"
          :style="{ width: item.width, height: '6rem' }"
        >
          {{ item.label }}
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
