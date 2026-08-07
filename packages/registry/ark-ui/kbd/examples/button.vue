<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Kbd } from "@vuzeno/registry/ui/kbd";
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <Button variant="outline">
      Accept
      <Kbd.Item>⏎</Kbd.Item>
    </Button>
    <Button variant="outline">
      Cancel
      <Kbd.Item>Esc</Kbd.Item>
    </Button>
  </div>
</template>
