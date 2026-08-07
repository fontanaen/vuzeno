<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { TagsInput, type TagsInputRootEmits, type TagsInputRootProps } from "@ark-ui/vue/tags-input";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TagsInputRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<TagsInputRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <TagsInput.Root
    v-bind="forwarded"
    :class="cn(
      'flex w-full max-w-lg flex-col gap-1.5 text-foreground',
      props.class,
    )"
    data-slot="tags-input"
  >
    <slot />
    <TagsInput.HiddenInput />
  </TagsInput.Root>
</template>
