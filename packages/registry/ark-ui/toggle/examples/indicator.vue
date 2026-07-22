<script setup lang="ts">
import { Toggle } from "@vuzeno/registry/ui/toggle";
import { HeartIcon } from "lucide-vue-next";
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
