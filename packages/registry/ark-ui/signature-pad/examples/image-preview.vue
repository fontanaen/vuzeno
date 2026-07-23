<script setup lang="ts">
import { RotateCcwIcon } from "@lucide/vue";
import { SignaturePad, type SignaturePadDrawEndDetails } from "@vuzeno/registry/ui/signature-pad";
import { ref } from "vue";

const imageUrl = ref("");

async function handleDrawEnd(details: SignaturePadDrawEndDetails) {
  imageUrl.value = await details.getDataUrl("image/png");
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <SignaturePad.Root @draw-end="handleDrawEnd">
      <SignaturePad.Label>Sign below</SignaturePad.Label>
      <SignaturePad.Control>
        <SignaturePad.Segment />
        <SignaturePad.ClearTrigger>
          <RotateCcwIcon />
        </SignaturePad.ClearTrigger>
        <SignaturePad.Guide />
      </SignaturePad.Control>
    </SignaturePad.Root>

    <div class="flex flex-col gap-2">
      <span class="text-sm text-muted-foreground">Image Preview</span>
      <img
        v-if="imageUrl"
        :src="imageUrl"
        alt="Signature"
        class="h-auto w-full max-w-80"
      >
    </div>
  </div>
</template>
