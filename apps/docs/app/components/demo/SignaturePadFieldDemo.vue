<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { SignaturePad } from "@vuzeno/registry/ui/signature-pad";
import { RotateCcwIcon } from "lucide-vue-next";
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
