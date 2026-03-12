<script setup lang="ts">
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@vuzeno/ui/components/collapsible";
import { type DefaultTheme, useData } from "vitepress";
import { computed } from "vue";
import DocOutline from "../components/DocOutline.vue";
import DocSidebar from "../components/DocSidebar.vue";
import Home from "../components/Home.vue";
import Header from "./Header.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { theme, frontmatter } = useData();

const sidebar = computed(() => theme.value.sidebar as DefaultTheme.SidebarItem[]);
</script>

<template>
  <div class="flex flex-col items-center min-h-screen h-full">
    <Header />

    <div
      v-if="frontmatter.layout === 'home'"
      class="h-full flex flex-col justify-between flex-1 w-full"
    >
      <main>
          <Home />
      </main>
    </div>

    <div v-else class="max-w-[1440px] w-full h-full flex flex-col grow">
      <main class="flex items-start flex-1">
        <aside class="hidden md:block w-68 shrink-0 py-4 pl-4 pr-4 sticky top-20 h-full overflow-y-auto max-h-[calc(100svh-4rem)]">
          <div
            v-if="sidebar"
            class="h-full"
          >
            <DocSidebar :items="sidebar" />
          </div>
          <div class="h-6 w-full" />
        </aside>

        <div class="px-6 md:px-24 py-6 md:py-8 overflow-x-hidden flex-1 h-full">
          <Collapsible class="block xl:hidden mb-4">
            <CollapsibleTrigger class="text-sm rounded-lg border border-muted px-4 py-2 mb-2 bg-card data-[state=open]:bg-muted">
              On this page
            </CollapsibleTrigger>

            <CollapsibleContent class="ml-4 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
              <DocOutline collapsible />
            </CollapsibleContent>
          </Collapsible>

          <article class="w-full prose prose-stone dark:prose-invert max-w-none pb-20">
            <Content />
          </article>
        </div>

        <div
          class="hidden xl:flex w-64 shrink-0 pt-0 pb-12 pl-2 sticky top-25 overflow-y-auto md:overflow-x-hidden h-[calc(100vh-5rem)] flex-col space-y-6 no-scrollbar"
        >
          <DocOutline />
        </div>
      </main>
    </div>
    
  </div>
</template>
