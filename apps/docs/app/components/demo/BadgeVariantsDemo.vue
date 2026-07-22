<script setup lang="ts">
import { Badge } from "@vuzeno/registry/ui/badge";
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Badge variant="default">Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="outline">Outline</Badge>
  </div>
</template>
