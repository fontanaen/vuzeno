<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Field, type UseFieldProps, useField } from "@vuzeno/registry/ui/field";
import { computed, ref } from "vue";

const invalid = ref(false);
const fieldProps = computed<UseFieldProps>(() => ({
  invalid: invalid.value,
}));

const field = useField(fieldProps);
</script>

<template>
  <div class="flex flex-col gap-4">
    <Button variant="outline" @click="invalid = !invalid">Toggle Invalid</Button>

    <Field.RootProvider :value="field">
      <Field.Label>Label</Field.Label>
      <Field.Input />
      <Field.HelperText>Some additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.RootProvider>
  </div>
</template>
