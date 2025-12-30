<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@vuetella/ui/components/sidebar'
import { ImageIcon } from 'lucide-vue-next'
import { RouterLink } from 'vue-router';
</script>

<template>
  <SidebarProvider>
    <Sidebar>
      <SidebarHeader>
        <div class="flex items-center gap-2 px-2 py-2">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span class="text-sm font-semibold">V</span>
          </div>
          <div class="flex flex-col">
            <span class="text-sm font-semibold">Vuetella</span>
            <span class="text-xs text-muted-foreground">Playground</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton :as="RouterLink" :to="{ name: 'components.image' }">
                  <ImageIcon />
                  <span>Image</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div class="px-2 py-2 text-xs text-muted-foreground">
          © 2024 Vuetella
        </div>
      </SidebarFooter>
    </Sidebar>
    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger />
        <div class="flex-1">
          <h1 class="text-lg font-semibold">Playground</h1>
        </div>
      </header>
      <main class="flex-1 overflow-auto p-6">
        <div class="mx-auto max-w-4xl space-y-6">
          <RouterView />
        </div>
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>
