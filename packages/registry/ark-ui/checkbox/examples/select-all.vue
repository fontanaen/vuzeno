<script setup lang="ts">
import { Checkbox, type CheckboxCheckedChangeDetails, type CheckboxCheckedState } from "@vuzeno/registry/ui/checkbox";
import { MinusIcon } from "lucide-vue-next";
import { computed, ref } from "vue";

const frameworks = [
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
];

const value = ref<string[]>([]);

function handleSelectAll(details: CheckboxCheckedChangeDetails) {
  value.value = details.checked === true ? frameworks.map((framework) => framework.value) : [];
}

const selectAllChecked = computed<CheckboxCheckedState>(() => {
  if (value.value.length === frameworks.length) {
    return true;
  }

  if (value.value.length > 0) {
    return "indeterminate";
  }

  return false;
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <Checkbox.Root :checked="selectAllChecked" @checked-change="handleSelectAll">
      <Checkbox.Control>
        <Checkbox.Indicator />
        <Checkbox.Indicator indeterminate>
          <MinusIcon class="size-4" />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Label>Select all</Checkbox.Label>
    </Checkbox.Root>

    <Checkbox.Group v-model="value" class="ps-6">
      <Checkbox.Root v-for="framework in frameworks" :key="framework.value" :value="framework.value">
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Label>{{ framework.label }}</Checkbox.Label>
      </Checkbox.Root>
    </Checkbox.Group>
  </div>
</template>
