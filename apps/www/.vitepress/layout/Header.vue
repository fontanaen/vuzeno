<script setup lang="ts">
import { Button } from "@vuetella/ui/components/button";
import { Separator } from "@vuetella/ui/components/separator";
import { GithubIcon } from "lucide-vue-next";
import SearchDialog from "../components/SearchDialog.vue";
import ThemeToggle from "../components/ThemeToggle.vue";
</script>

<template>
  <header class="py-4 px-14 w-full sticky top-0 z-10 bg-background/25 backdrop-blur-xl">
    <div class="max-w-[1440px] mx-auto flex items-center justify-between">
      
      <div class="flex items-center gap-6">
        <a href="/" class="flex items-center gap-2">
          <!-- <svg class="w-8 h-auto" width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 13L0 0H4L9 7L14 0H18L9 13Z" fill="#FFB300"/>
            <path d="M11 0L9 3L7 0H4L9 7L14 0H11Z" fill="#734700"/>
            <path d="M17.5473 4.99999L13 11.582M18.4493 8.05406L17.3125 9.69956L16.1757 11.3451" stroke="#FFB300" stroke-width="1.5" stroke-linecap="round"/>
          </svg> -->

          <svg class="w-8 h-auto" width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 13L0 0H4L9 7L14 0H18L9 13Z" fill="#FFB300"/>
          <path d="M11 0L9 3L7 0H4L9 7L14 0H11Z" fill="#734700"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21 13L22.3333 11H15L22 1H14.2852L12.8555 3H17.9231L11 13H21Z" fill="#FFB300"/>
          <path d="M15 11H22.3333L23 10H17L21.8571 3L23.2857 1L24 0H20H15L14.2852 1H22L15 11Z" fill="#FFB300"/>
          </svg>

          
          <h1 class="text-2xl font-bold">Vuzeno UI</h1>
        </a>

        <SearchDialog />
      </div>

      <div class="flex items-center gap-6">
        <ThemeToggle />
        
        <Separator orientation="vertical" class="data-[orientation=vertical]:h-6" />

          <Button class="rounded-full" variant="outline" size="icon-sm" as="a" href="https://github.com/fontanaen/vuetella" target="_blank">
          <GithubIcon />
        </Button>
      </div>
    </div>
  </header>
</template>