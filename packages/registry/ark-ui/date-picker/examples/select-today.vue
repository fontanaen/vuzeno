<script setup lang="ts">
import { CalendarIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { DatePicker } from "@vuzeno/registry/ui/date-picker";
import { Field } from "@vuzeno/registry/ui/field";
</script>

<template>
  <Field.Root>
    <Field.Label>Label</Field.Label>
    <DatePicker.Root>
      <DatePicker.Control>
        <DatePicker.Input />
        <DatePicker.Trigger as-child>
          <Button size="icon" variant="outline">
            <CalendarIcon />
          </Button>
        </DatePicker.Trigger>
      </DatePicker.Control>
      <DatePicker.Content>
        <DatePicker.Calendar />
      </DatePicker.Content>
    </DatePicker.Root>
  </Field.Root>
</template>
