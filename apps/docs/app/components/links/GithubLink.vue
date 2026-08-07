<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { GitHubIcon } from "vue3-simple-icons";
import { siteConfig } from "~/lib/site-config";

const { starCount } = await useGithubRepository();
</script>

<template>
  <Button
    as-child
    variant="ghost"
    size="sm"
    class="h-8 px-2 gap-1.5"
    :aria-label="starCount ? `GitHub repository with ${starCount} stars` : 'GitHub repository'"
  >
    <a
      :href="siteConfig.links.github"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubIcon />
      <span v-if="starCount" class="text-xs tabular-nums">{{ starCount }}</span>
    </a>
  </Button>
</template>
