<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <div class="no-scrollbar my-6 w-full overflow-x-auto rounded-lg border">
    <table
      :class="cn(
        [
          'w-full text-sm',
          '[&_th]:bg-muted/50 [&_th]:px-3 [&_th]:py-2.5 [&_th]:text-left [&_th]:align-middle [&_th]:font-medium [&_th]:text-muted-foreground',
          '[&_th:not(:last-child)]:border-r [&_th]:border-border/70',
          '[&_td]:px-3 [&_td]:py-2.5 [&_td]:align-middle',
          '[&_td:not(:last-child)]:border-r [&_td]:border-border/50',
          '[&_tbody_tr:not(:last-child)_td]:border-b [&_tbody_tr:not(:last-child)_td]:border-border/60',
        ],
        props.class,
      )"
      v-bind="$attrs"
    >
      <slot />
    </table>
  </div>
 
</template>
