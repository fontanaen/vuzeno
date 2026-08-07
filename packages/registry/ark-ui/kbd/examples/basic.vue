<script setup lang="ts">
import { Kbd } from "@vuzeno/registry/ui/kbd";
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <Kbd.Group>
      <Kbd.Item>⌘</Kbd.Item>
      <Kbd.Item>⇧</Kbd.Item>
      <Kbd.Item>⌥</Kbd.Item>
      <Kbd.Item>⌃</Kbd.Item>
    </Kbd.Group>
    <Kbd.Group>
      <Kbd.Item>Ctrl</Kbd.Item>
      <span>+</span>
      <Kbd.Item>B</Kbd.Item>
    </Kbd.Group>
  </div>
</template>
