<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { QrCode } from "@vuzeno/registry/ui/qr-code";
</script>

<template>
  <QrCode.Root default-value="http://ark-ui.com" class="flex flex-col gap-4">
    <QrCode.Frame>
      <QrCode.Pattern />
    </QrCode.Frame>

    <QrCode.DownloadTrigger file-name="qr-code.png" mime-type="image/png">
      <Button variant="secondary">
        Download
      </Button>
    </QrCode.DownloadTrigger>
  </QrCode.Root>
</template>
