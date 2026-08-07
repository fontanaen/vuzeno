<script setup lang="ts">
import { Progress, type ProgressViewProps } from "@ark-ui/vue/progress";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ProgressViewProps & { class?: HTMLAttributes["class"] }>();

const viewProps = reactiveOmit(props, "class");
</script>

<template>
  <Progress.View
    v-bind="viewProps"
    :class="cn(props.class)"
    data-slot="progress-view"
  >
    <slot />
  </Progress.View>
</template>
