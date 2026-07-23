<script setup lang="ts">
import { PencilIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Editable, useEditable } from "@vuzeno/registry/ui/editable";
import { Field } from "@vuzeno/registry/ui/field";

const editable = useEditable({ defaultValue: "Hello World" });
</script>

<template>
  <Field.Root>
    <Field.Label>Label</Field.Label>
    <Editable.RootProvider :value="editable">
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
    </Editable.RootProvider>
  </Field.Root>
</template>
