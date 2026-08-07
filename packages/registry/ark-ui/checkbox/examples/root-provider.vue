<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Checkbox, useCheckbox } from "@vuzeno/registry/ui/checkbox";

const checkbox = useCheckbox({ defaultChecked: false });
</script>

<template>
  <div class="flex flex-col gap-4">
    <Checkbox.RootProvider :value="checkbox">
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
    </Checkbox.RootProvider>

    <div class="flex items-center gap-2">
      <Button size="sm" variant="outline" @click="checkbox.toggleChecked()">
        Toggle
      </Button>
      <Button size="sm" variant="outline" @click="checkbox.setChecked(true)">
        Check
      </Button>
      <Button size="sm" variant="outline" @click="checkbox.setChecked(false)">
        Uncheck
      </Button>
    </div>

    <p class="text-sm text-muted-foreground">
      Checked: {{ checkbox.checked }}
    </p>
  </div>
</template>
