<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { RadioGroup } from "@vuzeno/registry/ui/radio-group";

const frameworks = ["React", "Solid", "Vue"];
</script>

<template>
  <Field.Root>
    <RadioGroup.Root default-value="Solid">
      <Field.Label>Framework</Field.Label>
      <RadioGroup.Item v-for="framework in frameworks" :key="framework" :value="framework">
        <RadioGroup.ItemControl />
        <RadioGroup.ItemText>{{ framework }}</RadioGroup.ItemText>
      </RadioGroup.Item>
    </RadioGroup.Root>
  </Field.Root>
</template>
