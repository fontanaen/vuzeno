<script setup lang="ts">
import { ArrowRightIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import type { FunctionalComponent } from "vue";

type ButtonSize = {
  size: "sm" | "md" | "lg" | "icon-xs" | "icon-sm" | "icon" | "icon-lg";
  label?: string;
  icon?: FunctionalComponent;
};

const buttonSizes: ButtonSize[] = [
  {
    size: "sm",
    label: "Small",
  },
  {
    size: "md",
    label: "Medium",
  },
  {
    size: "lg",
    label: "Large",
  },
  {
    size: "icon-xs",
    icon: ArrowRightIcon,
  },
  {
    size: "icon-sm",
    icon: ArrowRightIcon,
  },
  {
    size: "icon",
    icon: ArrowRightIcon,
  },
  {
    size: "icon-lg",
    icon: ArrowRightIcon,
  },
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <template v-for="size in buttonSizes" :key="size.size">
        <Button :size="size.size">
          <template v-if="size.icon">
            <component :is="size.icon" />
          </template>
          <template v-else>
            {{ size.label }}
          </template>
        </Button>
      </template>
    </div>
    
    <div class="flex flex-wrap items-center gap-2">
      <template v-for="size in buttonSizes" :key="size.size">
        <Button :size="size.size" variant="secondary">
          <template v-if="size.icon">
            <component :is="size.icon" />
          </template>
          <template v-else>
            {{ size.label }}
          </template>
        </Button>
      </template>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <template v-for="size in buttonSizes" :key="size.size">
        <Button :size="size.size" variant="destructive">
          <template v-if="size.icon">
            <component :is="size.icon" />
          </template>
          <template v-else>
            {{ size.label }}
          </template>
        </Button>
      </template>
    </div>
  </div>
</template>
