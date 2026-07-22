<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Marquee, useMarquee } from "@vuzeno/registry/ui/marquee";

const items = [
  { name: "Apple", logo: "🍎" },
  { name: "Banana", logo: "🍌" },
  { name: "Cherry", logo: "🍒" },
  { name: "Grape", logo: "🍇" },
  { name: "Watermelon", logo: "🍉" },
  { name: "Strawberry", logo: "🍓" },
];

const marquee = useMarquee({});
</script>

<template>
  <div class="flex flex-col gap-4">
    <Marquee.RootProvider :value="marquee">
      <Marquee.Viewport>
        <Marquee.Content>
          <Marquee.Item v-for="item in items" :key="item.name">
            <span data-marquee-item-logo>{{ item.logo }}</span>
            <span data-marquee-item-name>{{ item.name }}</span>
          </Marquee.Item>
        </Marquee.Content>
      </Marquee.Viewport>
    </Marquee.RootProvider>

    <div class="flex flex-wrap items-center gap-2">
      <Button variant="outline" @click="marquee.pause()">
        Pause
      </Button>
      <Button variant="outline" @click="marquee.resume()">
        Resume
      </Button>
    </div>
  </div>
</template>
