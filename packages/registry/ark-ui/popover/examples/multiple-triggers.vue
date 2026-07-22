<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Popover } from "@vuzeno/registry/ui/popover";
import { ref } from "vue";

type Item = {
  id: string;
  label: string;
  detail: string;
};

const items: Item[] = [
  { id: "share", label: "Share", detail: "Share this item with others via link or email." },
  { id: "export", label: "Export", detail: "Export this item as PDF, CSV, or JSON." },
  { id: "archive", label: "Archive", detail: "Move this item to the archive for later reference." },
];

const activeItem = ref<Item | null>(null);
</script>

<template>
  <Popover.Root @trigger-value-change="(event) => (activeItem = items.find((item) => item.id === event.value) ?? null)">
    <div class="flex flex-wrap gap-2">
      <Popover.Trigger
        v-for="item in items"
        :key="item.id"
        :value="item.id"
        as-child
      >
        <Button variant="outline">
          {{ item.label }}
        </Button>
      </Popover.Trigger>
    </div>
    <Popover.Content>
      <Popover.Title>{{ activeItem?.label ?? "Select an action" }}</Popover.Title>
      <Popover.Description>
        {{ activeItem?.detail ?? "Click a button above" }}
      </Popover.Description>
    </Popover.Content>
  </Popover.Root>
</template>
