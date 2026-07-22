<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { Textarea } from "@vuzeno/registry/ui/textarea";
</script>

<template>
  <Field.Root class="max-w-sm">
    <Field.Label>Message</Field.Label>
    <Field.HelperText>Enter your message below.</Field.HelperText>
    <Textarea placeholder="Type your message here." />
  </Field.Root>
</template>
