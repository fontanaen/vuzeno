<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { TagsInput } from "@vuzeno/registry/ui/tags-input";

function validate(details: { value: string[]; inputValue: string }) {
  return !details.value.includes(details.inputValue);
}
</script>

<template>
  <Field.Root>
    <TagsInput.Root :validate="validate">
      <TagsInput.Context v-slot="tagsInput">
        <Field.Label>Frameworks</Field.Label>
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
  </Field.Root>
</template>
