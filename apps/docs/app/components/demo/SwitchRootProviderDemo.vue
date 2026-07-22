<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Switch, useSwitch } from "@vuzeno/registry/ui/switch";

const switchApi = useSwitch();
</script>

<template>
  <div class="flex flex-col gap-4">
    <Switch.RootProvider :value="switchApi">
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Label</Switch.Label>
    </Switch.RootProvider>

    <Button size="sm" variant="outline" @click="switchApi.toggleChecked()">
      Toggle
    </Button>

    <p class="text-sm text-muted-foreground">
      Checked: {{ switchApi.checked }}
    </p>
  </div>
</template>
