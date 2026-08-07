<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Editable } from "@vuzeno/registry/ui/editable";
import { Field } from "@vuzeno/registry/ui/field";
</script>

<template>
  <Field.Root>
    <Field.Label>Label</Field.Label>
    <Editable.Root placeholder="Enter text..." default-value="Hello World">
      <Editable.Area>
        <Editable.Input />
        <Editable.Preview />
      </Editable.Area>
      <Editable.Control>
        <Editable.EditTrigger>
          <Button class="h-auto p-0" variant="link" size="sm">
            Edit
          </Button>
        </Editable.EditTrigger>
      </Editable.Control>
    </Editable.Root>
  </Field.Root>
</template>
