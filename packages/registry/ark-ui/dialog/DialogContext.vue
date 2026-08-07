<script setup lang="ts">
import { Dialog } from "@ark-ui/vue/dialog";
</script>

<template>
  <Dialog.Context data-slot="dialog-context" v-slot="props">
    <slot v-bind="props" />
  </Dialog.Context>
</template>
