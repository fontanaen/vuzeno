<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Field } from "@vuzeno/registry/ui/field";
import { RadioGroup, useRadioGroup } from "@vuzeno/registry/ui/radio-group";

const frameworks = ["React", "Solid", "Vue"];
const radioGroup = useRadioGroup({ defaultValue: "React" });
</script>

<template>
  <div class="flex flex-col gap-4">
    <Field.Root>
      <RadioGroup.RootProvider :value="radioGroup">
        <Field.Label>Framework</Field.Label>
        <RadioGroup.Item v-for="framework in frameworks" :key="framework" :value="framework">
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{{ framework }}</RadioGroup.ItemText>
        </RadioGroup.Item>
      </RadioGroup.RootProvider>
    </Field.Root>

    <Button variant="outline" size="sm" @click="radioGroup.setValue('Solid')">
      Set to Solid
    </Button>
  </div>
</template>
