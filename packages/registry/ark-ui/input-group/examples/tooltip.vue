<script setup lang="ts">
import { EyeIcon, InfoIcon } from "@lucide/vue";
import { InputGroup } from "@vuzeno/registry/ui/input-group";
import { Tooltip } from "@vuzeno/registry/ui/tooltip";
</script>

<template>
  <div class="grid w-full max-w-sm gap-6">
    <InputGroup.Root>
      <InputGroup.Input placeholder="Enter your API key" />
      <InputGroup.Addon align="inline-end">
        <Tooltip.Root>
          <Tooltip.Trigger as-child>
            <InputGroup.Button size="icon-xs" aria-label="API key help">
              <InfoIcon />
            </InputGroup.Button>
          </Tooltip.Trigger>
          <Teleport to="body">
            <Tooltip.Positioner>
              <Tooltip.Content>
                Your API key is available in your account settings.
              </Tooltip.Content>
            </Tooltip.Positioner>
          </Teleport>
        </Tooltip.Root>
      </InputGroup.Addon>
    </InputGroup.Root>

    <InputGroup.Root>
      <InputGroup.Input type="password" placeholder="Password" />
      <InputGroup.Addon align="inline-end">
        <Tooltip.Root>
          <Tooltip.Trigger as-child>
            <InputGroup.Button size="icon-xs" aria-label="Show password">
              <EyeIcon />
            </InputGroup.Button>
          </Tooltip.Trigger>
          <Teleport to="body">
            <Tooltip.Positioner>
              <Tooltip.Content>
                Show password
              </Tooltip.Content>
            </Tooltip.Positioner>
          </Teleport>
        </Tooltip.Root>
      </InputGroup.Addon>
    </InputGroup.Root>
  </div>
</template>
