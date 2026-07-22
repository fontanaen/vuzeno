<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { TagsInput } from "@vuzeno/registry/ui/tags-input";

function sanitizeValue(value: string) {
  return value.trim().toLowerCase();
}
</script>

<template>
  <Field.Root>
    <TagsInput.Root :sanitize-value="sanitizeValue">
      <TagsInput.Context v-slot="tagsInput">
        <Field.Label>Email Addresses</Field.Label>
        <TagsInput.Control>
          <TagsInput.Item
            v-for="(tagValue, index) in tagsInput.value"
            :key="index"
            :index="index"
            :value="tagValue"
          />
          
          <TagsInput.Input placeholder="Add email" />
          <TagsInput.ClearTrigger />
        </TagsInput.Control>
      </TagsInput.Context>
    </TagsInput.Root>
  </Field.Root>
</template>
