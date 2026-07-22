<script setup lang="ts">
import { Menu, type MenuContentProps } from "@ark-ui/vue/menu";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import MenuPositioner from "./MenuPositioner.vue";

const props = defineProps<MenuContentProps & { class?: HTMLAttributes["class"] }>();

const contentProps = reactiveOmit(props, "class");
</script>

<template>
  <Teleport to="body">
    <MenuPositioner>
      <Menu.Content
        v-bind="contentProps"
        :class="cn(
          '[--arrow-size:10px] relative z-[calc(50+var(--layer-index,0))]',
          'flex max-h-[min(var(--available-height,300px),300px)] min-w-[max(var(--reference-width),10rem)] flex-col',
          'rounded-md border border-border bg-popover p-1 shadow-md outline-none',
          'origin-(--transform-origin)',
          props.class,
        )"
        data-slot="menu-content"
      >
        <slot />
      </Menu.Content>
    </MenuPositioner>
  </Teleport>
</template>

<style scoped>
[data-state="open"] {
  animation: menu-scale-fade-in 100ms ease-out;
}

[data-state="closed"] {
  animation: menu-scale-fade-out 80ms ease-in;
}

[data-nested][data-state="open"] {
  animation: menu-scale-fade-in 10ms ease-out;
}

[data-nested][data-state="closed"] {
  animation: menu-scale-fade-out 40ms ease-in;
}

@keyframes menu-scale-fade-in {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes menu-scale-fade-out {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.96);
  }
}
</style>
