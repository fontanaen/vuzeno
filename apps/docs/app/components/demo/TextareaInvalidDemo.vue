<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { Textarea } from "@vuzeno/registry/ui/textarea";
</script>

<template>
  <Field.Root class="max-w-sm" invalid>
    <Field.Label>Message</Field.Label>
    <Textarea placeholder="Type your message here." aria-invalid />
    <Field.ErrorText>Please enter a valid message.</Field.ErrorText>
  </Field.Root>
</template>
