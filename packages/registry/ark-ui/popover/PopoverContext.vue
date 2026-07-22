<script setup lang="ts">
import { Popover } from "@ark-ui/vue/popover";
</script>

<template>
  <Popover.Context data-slot="popover-context">
    <slot />
  </Popover.Context>
</template>
