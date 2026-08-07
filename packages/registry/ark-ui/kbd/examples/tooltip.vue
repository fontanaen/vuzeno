<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { ButtonGroup } from "@vuzeno/registry/ui/button-group";
import { Kbd } from "@vuzeno/registry/ui/kbd";
import { Tooltip } from "@vuzeno/registry/ui/tooltip";
</script>

<template>
  <ButtonGroup>
    <Tooltip.Root>
      <Tooltip.Trigger as-child>
        <Button variant="outline">Save</Button>
      </Tooltip.Trigger>
      <Tooltip.Content class="flex items-center gap-2">
        Save
        <Kbd.Group>
          <Kbd.Item>⌘</Kbd.Item>
          <Kbd.Item>S</Kbd.Item>
        </Kbd.Group>
      </Tooltip.Content>
    </Tooltip.Root>
    <Tooltip.Root>
      <Tooltip.Trigger as-child>
        <Button variant="outline">Print</Button>
      </Tooltip.Trigger>
      <Tooltip.Content class="flex items-center gap-2">
        Print
        <Kbd.Item>P</Kbd.Item>
      </Tooltip.Content>
    </Tooltip.Root>
  </ButtonGroup>
</template>
