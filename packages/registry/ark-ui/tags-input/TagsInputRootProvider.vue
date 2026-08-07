<script setup lang="ts">
import { TagsInput, type TagsInputRootProviderProps } from "@ark-ui/vue/tags-input";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TagsInputRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <TagsInput.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'flex w-full max-w-lg flex-col gap-1.5 text-foreground',
      props.class,
    )"
    data-slot="tags-input-root-provider"
  >
    <slot />
  </TagsInput.RootProvider>
</template>
