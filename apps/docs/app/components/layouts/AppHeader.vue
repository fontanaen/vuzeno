<script setup lang="ts">
import { Separator } from "@vuzeno/ui/components/separator";
</script>

<template>
  <header class="sticky top-0 z-30 bg-background p-4 md:p-4">
    <div class="max-w-[1440px] mx-auto flex items-center justify-between">
      <LayoutsMobileNav class="md:hidden" />
      <div class="hidden md:block">
        <NuxtLink to="/">
          <svg v-if="false" class="w-8 h-auto" width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 13L0 0H4L9 7L14 0H18L9 13Z" fill="#FFB300"/>
            <path d="M11 0L9 3L7 0H4L9 7L14 0H11Z" fill="#734700"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 13L22.3333 11H15L22 1H14.2852L12.8555 3H17.9231L11 13H21Z" fill="#FFB300"/>
            <path d="M15 11H22.3333L23 10H17L21.8571 3L23.2857 1L24 0H20H15L14.2852 1H22L15 11Z" fill="#FFB300"/>
          </svg>
          <svg class="w-8 h-auto" width="308" height="308" viewBox="0 0 308 308" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M111.687 103.365L149.411 116.583L260.286 73.9734L222.561 60.755L111.687 103.365Z" fill="#FFAF00"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M56.2495 124.67L207.619 177.708L251.969 160.664L100.599 107.626L56.2495 124.67Z" fill="#FFAF00"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M93.391 193.891L131.115 207.109L251.969 160.664L214.244 147.446L93.391 193.891Z" fill="#FFAF00"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M93.391 193.891L229.671 241.642L274.021 224.598L137.741 176.847L93.391 193.891Z" fill="#FFAF00"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M97.3341 171.242C112.643 165.359 114.497 156.891 101.475 152.328C88.4533 147.765 65.4871 148.836 50.1785 154.719C34.8699 160.602 33.0159 169.07 46.0376 173.633C59.0593 178.196 82.0255 177.125 97.3341 171.242Z" fill="#FFAF00"/>
          </svg>

        </NuxtLink>
      </div>

      <div class="flex items-center gap-1">
        <DocsSearchMenu />

        <Separator orientation="vertical" class="data-[orientation=vertical]:h-4 hidden md:block ml-4 mr-2" />

        <PaletteThemeSwitcher />
        <ThemeSwitcher />

        <Separator orientation="vertical" class="data-[orientation=vertical]:h-4 hidden md:block mx-2" />
        
        <LinksGithubLink />
        <LinksXLink />
      </div>
    </div>
  </header>
</template>