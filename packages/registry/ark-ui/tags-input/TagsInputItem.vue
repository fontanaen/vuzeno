<script setup lang="ts">
import { TagsInput, type TagsInputItemProps } from "@ark-ui/vue/tags-input";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import TagsInputItemDeleteTrigger from "./TagsInputItemDeleteTrigger.vue";
import TagsInputItemInput from "./TagsInputItemInput.vue";
import TagsInputItemPreview from "./TagsInputItemPreview.vue";
import TagsInputItemText from "./TagsInputItemText.vue";

interface Props extends TagsInputItemProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();

const itemProps = reactiveOmit(props, "class");
</script>

<template>
  <TagsInput.Item
    v-bind="itemProps"
    :class="cn(
      'inline-flex cursor-default items-center outline-none',
      props.class,
    )"
    data-slot="tags-input-item"
  >
    <TagsInputItemPreview>
      <TagsInputItemText>{{ itemProps.value }}</TagsInputItemText>
      <TagsInputItemDeleteTrigger />
    </TagsInputItemPreview>

    <TagsInputItemInput />
  </TagsInput.Item>
</template>
