<script setup lang="ts">
import { AudioLinesIcon, PlusIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { ButtonGroup } from "@vuzeno/registry/ui/button-group";
import { Input } from "@vuzeno/registry/ui/input";
import { Tooltip } from "@vuzeno/registry/ui/tooltip";
</script>

<template>
  <ButtonGroup aria-label="Message composer">
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Add attachment">
        <PlusIcon />
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Input placeholder="Send a message..." class="min-w-48 flex-1" />
      <Tooltip.Root>
        <Tooltip.Trigger as-child>
          <Button variant="outline" size="icon" aria-label="Voice mode">
            <AudioLinesIcon />
          </Button>
        </Tooltip.Trigger>
        <Teleport to="body">
          <Tooltip.Positioner>
            <Tooltip.Content>
              Voice mode
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Teleport>
      </Tooltip.Root>
    </ButtonGroup>
  </ButtonGroup>
</template>
