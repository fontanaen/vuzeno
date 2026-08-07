<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Field } from "@vuzeno/registry/ui/field";
import { TagsInput, useTagsInput } from "@vuzeno/registry/ui/tags-input";

const tagsInput = useTagsInput();
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap gap-2">
      <Button variant="outline" size="sm" @click="tagsInput.addValue('React')">
        Add React
      </Button>
      <Button variant="outline" size="sm" @click="tagsInput.addValue('Solid')">
        Add Solid
      </Button>
      <Button variant="outline" size="sm" @click="tagsInput.setValue(['Vue', 'Svelte'])">
        Set to Vue & Svelte
      </Button>
      <Button variant="outline" size="sm" @click="tagsInput.clearValue()">
        Clear All
      </Button>
    </div>

    <Field.Root>
      <TagsInput.RootProvider :value="tagsInput">
        <TagsInput.Context v-slot="api">
          <Field.Label>Frameworks</Field.Label>
          <TagsInput.Control>
            <TagsInput.Item
              v-for="(tagValue, index) in api.value"
              :key="index"
              :index="index"
              :value="tagValue"
            />
            
            <TagsInput.Input placeholder="Add Framework" />
            <TagsInput.ClearTrigger />
          </TagsInput.Control>
        </TagsInput.Context>
      </TagsInput.RootProvider>
    </Field.Root>
  </div>
</template>
