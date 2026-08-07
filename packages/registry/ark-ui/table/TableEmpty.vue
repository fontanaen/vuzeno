<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import TableCell from "./TableCell.vue";
import TableRow from "./TableRow.vue";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    colspan?: number;
  }>(),
  {
    colspan: 1,
  },
);
</script>

<template>
  <TableRow>
    <TableCell
      :colspan="colspan"
      :class="
        cn(
          'p-4 whitespace-nowrap align-middle text-sm text-foreground',
          props.class,
        )
      "
    >
      <div class="flex items-center justify-center py-10">
        <slot />
      </div>
    </TableCell>
  </TableRow>
</template>
