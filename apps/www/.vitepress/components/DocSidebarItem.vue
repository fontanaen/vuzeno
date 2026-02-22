<script setup lang="ts">
import { useCurrentElement } from "@vueuse/core";
import { Badge } from "@vuzeno/ui/components/badge";
import { computed, watch } from "vue";
import type { SidebarItem } from "../composables/sidebar";
import { useSidebarControl } from "../composables/sidebar";

const props = defineProps<{
  item: SidebarItem;
}>();
const { isActiveLink } = useSidebarControl(computed(() => props.item));

const elRef = useCurrentElement();

watch(
  isActiveLink,
  () => {
    if (isActiveLink.value && elRef.value instanceof HTMLElement) {
      elRef.value.scrollIntoView({
        block: "center",
      });
    }
  },
  { immediate: true },
);
</script>

<template>
  <div
    class="flex items-center text-sm text-muted-foreground hover:bg-card rounded-lg px-4"
    :class="{ 'is-active bg-primary/10! text-primary! font-semibold': isActiveLink }"
  >
    <a
      :href="item.link"
      class="h-[2.15rem] inline-flex items-center justify-between w-full"
    >
      {{ item.text }}
      <Badge v-if="item.tag" class="rounded-sm bg-green-500/10 text-green-500 hover:bg-green-500/20">
        {{ item.tag }}
      </Badge>
    </a>
  </div>
</template>
