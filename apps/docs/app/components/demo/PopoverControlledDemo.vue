<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Popover } from "@vuzeno/registry/ui/popover";
import { XIcon } from "lucide-vue-next";
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <Popover.Root v-model:open="open">
    <Popover.Trigger as-child>
      <Button variant="outline">Click Me</Button>
    </Popover.Trigger>
    <Popover.Content>
      <Popover.CloseTrigger>
        <XIcon />
      </Popover.CloseTrigger>
      <Popover.Title>Team Members</Popover.Title>
      <Popover.Description>
        Invite colleagues to collaborate on this project.
      </Popover.Description>
    </Popover.Content>
  </Popover.Root>
</template>
