<script setup lang="ts">
import { BellIcon, RefreshCcwIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Empty } from "@vuzeno/registry/ui/empty";
</script>

<template>
  <Empty.Root class="h-full bg-muted/30">
    <Empty.Header>
      <Empty.Media variant="icon">
        <BellIcon />
      </Empty.Media>
      <Empty.Title>No Notifications</Empty.Title>
      <Empty.Description class="max-w-xs text-pretty">
        You're all caught up. New notifications will appear here.
      </Empty.Description>
    </Empty.Header>
    <Empty.Content>
      <Button variant="outline">
        <RefreshCcwIcon />
        Refresh
      </Button>
    </Empty.Content>
  </Empty.Root>
</template>
