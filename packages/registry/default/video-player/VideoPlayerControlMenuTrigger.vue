<script setup lang="ts">
import { Button, type ButtonVariants } from "@vuzeno/ui/components/button";
import { DropdownMenuTrigger } from "@vuzeno/ui/components/dropdown-menu";
import { SettingsIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariants["variant"];
    size?: ButtonVariants["size"];
    class?: HTMLAttributes["class"];
  }>(),
  {
    variant: "ghost",
    size: "icon-sm",
  },
);
</script>

<template>
  <DropdownMenuTrigger as-child data-slot="video-player-control-menu-trigger">
    <slot>
      <Button type="button" :variant="props.variant" :size="props.size" :class="props.class" aria-label="Settings">
        <SettingsIcon />
      </Button>
    </slot>
  </DropdownMenuTrigger>
</template>
