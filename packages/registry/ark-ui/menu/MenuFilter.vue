<script setup lang="ts">
import { useMenuContext } from "@ark-ui/vue/menu";
import { cn } from "cnfast";
import { type HTMLAttributes, watch } from "vue";
import { provideMenuFilterContext } from "./menu-filter-context";

const searchTerm = defineModel<string>("searchTerm", { default: "" });

const props = withDefaults(
  defineProps<{
    defaultSearchTerm?: string;
    resetOnClose?: boolean;
    class?: HTMLAttributes["class"];
  }>(),
  {
    defaultSearchTerm: "",
    resetOnClose: true,
  },
);

if (props.defaultSearchTerm && searchTerm.value === "") {
  searchTerm.value = props.defaultSearchTerm;
}

const menu = useMenuContext();

function setSearchTerm(value: string) {
  searchTerm.value = value;
}

provideMenuFilterContext({
  searchTerm,
  setSearchTerm,
});

watch(
  () => menu.value.open,
  (open) => {
    if (!open && props.resetOnClose) {
      setSearchTerm("");
    }
  },
);
</script>

<template>
  <div
    data-slot="menu-filter"
    :class="cn('shrink-0 border-b border-border', props.class)"
  >
    <slot />
  </div>
</template>
