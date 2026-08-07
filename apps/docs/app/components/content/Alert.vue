<script setup lang="ts">
import { Alert } from "@vuzeno/registry/ui/alert";

const props = defineProps<{
  title: string;
  description: string;
  variant: "info" | "warning" | "destructive";
}>();
</script>

<template>
  <Alert.Root :variant="variant">
    <Alert.Icon />
    <Alert.Title class="font-normal">
      {{ title }}
    </Alert.Title>
    <Alert.Description v-if="description" class="text-muted-foreground">
      {{ description }}
    </Alert.Description>
  </Alert.Root>
</template>
