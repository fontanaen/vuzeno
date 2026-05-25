<script setup lang="ts">
import { MotionList, MotionListItem, type MotionListTransition } from "@vuzeno/registry/ui/motion-list";
import { Button } from "@vuzeno/ui/components/button";
import { PlusIcon, XIcon } from "lucide-vue-next";
import { ref } from "vue";

type Card = {
  id: string;
  title: string;
};

const cards = ref<Card[]>([
  { id: "c1", title: "First card" },
  { id: "c2", title: "Second card" },
  { id: "c3", title: "Third card" },
]);

const counter = ref(4);

function addCard() {
  cards.value.unshift({ id: `c${counter.value++}`, title: `Card ${counter.value - 1}` });
}

function removeCard(id: string) {
  cards.value = cards.value.filter((card) => card.id !== id);
}

const transition: MotionListTransition = {
  add: {
    duration: 320,
    easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
  remove: {
    duration: 220,
    easing: "cubic-bezier(0.5, 0, 0.75, 0)",
  },
  move: {
    duration: 320,
    easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
};
</script>

<template>
  <div class="w-full max-w-md mx-auto flex flex-col gap-3">
    <Button size="sm" variant="outline" class="w-fit" @click="addCard">
      <PlusIcon class="size-3.5" /> Add card
    </Button>

    <MotionList :transition="transition" class="flex flex-col gap-2">
      <MotionListItem
        v-for="card in cards"
        :key="card.id"
        class="flex items-center justify-between gap-3 rounded-lg border bg-background px-4 py-3 shadow-xs"
      >
        <span class="text-sm font-medium">{{ card.title }}</span>
        <Button
          variant="ghost"
          size="icon-sm"
          class="size-7"
          @click="removeCard(card.id)"
        >
          <XIcon class="size-3.5" />
        </Button>
      </MotionListItem>
    </MotionList>
  </div>
</template>
