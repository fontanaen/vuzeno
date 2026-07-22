<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { ArrowRightIcon } from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
    <Button size="icon-xs" aria-label="Submit">
      <ArrowRightIcon />
    </Button>
    <Button size="icon-sm" aria-label="Submit">
      <ArrowRightIcon />
    </Button>
    <Button size="icon" aria-label="Submit">
      <ArrowRightIcon />
    </Button>
    <Button size="icon-lg" aria-label="Submit">
      <ArrowRightIcon />
    </Button>
  </div>
</template>
