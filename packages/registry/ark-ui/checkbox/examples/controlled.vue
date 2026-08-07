<script setup lang="ts">
import { Checkbox } from "@vuzeno/registry/ui/checkbox";
import { ref } from "vue";

const checked = ref(false);
</script>

<template>
  <div class="flex flex-col gap-3">
    <Checkbox.Root v-model:checked="checked">
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Label>Controlled checkbox</Checkbox.Label>
    </Checkbox.Root>
    <p class="text-sm text-muted-foreground">
      Checked: {{ checked }}
    </p>
  </div>
</template>
