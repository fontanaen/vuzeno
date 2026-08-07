<script setup lang="ts">
import { PencilIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Editable } from "@vuzeno/registry/ui/editable";
import { Field } from "@vuzeno/registry/ui/field";
import { ref } from "vue";

const value = ref("Hello World");
</script>

<template>
  <Field.Root>
    <Field.Label>Label</Field.Label>
    <Editable.Root v-model="value" placeholder="Enter text...">
      <Editable.Area>
        <Editable.Input />
        <Editable.Preview />
      </Editable.Area>
      <Editable.Control>
        <Editable.EditTrigger>
          <Button variant="secondary" size="icon">
            <PencilIcon />
          </Button>
        </Editable.EditTrigger>
      </Editable.Control>
    </Editable.Root>
  </Field.Root>
</template>
