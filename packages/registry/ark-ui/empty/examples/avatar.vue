<script setup lang="ts">
import { Avatar } from "@vuzeno/registry/ui/avatar";
import { Button } from "@vuzeno/registry/ui/button";
import { Empty } from "@vuzeno/registry/ui/empty";
</script>

<template>
  <Empty.Root>
    <Empty.Header>
      <Empty.Media variant="default">
        <Avatar.Root class="size-12">
          <Avatar.Image
            src="https://github.com/fontanaen.png"
            alt="CN"
            class="grayscale"
          />
          <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar.Root>
      </Empty.Media>
      <Empty.Title>User Offline</Empty.Title>
      <Empty.Description>
        This user is currently offline. You can leave a message to notify them or try again later.
      </Empty.Description>
    </Empty.Header>
    <Empty.Content>
      <Button size="sm">Leave Message</Button>
    </Empty.Content>
  </Empty.Root>
</template>
