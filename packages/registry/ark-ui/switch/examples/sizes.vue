<script setup lang="ts">
import { Switch } from "@vuzeno/registry/ui/switch";
</script>

<template>
  <div class="flex flex-col gap-4">
    <Switch.Root size="sm">
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Small</Switch.Label>
    </Switch.Root>

    <Switch.Root>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Default</Switch.Label>
    </Switch.Root>

    <Switch.Root size="lg">
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Large</Switch.Label>
    </Switch.Root>
  </div>
</template>
