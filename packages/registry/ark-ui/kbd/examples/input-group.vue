<script setup lang="ts">
import { SearchIcon } from "@lucide/vue";
import { InputGroup } from "@vuzeno/registry/ui/input-group";
import { Kbd } from "@vuzeno/registry/ui/kbd";
</script>

<template>
  <InputGroup.Root class="max-w-xs">
    <InputGroup.Input placeholder="Search..." />
    <InputGroup.Addon>
      <SearchIcon />
    </InputGroup.Addon>
    <InputGroup.Addon align="inline-end">
      <Kbd.Group>
        <Kbd.Item>⌘</Kbd.Item>
        <Kbd.Item>K</Kbd.Item>
      </Kbd.Group>
    </InputGroup.Addon>
  </InputGroup.Root>
</template>
