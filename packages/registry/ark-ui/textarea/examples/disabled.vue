<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { Textarea } from "@vuzeno/registry/ui/textarea";
</script>

<template>
  <Field.Root class="max-w-sm" disabled>
    <Field.Label>Message</Field.Label>
    <Textarea placeholder="Type your message here." disabled />
  </Field.Root>
</template>
