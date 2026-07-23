<script setup lang="ts">
import { PlusIcon } from "@lucide/vue";
import { Avatar } from "@vuzeno/registry/ui/avatar";
import { Button } from "@vuzeno/registry/ui/button";
import { Empty } from "@vuzeno/registry/ui/empty";
</script>

<template>
  <Empty.Root>
    <Empty.Header>
      <Empty.Media>
        <div class="flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
          <Avatar.Root>
            <Avatar.Image src="https://github.com/fontanaen.png" alt="@fontanaen" />
            <Avatar.Fallback>CN</Avatar.Fallback>
          </Avatar.Root>
          <Avatar.Root>
            <Avatar.Fallback>AB</Avatar.Fallback>
          </Avatar.Root>
          <Avatar.Root>
            <Avatar.Fallback>JD</Avatar.Fallback>
          </Avatar.Root>
        </div>
      </Empty.Media>
      <Empty.Title>No Team Members</Empty.Title>
      <Empty.Description>
        Invite your team to collaborate on this project.
      </Empty.Description>
    </Empty.Header>
    <Empty.Content>
      <Button size="sm">
        <PlusIcon />
        Invite Members
      </Button>
    </Empty.Content>
  </Empty.Root>
</template>
