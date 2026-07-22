<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { GitHubIcon } from "vue3-simple-icons";
import { siteConfig } from "~/lib/site-config";

const { data: repository } = await useFetch("/api/github/repository", {
  key: "github-repository",
});

const starCount = computed(() => {
  if (!repository.value) {
    return null;
  }

  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(repository.value.stargazersCount);
});
</script>

<template>
  <Button
    as-child
    variant="ghost"
    size="sm"
    class="h-8 gap-1.5 px-2"
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
