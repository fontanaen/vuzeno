<script setup lang="ts">
import { Collapsible, useCollapsible } from "@vuzeno/registry/ui/collapsible";
import { ChevronRightIcon } from "lucide-vue-next";

const collapsible = useCollapsible();
</script>

<template>
  <div class="flex flex-col gap-4">
    <output class="text-sm text-muted-foreground">
      open: {{ String(collapsible.open) }}, visible: {{ String(collapsible.visible) }}
    </output>

    <Collapsible.RootProvider :value="collapsible">
      <Collapsible.Trigger>
        Toggle Panel
        <Collapsible.Indicator>
          <ChevronRightIcon />
        </Collapsible.Indicator>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Collapsible.Body>
          This panel can be toggled by the button above, which uses the useCollapsible hook for state management.
        </Collapsible.Body>
      </Collapsible.Content>
    </Collapsible.RootProvider>
  </div>
</template>
