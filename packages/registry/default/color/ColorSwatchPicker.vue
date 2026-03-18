<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { cn } from "@vuzeno/ui/lib/utils";
import { ColorSwatchPickerRoot, type ColorSwatchPickerRootEmits, type ColorSwatchPickerRootProps, useForwardPropsEmits } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { computed, nextTick, onMounted, ref } from "vue";

const props = defineProps<
  ColorSwatchPickerRootProps & {
    class?: HTMLAttributes["class"];
  }
>();

const emits = defineEmits<ColorSwatchPickerRootEmits>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);

// TODO: handle unexpected scroll behavior when the picker is mounted
const isBootstrapping = ref(true);
const effectiveDisabled = computed(() => !!props.disabled || isBootstrapping.value);

onMounted(() => {
  nextTick(() => {
    isBootstrapping.value = false;
  });
});
</script>

<template>
  <ColorSwatchPickerRoot v-bind="forwarded" :disabled="effectiveDisabled" :class="cn('flex gap-2', props.class)">
    <slot />
  </ColorSwatchPickerRoot>
</template>