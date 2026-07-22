<script setup lang="ts">
import { Switch } from "@vuzeno/registry/ui/switch";
import { ref } from "vue";

const checked = ref(false);
</script>

<template>
  <div class="flex flex-col gap-3">
    <Switch.Root v-model:checked="checked">
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Label</Switch.Label>
    </Switch.Root>
    <p class="text-sm text-muted-foreground">
      Checked: {{ checked }}
    </p>
  </div>
</template>
