<script setup lang="ts">
import { PencilIcon } from "@lucide/vue";
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
      <Editable.Context v-slot="{ editing }">
        <span v-if="editing" class="shrink-0 text-xs text-muted-foreground">Enter to save, Esc to cancel</span>
        <Editable.Control v-else>
          <Editable.EditTrigger>
            <Button variant="secondary" size="icon">
              <PencilIcon />
            </Button>
          </Editable.EditTrigger>
        </Editable.Control>
      </Editable.Context>
    </Editable.Root>
  </Field.Root>
</template>
