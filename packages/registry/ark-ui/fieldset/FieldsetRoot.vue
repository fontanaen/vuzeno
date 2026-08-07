<script setup lang="ts">
import { Fieldset, type FieldsetRootProps } from "@ark-ui/vue/fieldset";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<FieldsetRootProps & { class?: HTMLAttributes["class"] }>();

const rootProps = reactiveOmit(props, "class");
</script>

<template>
  <Fieldset.Root
    v-bind="rootProps"
    :class="cn(
      'flex flex-col gap-4 min-w-0 border-none p-0 m-0 text-foreground',
      props.class,
    )"
    data-slot="fieldset"
  >
    <slot />
  </Fieldset.Root>
</template>
