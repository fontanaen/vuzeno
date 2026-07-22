<script setup lang="ts">
import { QrCode, useQrCode } from "@vuzeno/registry/ui/qr-code";

const qrCode = useQrCode({ value: "http://ark-ui.com" });
</script>

<template>
  <div class="flex flex-col gap-4">
    <QrCode.RootProvider :value="qrCode">
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
    </QrCode.RootProvider>

    <output class="text-sm text-muted-foreground">
      {{ qrCode.value }}
    </output>
  </div>
</template>
