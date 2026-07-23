<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { Field } from "@vuzeno/registry/ui/field";
import { TagsInput } from "@vuzeno/registry/ui/tags-input";
</script>

<template>
  <Field.Root>
    <TagsInput.Root>
      <TagsInput.Context v-slot="tagsInput">
        <Field.Label>Label</Field.Label>
        <TagsInput.Control>
          <TagsInput.Item
            v-for="(tagValue, index) in tagsInput.value"
            :key="index"
            :index="index"
            :value="tagValue"
          />

          <TagsInput.Input placeholder="Add Framework" />
          <TagsInput.ClearTrigger />
        </TagsInput.Control>
      </TagsInput.Context>
    </TagsInput.Root>
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
</template>
