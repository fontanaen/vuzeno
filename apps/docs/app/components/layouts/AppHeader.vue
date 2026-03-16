<script setup lang="ts">
import { Separator } from "@vuzeno/ui/components/separator";
</script>

<template>
  <header class="sticky top-0 z-30 bg-background p-4 md:p-4">
    <div class="max-w-[1440px] mx-auto flex items-center justify-between">
      <LayoutsMobileNav class="md:hidden" />
      <div class="hidden md:block">
        <NuxtLink to="/">
          <svg class="w-8 h-auto" width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 13L0 0H4L9 7L14 0H18L9 13Z" fill="#FFB300"/>
            <path d="M11 0L9 3L7 0H4L9 7L14 0H11Z" fill="#734700"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 13L22.3333 11H15L22 1H14.2852L12.8555 3H17.9231L11 13H21Z" fill="#FFB300"/>
            <path d="M15 11H22.3333L23 10H17L21.8571 3L23.2857 1L24 0H20H15L14.2852 1H22L15 11Z" fill="#FFB300"/>
          </svg>
        </NuxtLink>
      </div>

      <div class="flex items-center gap-2">
        <DocsSearchMenu />

        <Separator orientation="vertical" class="data-[orientation=vertical]:h-4 hidden md:block ml-2" />

        <LinksGithubLink />
        <LinksXLink />

        <Separator orientation="vertical" class="data-[orientation=vertical]:h-4 hidden md:block" />

        <ThemeSwitcher />
      </div>
    </div>
  </header>
</template>