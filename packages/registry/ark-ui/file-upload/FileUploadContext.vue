<script setup lang="ts">
import { FileUpload } from "@ark-ui/vue/file-upload";
</script>

<template>
  <FileUpload.Context v-slot="slotProps" data-slot="file-upload-context">
    <slot v-bind="slotProps" />
  </FileUpload.Context>
</template>
