<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Menu, type MenuRadioItemGroupEmits, type MenuRadioItemGroupProps } from "@ark-ui/vue/menu";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { RadioGroup } from "../radio-group";

const value = defineModel<string>({ required: true });

const props = defineProps<MenuRadioItemGroupProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<MenuRadioItemGroupEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Menu.RadioItemGroup
    v-bind="forwarded"
    v-model="value"
    :class="cn('flex flex-col', props.class)"
    data-slot="menu-radio-item-group"
  >
    <RadioGroup.Root v-model="value" @click.stop>
      <slot />
    </RadioGroup.Root>
  </Menu.RadioItemGroup>
</template>
