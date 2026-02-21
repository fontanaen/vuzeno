<script setup lang="ts">
import { Button } from "@vuetella/ui/components/button";
import { Separator } from "@vuetella/ui/components/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@vuetella/ui/components/sheet";
import { MenuIcon } from "lucide-vue-next";
import { type DefaultTheme, useData } from "vitepress";
import { computed } from "vue";
import { GitHubIcon, XIcon } from "vue3-simple-icons";
import DocSidebar from "../components/DocSidebar.vue";
import ThemeToggle from "../components/ThemeToggle.vue";

const { theme } = useData();

const sidebar = computed(() => theme.value.sidebar as DefaultTheme.SidebarItem[]);
</script>

<template>
  <header class="py-2 md:py-4 px-4 md:px-14 w-full sticky top-0 z-20 bg-background/25 backdrop-blur-xl">
    <div class="max-w-[1440px] mx-auto flex items-center justify-between">
      <div class="hidden md:flex items-center gap-6">
        <a href="/" class="flex items-center gap-2">
          <svg class="w-8 h-auto" width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 13L0 0H4L9 7L14 0H18L9 13Z" fill="#FFB300"/>
            <path d="M11 0L9 3L7 0H4L9 7L14 0H11Z" fill="#734700"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 13L22.3333 11H15L22 1H14.2852L12.8555 3H17.9231L11 13H21Z" fill="#FFB300"/>
            <path d="M15 11H22.3333L23 10H17L21.8571 3L23.2857 1L24 0H20H15L14.2852 1H22L15 11Z" fill="#FFB300"/>
          </svg>

          <h1 class="text-2xl font-bold">Vuzeno UI</h1>
        </a>
      </div>

      <div class="flex md:hidden">
        <Sheet>
          <SheetTrigger>
            <Button variant="ghost" size="icon">
              <MenuIcon class="size-4" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" class="px-2 pt-3">
            <SheetHeader class="px-4">
              <SheetTitle as="a" href="/" class="text-left">Vuzeno UI</SheetTitle>
            </SheetHeader>

            <div class="mt-8">
              <DocSidebar :items="sidebar" />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div class="flex items-center gap-4">
        <div class="hidden md:flex items-center gap-2">
          <Button class="rounded-full" variant="outline" size="icon-sm" as="a" href="https://github.com/fontanaen/vuetella" target="_blank">
            <GitHubIcon class="size-4 fill-foreground" />
          </Button>
          
          <Button class="rounded-full" variant="outline" size="icon-sm" as="a" href="https://x.com/fontanaen11" target="_blank">
            <XIcon class="size-4 fill-foreground" />
          </Button>
        </div>

        <Separator orientation="vertical" class="data-[orientation=vertical]:h-6 hidden md:block" />
        
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>