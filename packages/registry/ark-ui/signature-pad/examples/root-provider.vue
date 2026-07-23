<script setup lang="ts">
import { RotateCcwIcon } from "@lucide/vue";
import { SignaturePad, useSignaturePad } from "@vuzeno/registry/ui/signature-pad";

const signaturePad = useSignaturePad();
</script>

<template>
  <div class="flex flex-col gap-4">
    <output class="text-sm text-muted-foreground">
      no of paths: {{ signaturePad.paths.length }}
    </output>

    <SignaturePad.RootProvider :value="signaturePad">
      <SignaturePad.Label>Sign below</SignaturePad.Label>
      <SignaturePad.Control>
        <SignaturePad.Segment />
        <SignaturePad.ClearTrigger>
          <RotateCcwIcon />
        </SignaturePad.ClearTrigger>
        <SignaturePad.Guide />
      </SignaturePad.Control>
    </SignaturePad.RootProvider>
  </div>
</template>
