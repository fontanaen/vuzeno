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
  <Marquee.Root reverse>
    <Marquee.Viewport>
      <Marquee.Content>
        <Marquee.Item v-for="item in items" :key="item.name">
          <span data-marquee-item-logo>{{ item.logo }}</span>
          <span data-marquee-item-name>{{ item.name }}</span>
        </Marquee.Item>
      </Marquee.Content>
    </Marquee.Viewport>
  </Marquee.Root>
</template>
