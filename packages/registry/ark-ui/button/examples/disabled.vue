<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Button disabled>Disabled</Button>
    <Button variant="outline" disabled>Disabled</Button>
    <Button variant="secondary" disabled>Disabled</Button>
  </div>
</template>
