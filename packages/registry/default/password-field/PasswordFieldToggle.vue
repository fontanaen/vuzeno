<script setup lang="ts">
import { InputGroupAddon, InputGroupButton } from "@vuzeno/ui/components/input-group";
import { EyeIcon, EyeOffIcon } from "lucide-vue-next";
import { type HTMLAttributes } from "vue";
import { injectPasswordFieldContext } from "./PasswordField.vue";

const props = withDefaults(
  defineProps<{
    align?: "inline-start" | "inline-end" | "block-start" | "block-end" | null;
    class?: HTMLAttributes["class"];
  }>(),
  {
    align: "inline-end",
  },
);

const context = injectPasswordFieldContext();
</script>

<template>
  <InputGroupAddon :class="props.class" :align="props.align">
    <slot :is-password="context.type.value === 'password'" :toggle-type="context.toggleType">
      <InputGroupButton size="icon-xs" :disabled="context.disabled.value" @click="context.toggleType()">
        <EyeIcon v-if="context.type.value === 'text'" class="size-4 animate-in fade-in-0 zoom-in-50 duration-300 ease-in-out" />
        <EyeOffIcon v-else class="size-4 animate-in fade-in-0 zoom-in-50 duration-300 ease-in-out" />
      </InputGroupButton>
    </slot>
  </InputGroupAddon>
</template>