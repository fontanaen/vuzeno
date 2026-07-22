<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { ButtonGroup } from "@vuzeno/registry/ui/button-group";
import { Input } from "@vuzeno/registry/ui/input";
import { SearchIcon } from "lucide-vue-next";
</script>

<template>
  <ButtonGroup aria-label="Search">
    <Input placeholder="Search..." class="min-w-48" />
    <Button variant="outline" aria-label="Search">
      <SearchIcon />
    </Button>
  </ButtonGroup>
</template>
