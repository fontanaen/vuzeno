<script setup lang="ts">
import { Button } from "@vuzeno/ui/components/button";
import { GitHubIcon } from "vue3-simple-icons";
import { siteConfig } from "~/lib/site-config";
</script>

<template>
  <Button as="a" :href="siteConfig.links.github" variant="ghost" size="icon-sm" class="size-8">
    <GitHubIcon />
  </Button>
</template>