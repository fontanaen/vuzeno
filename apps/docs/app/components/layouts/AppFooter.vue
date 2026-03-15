<script setup lang="ts">
import { siteConfig } from "~/lib/site-config";
</script>

<template>
  <footer class="group-has-[.section-soft]/body:bg-surface/40 3xl:fixed:bg-transparent dark:bg-transparent">
    <div class="container-wrapper px-4 xl:px-6">
      <div class="flex h-(--footer-height) items-center justify-between">
        <div class="text-muted-foreground w-full text-center text-xs leading-loose sm:text-sm">
          Built with 
          <a 
            href="https://shadcn-vue.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="font-medium underline underline-offset-4 hover:text-primary"
          >
            shadcn-vue
          </a>. 
          The source code is available on
          <a
            :href="siteConfig.links.github"
            target="_blank"
            rel="noreferrer"
            class="font-medium underline underline-offset-4 hover:text-primary"
          >
            GitHub
          </a>
          .
        </div>
      </div>
    </div>
  </footer>
</template>