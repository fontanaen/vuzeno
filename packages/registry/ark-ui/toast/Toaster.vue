<script setup lang="ts">
import { Toaster, type ToasterProps } from "@ark-ui/vue/toast";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ToasterProps & { class?: HTMLAttributes["class"] }>();

const toasterProps = reactiveOmit(props, "class");
</script>

<template>
  <Teleport to="body">
    <Toaster
      v-bind="toasterProps"
      v-slot="toast"
      :class="cn(props.class)"
      data-slot="toast-toaster"
    >
      <slot v-bind="toast" />
    </Toaster>
  </Teleport>
</template>
