<script setup lang="ts">
import { siteConfig } from "~/lib/site-config";

useSeoMeta({
  title: siteConfig.name,
  titleTemplate: `%s - ${siteConfig.name}`,
  description: siteConfig.description,
});
</script>

<template>
  <div data-slot="layout" class="bg-background relative z-10 flex min-h-svh flex-col">
    <LayoutsAppHeader />
    <main class="flex flex-1 flex-col">
      <slot />
    </main>
    <LayoutsAppFooter />
  </div>
</template>