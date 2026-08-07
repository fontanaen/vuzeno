<script setup lang="ts">
import { StarIcon } from "@lucide/vue";
import { GitHubIcon } from "vue3-simple-icons";
import { siteConfig } from "~/lib/site-config";

const { starCount } = await useGithubRepository();
</script>

<template>
  <a
    v-if="starCount"
    :href="siteConfig.links.github"
    target="_blank"
    rel="noopener noreferrer"
    class="github-stars inline-flex items-center gap-2 pb-1 border-b border-transparent bg-background/70 text-sm text-muted-foreground transition-[color,border-color,transform] duration-100 ease-out hover:border-primary hover:text-foreground"
    :aria-label="`Vuzeno on GitHub, ${starCount} stars`"
  >
    <GitHubIcon class="size-3.5" aria-hidden="true" />
    <span class="font-medium text-foreground">GitHub</span>
    <span class="inline-flex items-center gap-1 tabular-nums" aria-hidden="true">
      <StarIcon class="size-3.5 fill-current text-(--vz-accent)" />
      <span>{{ starCount }}</span>
    </span>
  </a>
</template>

<style scoped>
.github-stars:active {
  transform: scale(0.97);
}
</style>
