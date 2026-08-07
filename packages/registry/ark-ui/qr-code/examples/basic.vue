<script setup lang="ts">
import { QrCode } from "@vuzeno/registry/ui/qr-code";
</script>

<template>
  <QrCode.Root default-value="http://ark-ui.com">
    <QrCode.Frame>
      <QrCode.Pattern />
    </QrCode.Frame>
  </QrCode.Root>
</template>
