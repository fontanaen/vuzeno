<script setup lang="ts">
import { createListCollection } from "@ark-ui/vue";
import { ChevronsUpDownIcon } from "@lucide/vue";
import { Field } from "@vuzeno/registry/ui/field";
import { Fieldset } from "@vuzeno/registry/ui/fieldset";
import { Select } from "@vuzeno/registry/ui/select";
import { ref } from "vue";

const extensions = createListCollection({
  items: [
    { label: "+1", value: "+1" },
    { label: "+44", value: "+44" },
    { label: "+49", value: "+49" },
    { label: "+41", value: "+41" },
  ],
});

const inputRef = ref<{ $el: HTMLInputElement | null } | null>(null);

function focusInput() {
  setTimeout(() => {
    inputRef.value?.$el?.focus();
  });
}
</script>

<template>
  <Fieldset.Root>
    <Fieldset.Legend @click="focusInput">Mobile Number</Fieldset.Legend>

    <div class="flex items-start gap-2">
      <Field.Root>
        <Select.Root :collection="extensions" :default-value="['+1']" @value-change="focusInput">
          <Select.Trigger>
            <Select.Value placeholder="Select" />
            <ChevronsUpDownIcon />
          </Select.Trigger>

          <Select.Content>
            <Select.Item v-for="item in extensions.items" :key="item.value" :item="item">
              <Select.ItemText>{{ item.label }}</Select.ItemText>
            </Select.Item>
          </Select.Content>
        </Select.Root>
      </Field.Root>

      <Field.Root class="flex-1">
        <Field.Input ref="inputRef" />
      </Field.Root>
    </div>
  </Fieldset.Root>
</template>
