<script setup lang="ts">
import { Marquee } from "@vuzeno/registry/ui/marquee";

const items = [
  { name: "Apple", logo: "🍎" },
  { name: "Banana", logo: "🍌" },
  { name: "Cherry", logo: "🍒" },
  { name: "Grape", logo: "🍇" },
  { name: "Watermelon", logo: "🍉" },
  { name: "Strawberry", logo: "🍓" },
];
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-2">
      <h3 class="text-sm font-medium">
        Slow (25px/s)
      </h3>
      <Marquee.Root :speed="25">
        <Marquee.Viewport>
          <Marquee.Content>
            <Marquee.Item v-for="item in items" :key="item.name">
              <span data-marquee-item-logo>{{ item.logo }}</span>
              <span data-marquee-item-name>{{ item.name }}</span>
            </Marquee.Item>
          </Marquee.Content>
        </Marquee.Viewport>
      </Marquee.Root>
    </div>

    <div class="flex flex-col gap-2">
      <h3 class="text-sm font-medium">
        Normal (50px/s)
      </h3>
      <Marquee.Root :speed="50">
        <Marquee.Viewport>
          <Marquee.Content>
            <Marquee.Item v-for="item in items" :key="item.name">
              <span data-marquee-item-logo>{{ item.logo }}</span>
              <span data-marquee-item-name>{{ item.name }}</span>
            </Marquee.Item>
          </Marquee.Content>
        </Marquee.Viewport>
      </Marquee.Root>
    </div>

    <div class="flex flex-col gap-2">
      <h3 class="text-sm font-medium">
        Fast (100px/s)
      </h3>
      <Marquee.Root :speed="100">
        <Marquee.Viewport>
          <Marquee.Content>
            <Marquee.Item v-for="item in items" :key="item.name">
              <span data-marquee-item-logo>{{ item.logo }}</span>
              <span data-marquee-item-name>{{ item.name }}</span>
            </Marquee.Item>
          </Marquee.Content>
        </Marquee.Viewport>
      </Marquee.Root>
    </div>
  </div>
</template>
