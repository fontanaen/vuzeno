<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { cn } from "@vuzeno/ui/lib/utils";
import { ColorAreaArea, ColorAreaRoot, type ColorAreaRootEmits, type ColorAreaRootProps, ColorAreaThumb, useForwardPropsEmits } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<
  ColorAreaRootProps & {
    class?: HTMLAttributes["class"];
  }
>();

const emits = defineEmits<ColorAreaRootEmits>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <ColorAreaRoot
    v-slot="{ style }"
    v-bind="forwarded"
  >
    <ColorAreaArea
      :style="style"
      :class="cn('relative w-[200px] h-[200px]', props.class)"
    >
      <ColorAreaThumb class="size-4 bg-white border-2 border-border rounded-full" />
    </ColorAreaArea>
  </ColorAreaRoot>
</template>