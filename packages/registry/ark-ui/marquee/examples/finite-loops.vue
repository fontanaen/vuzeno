<script setup lang="ts">
import { Marquee } from "@vuzeno/registry/ui/marquee";
import { ref } from "vue";

const items = [
  { name: "Apple", logo: "🍎" },
  { name: "Banana", logo: "🍌" },
  { name: "Cherry", logo: "🍒" },
  { name: "Grape", logo: "🍇" },
  { name: "Watermelon", logo: "🍉" },
  { name: "Strawberry", logo: "🍓" },
];

const loopCount = ref(0);
const completedCount = ref(0);
</script>

<template>
  <div class="flex flex-col gap-4">
    <Marquee.Root :loop-count="3" @loop-complete="loopCount++" @complete="completedCount++">
      <Marquee.Viewport>
        <Marquee.Content>
          <Marquee.Item v-for="item in items" :key="item.name">
            <span data-marquee-item-logo>{{ item.logo }}</span>
            <span data-marquee-item-name>{{ item.name }}</span>
          </Marquee.Item>
        </Marquee.Content>
      </Marquee.Viewport>
    </Marquee.Root>

    <div class="text-sm text-muted-foreground">
      <p>Loop completed: {{ loopCount }} times</p>
      <p>Animation completed: {{ completedCount }} times</p>
    </div>
  </div>
</template>
