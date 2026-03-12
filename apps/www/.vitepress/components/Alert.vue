<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from "@vuzeno/ui/components/alert";
import { InfoIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  title: string;
  description: string;
  class?: HTMLAttributes["class"];
  variant?: "default" | "destructive";
}>();

const variants = {
  info: "bg-blue-500/10 text-blue-500 border-blue-500/50 [&>svg]:text-blue-500",
  destructive: "bg-red-500/10 text-red-500 border-red-500/50 [&>svg]:text-red-500",
  warning: "bg-yellow-500/10 text-yellow-500 border-yellow-500/50 [&>svg]:text-yellow-500",
  success: "bg-green-500/10 text-green-500 border-green-500/50 [&>svg]:text-green-500",
  default: "bg-gray-500/10 text-gray-500 border-gray-500/50 [&>svg]:text-gray-500",
};
</script>

<template>
  <Alert :class="variants[props.variant]">
    <InfoIcon class="size-4" />
    <AlertTitle>{{ props.title }}</AlertTitle>
    <AlertDescription>{{ props.description }}</AlertDescription>
  </Alert>
</template>