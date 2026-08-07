<script setup lang="ts">
import { Menu, type MenuRadioItemProps } from "@ark-ui/vue/menu";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { RadioGroup } from "../radio-group";

const props = defineProps<MenuRadioItemProps & { class?: HTMLAttributes["class"] }>();

const radioItemProps = reactiveOmit(props, "class");
</script>

<template>
  <Menu.RadioItem
    v-bind="radioItemProps"
    :class="cn(
      'flex items-center gap-2 rounded-sm p-2 text-sm leading-5 outline-none select-none',
      'data-highlighted:bg-muted',
      'data-[state=checked]:text-primary',
      'data-disabled:text-muted-foreground data-disabled:opacity-50',
      props.class,
    )"
    data-slot="menu-radio-item"
  >
    <RadioGroup.Item :value="value">
      <RadioGroup.ItemControl class="size-4 **:[&_svg]:size-3" />
    </RadioGroup.Item>
    <slot />
  </Menu.RadioItem>
</template>
