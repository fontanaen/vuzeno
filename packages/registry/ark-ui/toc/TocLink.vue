<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import { computed, type HTMLAttributes } from "vue";
import { injectTocItemContext } from "./TocItem.vue";
import { injectTocContext } from "./TocRoot.vue";

const props = defineProps<{
  href?: string;
  class?: HTMLAttributes["class"];
}>();

const toc = injectTocContext();
const item = injectTocItemContext();

const isActive = computed(() => item.isActive.value);

function onClick() {
  toc.setActiveValue(item.value.value);
}
</script>

<template>
  <ark.a
    :href="props.href"
    data-slot="toc-link"
    :data-active="isActive || undefined"
    :class="
      cn(
        'text-muted-foreground hover:text-foreground block text-[0.8rem] no-underline transition-colors',
        props.class,
      )
    "
    @click="onClick"
  >
    <slot />
  </ark.a>
</template>
