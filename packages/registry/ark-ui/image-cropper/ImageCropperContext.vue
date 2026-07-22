<script setup lang="ts">
import { ImageCropper } from "@ark-ui/vue/image-cropper";
</script>

<template>
  <ImageCropper.Context v-slot="context" data-slot="image-cropper-context">
    <slot v-bind="context" />
  </ImageCropper.Context>
</template>
