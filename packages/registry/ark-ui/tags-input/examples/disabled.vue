<script setup lang="ts">
import { TagsInput } from "@vuzeno/registry/ui/tags-input";
</script>

<template>
  <TagsInput.Root :default-value="['React', 'Solid', 'Vue']" disabled>
    <TagsInput.Context v-slot="tagsInput">
      <TagsInput.Label>Frameworks</TagsInput.Label>
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
</template>
