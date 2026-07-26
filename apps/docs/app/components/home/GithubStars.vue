<script setup lang="ts">
import { StarIcon } from "@lucide/vue";
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
  <a
    :href="siteConfig.links.github"
    target="_blank"
    rel="noopener noreferrer"
    class="github-stars inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-3 py-1.5 text-sm text-muted-foreground transition-[color,border-color,transform] duration-150 ease-out hover:border-border hover:text-foreground"
    :aria-label="starCount ? `Vuzeno on GitHub, ${starCount} stars` : 'Vuzeno on GitHub'"
  >
    <GitHubIcon class="size-3.5" aria-hidden="true" />
    <span class="font-medium text-foreground">GitHub</span>
    <span class="inline-flex items-center gap-1 tabular-nums" aria-hidden="true">
      <StarIcon class="size-3.5 fill-current text-(--vz-accent)" />
      <span>{{ starCount ?? "—" }}</span>
    </span>
  </a>
</template>

<style scoped>
.github-stars:active {
  transform: scale(0.97);
}
</style>
