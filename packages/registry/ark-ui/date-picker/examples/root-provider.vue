<script setup lang="ts">
import { CalendarIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { DatePicker, useDatePicker } from "@vuzeno/registry/ui/date-picker";
import { Field } from "@vuzeno/registry/ui/field";

const datePicker = useDatePicker();
</script>

<template>
  <div class="flex flex-col gap-4">  
    <div class="border border-border border-dashed rounded-md p-4">
      <Field.Root>
        <Field.Label>Root Provider</Field.Label>
        <DatePicker.RootProvider :value="datePicker">
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
        </DatePicker.RootProvider>
      </Field.Root>
    </div>

    <Button variant="outline" @click="datePicker.clearValue()">Clear</Button>
  </div>
</template>
