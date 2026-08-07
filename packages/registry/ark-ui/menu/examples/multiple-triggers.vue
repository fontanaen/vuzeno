<script setup lang="ts">
import { EllipsisVerticalIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Menu } from "@vuzeno/registry/ui/menu";

const messages = [
  { id: "1", sender: "Alice Johnson", preview: "Hey, can you review the latest PR?" },
  { id: "2", sender: "Bob Smith", preview: "Meeting notes from today are attached." },
  { id: "3", sender: "Carol Davis", preview: "The deploy finished successfully!" },
];
</script>

<template>
  <Menu.Root :positioning="{ placement: 'right-start' }">
    <div class="flex w-full max-w-sm flex-col gap-1">
      <div
        v-for="message in messages"
        :key="message.id"
        class="flex items-center gap-3 rounded-md border border-border px-3 py-2.5"
      >
        <div class="min-w-0 flex-1">
          <div class="text-[0.8125rem] font-semibold text-foreground">{{ message.sender }}</div>
          <div class="truncate text-xs text-muted-foreground">{{ message.preview }}</div>
        </div>
        <Menu.Trigger
          :value="message.id"
          as-child
        >
          <Button
            variant="ghost"
            size="icon-xs"
            class="shrink-0 text-muted-foreground"
          >
            <EllipsisVerticalIcon />
          </Button>
        </Menu.Trigger>
      </div>
    </div>
    <Menu.Content>
          <Menu.Item value="reply">Reply</Menu.Item>
          <Menu.Item value="forward">Forward</Menu.Item>
          <Menu.Item value="archive">Archive</Menu.Item>
          <Menu.Separator />
          <Menu.Item value="delete">Delete</Menu.Item>
    </Menu.Content>
  </Menu.Root>
</template>
