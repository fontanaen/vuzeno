<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { RadioGroup } from "@vuzeno/registry/ui/radio-group";
import { ref } from "vue";

const frameworks = ["React", "Solid", "Vue"];
const value = ref<string | null>(null);
</script>

<template>
  <Field.Root>
    <RadioGroup.Root v-model="value">
      <Field.Label>Framework</Field.Label>
      <RadioGroup.Item v-for="framework in frameworks" :key="framework" :value="framework">
        <RadioGroup.ItemControl />
        <RadioGroup.ItemText>{{ framework }}</RadioGroup.ItemText>
      </RadioGroup.Item>
    </RadioGroup.Root>
  </Field.Root>
</template>
