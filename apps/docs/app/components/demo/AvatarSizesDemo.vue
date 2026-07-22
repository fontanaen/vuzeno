<script setup lang="ts">
import { Avatar } from "@vuzeno/registry/ui/avatar";
</script>

<template>
  <div class="flex items-center gap-4">
    <Avatar.Root size="sm">
      <Avatar.Image src="https://github.com/fontanaen.png" alt="CN" />
      <Avatar.Fallback>CN</Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root>
      <Avatar.Image src="https://github.com/fontanaen.png" alt="CN" />
      <Avatar.Fallback>CN</Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root size="lg">
      <Avatar.Image src="https://github.com/fontanaen.png" alt="CN" />
      <Avatar.Fallback>CN</Avatar.Fallback>
    </Avatar.Root>
  </div>
</template>
