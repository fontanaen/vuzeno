<script setup lang="ts">
import { Autocomplete, useAutocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";
import { Field } from "@vuzeno/registry/ui/field";
import { TagsInput, useTagsInput } from "@vuzeno/registry/ui/tags-input";
import { CheckIcon } from "lucide-vue-next";
import { useId } from "vue";

const initialItems = ["React", "Solid", "Vue", "Svelte", "Angular", "Preact", "Next.js", "Astro", "Nuxt"];

function containsFilter(itemString: string, filterText: string) {
  return itemString.toLowerCase().includes(filterText.toLowerCase());
}

const { collection, filter } = useListCollection({
  initialItems,
  filter: containsFilter,
});

const uid = useId();

const tagsInput = useTagsInput({
  ids: { input: `input_${uid}`, control: `control_${uid}` },
});

const autocompleteApi = useAutocomplete({
  ids: { input: `input_${uid}`, control: `control_${uid}` },
  get collection() {
    return collection.value;
  },
  onInputValueChange(details) {
    filter(details.inputValue);
  },
  value: [],
  allowCustomValue: true,
  onValueChange: (details) => {
    if (details.value[0]) {
      tagsInput.value.addValue(details.value[0]);
    }
  },
  selectionBehavior: "clear",
});
</script>

<template>
  <Autocomplete.RootProvider :value="autocompleteApi">
    <Field.Root>
      <TagsInput.RootProvider :value="tagsInput">
        <TagsInput.Context v-slot="context">
          <Field.Label>Frameworks</Field.Label>
          <TagsInput.Control>
            <TagsInput.Item
              v-for="(tagValue, index) in context.value"
              :key="index"
              :index="index"
              :value="tagValue"
            />
            
            <Autocomplete.Input as-child>
              <TagsInput.Input placeholder="Add Framework" />
            </Autocomplete.Input>
            
            <TagsInput.ClearTrigger />
          </TagsInput.Control>
        </TagsInput.Context>
      </TagsInput.RootProvider>
    </Field.Root>

    <Autocomplete.Content>
      <Autocomplete.Empty>No frameworks found</Autocomplete.Empty>
      <Autocomplete.Item v-for="item in collection.items" :key="item" :item="item">
        <Autocomplete.ItemText>{{ item }}</Autocomplete.ItemText>
        <Autocomplete.ItemIndicator>
          <CheckIcon />
        </Autocomplete.ItemIndicator>
      </Autocomplete.Item>
    </Autocomplete.Content>
  </Autocomplete.RootProvider>
</template>
