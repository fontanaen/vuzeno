<script setup lang="ts">
import { QrCode } from "@vuzeno/registry/ui/qr-code";
</script>

<template>
  <QrCode.Root default-value="http://ark-ui.com" :encoding="{ ecc: 'H' }">
    <QrCode.Frame>
      <QrCode.Pattern />
    </QrCode.Frame>
    <QrCode.Overlay>
      <img src="https://ark-ui.com/icon-192.png" alt="Ark UI Logo">
    </QrCode.Overlay>
  </QrCode.Root>
</template>
