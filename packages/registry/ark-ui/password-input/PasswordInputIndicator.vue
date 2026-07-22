<script setup lang="ts">
import { PasswordInput } from "@ark-ui/vue/password-input";
import { cn } from "cnfast";
import { EyeIcon, EyeOffIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <PasswordInput.Indicator
    :class="cn(
      'inline-flex items-center justify-center',
      props.class,
    )"
    data-slot="password-input-indicator"
  >
    <EyeIcon />
    <template #fallback>
      <EyeOffIcon />
    </template>
  </PasswordInput.Indicator>
</template>
