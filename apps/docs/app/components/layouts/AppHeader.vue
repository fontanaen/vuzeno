<script setup lang="ts">
import { Separator } from "@vuzeno/registry/ui/separator";

const route = useRoute();

const floatingHeader = computed(() => {
  return route.path === "/";
});
</script>

<template>
  <header
    class="z-30"
    :class="floatingHeader
      ? 'sticky top-3 px-3 md:px-4'
      : 'sticky top-0 bg-background p-4 md:p-4'"
  >
    <div
      class="mx-auto flex items-center justify-between"
      :class="floatingHeader
        ? 'max-w-360 rounded-lg border border-border/70 bg-background/80 px-3 py-2.5 shadow-sm backdrop-blur-md supports-backdrop-filter:bg-background/70 md:px-4'
        : 'max-w-360'"
    >
      <LayoutsMobileNav class="md:hidden" />
      <div class="hidden md:block">
        <NuxtLink to="/" class="flex items-center gap-2">
          <svg class="w-8 h-auto" width="308" height="308" viewBox="0 0 308 308" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M111.687 103.365L149.411 116.583L260.286 73.9734L222.561 60.755L111.687 103.365Z" fill="#FFAF00"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M56.2495 124.67L207.619 177.708L251.969 160.664L100.599 107.626L56.2495 124.67Z" fill="#FFAF00"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M93.391 193.891L131.115 207.109L251.969 160.664L214.244 147.446L93.391 193.891Z" fill="#FFAF00"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M93.391 193.891L229.671 241.642L274.021 224.598L137.741 176.847L93.391 193.891Z" fill="#FFAF00"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M97.3341 171.242C112.643 165.359 114.497 156.891 101.475 152.328C88.4533 147.765 65.4871 148.836 50.1785 154.719C34.8699 160.602 33.0159 169.07 46.0376 173.633C59.0593 178.196 82.0255 177.125 97.3341 171.242Z" fill="#FFAF00"/>
          </svg>

          <span class="text-lg font-medium tracking-tight">Vuzeno</span>
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