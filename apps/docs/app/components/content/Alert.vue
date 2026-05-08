<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from "@vuzeno/ui/components/alert";
import { CircleAlertIcon, InfoIcon, ShieldAlertIcon } from "lucide-vue-next";

const props = defineProps<{
  title: string;
  description: string;
  variant: "info" | "warning" | "destructive";
}>();

const variantsClass = {
  info: "bg-blue-500/20 border-2 border-blue-500/50 [&>svg]:text-blue-500",
  warning: "bg-amber-500/20 border-2 border-amber-500/50 [&>svg]:text-amber-500",
  destructive: "bg-red-500/20 border-2 border-red-500/50 [&>svg]:text-red-500",
};

const icon = computed(() => {
  return {
    info: InfoIcon,
    warning: ShieldAlertIcon,
    destructive: CircleAlertIcon,
  }[props.variant];
});
</script>

<template>
  <Alert :class="variantsClass[variant]">
    <component :is="icon" class="size-4" />
    <AlertTitle class="font-normal">
        {{ title }}
    </AlertTitle>
    <AlertDescription v-if="description" class="text-muted-foreground">
        {{ description }}
    </AlertDescription>
  </Alert>
</template>