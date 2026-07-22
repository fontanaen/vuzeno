<script setup lang="ts">
import { Empty } from "@vuzeno/registry/ui/empty";
import { InputGroup } from "@vuzeno/registry/ui/input-group";
import { Kbd } from "@vuzeno/ui/components/kbd";
import { SearchIcon } from "lucide-vue-next";
</script>

<template>
  <Empty.Root>
    <Empty.Header>
      <Empty.Title>404 - Not Found</Empty.Title>
      <Empty.Description>
        The page you're looking for doesn't exist. Try searching for what you need below.
      </Empty.Description>
    </Empty.Header>
    <Empty.Content>
      <InputGroup.Root class="sm:w-3/4">
        <InputGroup.Input placeholder="Try searching for pages..." />
        <InputGroup.Addon>
          <SearchIcon />
        </InputGroup.Addon>
        <InputGroup.Addon align="inline-end">
          <Kbd>/</Kbd>
        </InputGroup.Addon>
      </InputGroup.Root>
      <Empty.Description>
        Need help? <a href="#">Contact support</a>
      </Empty.Description>
    </Empty.Content>
  </Empty.Root>
</template>
