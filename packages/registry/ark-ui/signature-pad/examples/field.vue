<script setup lang="ts">
import { RotateCcwIcon } from "@lucide/vue";
import { Field } from "@vuzeno/registry/ui/field";
import { SignaturePad } from "@vuzeno/registry/ui/signature-pad";
</script>

<template>
  <Field.Root>
    <SignaturePad.Root>
      <SignaturePad.Label>Label</SignaturePad.Label>
      <SignaturePad.Control>
        <SignaturePad.Segment />
        <SignaturePad.ClearTrigger>
          <RotateCcwIcon />
        </SignaturePad.ClearTrigger>
        <SignaturePad.Guide />
      </SignaturePad.Control>
    </SignaturePad.Root>
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
</template>
