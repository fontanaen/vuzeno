<script setup lang="ts">
import { Menu } from "@vuzeno/registry/ui/menu";
import { ListFilterPlusIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";
import { Button } from "../button";
import { injectFiltersContext } from "./context";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { variant } = injectFiltersContext();
</script>

<template>
  <Menu.Trigger as-child aria-label="Add filter">
    <slot>
      <Button :variant="variant" size="icon-sm" :class="props.class">
        <ListFilterPlusIcon />
      </Button>
    </slot>
  </Menu.Trigger>
</template>
