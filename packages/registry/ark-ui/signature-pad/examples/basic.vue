<script setup lang="ts">
import { SignaturePad } from "@vuzeno/registry/ui/signature-pad";
import { RotateCcwIcon } from "lucide-vue-next";
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
