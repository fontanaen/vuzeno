<script setup lang="ts">
import { Toggle } from "@vuzeno/registry/ui/toggle";
import { HeartIcon } from "lucide-vue-next";
import { ref } from "vue";

const pressed = ref(false);
</script>

<template>
  <Toggle.Root v-model:pressed="pressed">
    <Toggle.Indicator>
      <template #fallback>
        <HeartIcon />
      </template>
      <HeartIcon fill="currentColor" />
    </Toggle.Indicator>
  </Toggle.Root>
</template>
