<script setup lang="ts">
import { ArrowRightIcon, ArrowUpRightIcon } from "@lucide/vue";

const { data: components } = await useAsyncData("docs-component-cards", async () => {
  const pages = await queryCollection("content").where("path", "LIKE", "/docs/components/%").select("title", "description", "path").all();

  return pages.filter((page) => page.path !== "/docs/components").sort((left, right) => left.title.localeCompare(right.title, undefined, { sensitivity: "base" }));
});
</script>

<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
    <NuxtLink
      v-for="component in components"
      :key="component.path"
      :to="component.path"
      :class="[
        'group flex flex-col gap-1.5 rounded-lg p-4 transition-colors duration-150 min-h-36',
        'border border-primary/10',
        'bg-no-repeat bg-origin-border bg-card/40 hover:bg-primary/5 active:bg-primary/10 bg-linear-to-b from-primary/7',
        'shadow-[inset_0_-1px_0_0_color-mix(in_oklab,var(--primary)_20%,transparent)]'
      ]"
    >
      <div class="flex items-center justify-between group">
        <h3 class="text-base font-semibold text-foreground">
          {{ component.title }}
        </h3>

        <ArrowUpRightIcon class="size-4 text-primary/75 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-150"/>
      </div>
      <p
        v-if="component.description"
        class="text-sm text-muted-foreground text-pretty line-clamp-3"
      >
        {{ component.description }}
      </p>
    </NuxtLink>
  </div>
</template>
