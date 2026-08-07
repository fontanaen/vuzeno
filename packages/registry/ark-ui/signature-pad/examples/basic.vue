<script setup lang="ts">
import { RotateCcwIcon } from "@lucide/vue";
import { SignaturePad } from "@vuzeno/registry/ui/signature-pad";
</script>

<template>
  <SignaturePad.Root>
    <SignaturePad.Label>Sign below</SignaturePad.Label>
    <SignaturePad.Control>
      <SignaturePad.Segment />
      <SignaturePad.ClearTrigger>
        <RotateCcwIcon />
      </SignaturePad.ClearTrigger>
      <SignaturePad.Guide />
    </SignaturePad.Control>
  </SignaturePad.Root>
</template>
