<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";
import { Sidebar } from "@vuzeno/registry/ui/sidebar";

const props = defineProps<{
  tree: ContentNavigationItem;
}>();

const { path } = toRefs(useRoute());
</script>

<template>
  <Sidebar.Root
    class="sticky top-[calc(var(--header-height)+1px)] z-30 hidden h-[calc(100svh-var(--footer-height)-4rem)] bg-transparent lg:flex"
    collapsible="none"
  >
    <Sidebar.Content class="no-scrollbar overflow-x-hidden px-2">
      <div class="from-background via-background/80 to-background/50 sticky -top-1 z-10 h-8 shrink-0 bg-linear-to-b blur-xs" />
    
      <Sidebar.Group v-for="item in tree?.children ?? []" :key="item.title">
        <Sidebar.GroupLabel class="text-muted-foreground font-medium">
          {{ item.title }}
        </Sidebar.GroupLabel>
        <Sidebar.GroupContent>
          <Sidebar.Menu class="gap-0.5">
            <template
              v-for="childItem in item?.children"
              :key="childItem?.url"
            >
              <Sidebar.MenuItem>
                <Sidebar.MenuButton
                  as-child
                  :is-active="childItem?.path === path"
                  class="data-[active=true]:bg-accent data-[active=true]:border-accent xl:w-full xl:max-w-48 relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md"
                >
                  <a v-if="childItem?.type === 'asset'" :href="childItem?.path" target="_blank">{{ childItem.title }}</a>
                  <NuxtLink v-else :to="childItem?.path" class="justify-between">
                    <span class="absolute inset-0 flex w-(--sidebar-width) bg-transparent" />
                    {{ childItem.title }}
                    <span
                      v-if="childItem.tag"
                      :class="{
                        'bg-green-500/15 text-green-600 dark:text-green-400': childItem.tag === 'new',
                        'bg-amber-500/15 text-amber-600 dark:text-amber-400': childItem.tag === 'alpha',
                        'bg-blue-500/15 text-blue-600 dark:text-blue-400': childItem.tag === 'updated',
                      }"
                      class="rounded px-1 py-0.5 text-[10px] font-semibold leading-none"
                    >
                      {{ childItem.tag }}
                    </span>
                  </NuxtLink>
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            </template>
          </Sidebar.Menu>
        </Sidebar.GroupContent>
      </Sidebar.Group>
      <div class="from-background via-background/80 to-background/50 sticky -bottom-1 z-10 h-16 shrink-0 bg-linear-to-t blur-xs" />
    </Sidebar.Content>
  </Sidebar.Root>
</template>