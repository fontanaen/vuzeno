<script setup lang="ts">
import { Avatar } from "@vuzeno/registry/ui/avatar";
</script>

<template>
  <Avatar.Group class="-space-x-3 bg-background rounded-full p-2.5">
    <Avatar.Root size="sm">
      <Avatar.Image src="https://github.com/fontanaen.png" alt="CN" />
      <Avatar.Fallback>CN</Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root size="sm">
      <Avatar.Fallback>AB</Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root size="sm">
      <Avatar.Fallback>JD</Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root size="sm">
      <Avatar.Fallback>+3</Avatar.Fallback>
    </Avatar.Root>
  </Avatar.Group>
</template>
