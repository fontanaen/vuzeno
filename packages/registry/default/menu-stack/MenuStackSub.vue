<script lang="ts">
export type MenuSubStackContext = {
  open: Ref<boolean>;
  toggleOpen: () => void;
};

export const [injectMenuSubStackContext, provideMenuSubStackContext] = createContext<MenuSubStackContext>("MenuSubStack");
</script>

<script setup lang="ts">
import { cn } from "@vuzeno/ui/lib/utils";
import { type HTMLAttributes, nextTick, type Ref, watch } from "vue";
import { useMenuStackContext } from "./MenuStack.vue";
import { createContext } from "reka-ui";
import { useToggle } from "@vueuse/core";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { onSubMenuOpen, onSubMenuClose } = useMenuStackContext()!;

const [open, toggleOpen] = useToggle(false);

provideMenuSubStackContext({
  open,
  toggleOpen,
});

watch(open, (open) => {
  if (open) {
    nextTick(() => {
      onSubMenuOpen();
    })
  } else {
    onSubMenuClose();
  }
});
</script>

<template>
  <div data-slot="menu-stack-sub" :data-open="open" :class="cn('group', props.class)">
    <slot />
  </div>
</template>