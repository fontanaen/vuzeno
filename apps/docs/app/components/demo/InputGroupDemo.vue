<script setup lang="ts">
import { InputGroup } from "@vuzeno/registry/ui/input-group";
import { Search } from "lucide-vue-next";
</script>

<template>
  <InputGroup.Root class="max-w-xs">
    <InputGroup.Input placeholder="Search..." />
    <InputGroup.Addon>
      <Search />
    </InputGroup.Addon>
    <InputGroup.Addon align="inline-end">12 results</InputGroup.Addon>
  </InputGroup.Root>
</template>
