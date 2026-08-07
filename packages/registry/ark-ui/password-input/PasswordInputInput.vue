<script setup lang="ts">
import { PasswordInput } from "@ark-ui/vue/password-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { InputGroup } from "../input-group";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <PasswordInput.Input
    :class="cn(props.class)"
    as-child
    data-slot="password-input-input"
  >
    <InputGroup.Input />
  </PasswordInput.Input>
</template>
