<script setup lang="ts">
import { HeartIcon } from "@lucide/vue";
import { Toggle } from "@vuzeno/registry/ui/toggle";
</script>

<template>
  <Toggle.Root>
    <Toggle.Indicator>
      <template #fallback>
        <HeartIcon />
      </template>
      <HeartIcon fill="currentColor" />
    </Toggle.Indicator>
  </Toggle.Root>
</template>
