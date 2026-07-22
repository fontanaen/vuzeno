<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Menu, type MenuCheckboxItemEmits, type MenuCheckboxItemProps } from "@ark-ui/vue/menu";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { Checkbox } from "../checkbox";

const checked = defineModel<boolean>({ required: true });
const props = defineProps<MenuCheckboxItemProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<MenuCheckboxItemEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Menu.CheckboxItem
    v-bind="forwarded"
    v-model:checked="checked"
    :class="cn(
      'flex items-center gap-2 rounded-sm p-2 text-sm leading-5 outline-none select-none',
      'data-highlighted:bg-muted',
      'data-[state=checked]:text-primary',
      'data-disabled:text-muted-foreground data-disabled:opacity-50',
      props.class,
    )"
    data-slot="menu-checkbox-item"
  >
    <Checkbox.Root v-model:checked="checked" @click.stop>
      <Checkbox.Control class="size-4 **:[&_svg]:size-3">
        <Checkbox.Indicator />
      </Checkbox.Control>
    </Checkbox.Root>

    <slot />
  </Menu.CheckboxItem>
</template>
