<script setup lang="ts">
import { CheckIcon, PencilIcon, XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Editable } from "@vuzeno/registry/ui/editable";
import { Field } from "@vuzeno/registry/ui/field";
</script>

<template>
  <Field.Root>
    <Field.Label>Label</Field.Label>
    <Editable.Root default-value="Click edit to start">
      <Editable.Area>
        <Editable.Input />
        <Editable.Preview />
      </Editable.Area>
      <Editable.Context v-slot="{ editing }">
        <Editable.Control>
          <template v-if="editing">
            <Editable.SubmitTrigger>
              <Button variant="secondary" size="icon">
                <CheckIcon />
              </Button>
            </Editable.SubmitTrigger>
            <Editable.CancelTrigger>
              <Button variant="secondary" size="icon">
                <XIcon />
              </Button>
            </Editable.CancelTrigger>
          </template>
          <Editable.EditTrigger v-else>
            <Button variant="secondary" size="icon">
              <PencilIcon />
            </Button>
          </Editable.EditTrigger>
        </Editable.Control>
      </Editable.Context>
    </Editable.Root>
  </Field.Root>
</template>
