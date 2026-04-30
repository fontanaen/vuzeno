<script setup lang="ts">
import { Button } from "@vuzeno/ui/components/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@vuzeno/ui/components/dialog";
import { ref, watch } from "vue";

definePage({
  name: "components.resize-motion",
});

const currentStep = ref(0);
const steps = ref([
  {
    title: "Step 1",
    description: "Step 1 description",
    height: 100,
  },
  {
    title: "Step 2",
    description: "Step 2 description",
    height: 500,
  },
  {
    title: "Step 3",
    description: "Step 3 description",
    height: 300,
  },
]);

const container = ref<HTMLDivElement>();

function animateHeight(element: HTMLDivElement) {
  const inner = element.querySelector(".inner");

  const observer = new ResizeObserver((entries) => {
    const newHeight = entries[0]?.contentRect.height ?? 0;
    element.style.height = `${newHeight}px`;
  });

  // Init
  element.style.height = `${inner?.offsetHeight ?? 0}px`;
  element.style.transition = "height 300ms ease";
  // element.style.overflow = "hidden";
  element.style.overflow = "auto";

  observer.observe(inner);
}

watch(container, (newContainer) => {
  if (newContainer) {
    animateHeight(newContainer);
  }
});
</script>

<template>
  <div>
    <h1>Resize Motion</h1>

    <Dialog>
      <DialogTrigger>
        <Button>Open Dialog</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Resize Motion</DialogTitle>
        </DialogHeader>

        <div ref="container" class="max-h-96 border border-border">
          <div class="content">
            <h2>{{ steps[currentStep]?.title }}</h2>
            <p>{{ steps[currentStep]?.description }}</p>
            <div class="inner overflow-y-auto" :style="{ height: `${steps[currentStep]?.height ?? 100}px` }">
              <p v-for="i in 100" :key="i">Inner content</p>
            </div>
          </div>
        </div>

        <div class="flex gap-2">
          <Button @click="currentStep--">Previous</Button>
          <Button @click="currentStep++">Next</Button>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>