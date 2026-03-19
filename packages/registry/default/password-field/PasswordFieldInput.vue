<script setup lang="ts">
import { InputGroupInput } from "@vuzeno/ui/components/input-group";
import { type HTMLAttributes } from "vue";
import { injectPasswordFieldContext } from "./PasswordField.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const context = injectPasswordFieldContext();
</script>

<template>
  <InputGroupInput v-model="context.modelValue" :type="context.type.value" :class="props.class" />
</template>