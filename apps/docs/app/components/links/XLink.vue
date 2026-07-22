<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { XIcon } from "vue3-simple-icons";
import { siteConfig } from "~/lib/site-config";
</script>

<template>
  <Button as-child variant="ghost" size="icon-sm" class="size-8">
    <a :href="siteConfig.links.x" target="_blank" rel="noopener noreferrer">
      <XIcon />
    </a>
  </Button>
</template>
