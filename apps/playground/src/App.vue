<script setup lang="ts">
import { Button } from "@vuzeno/ui/components/button";
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
} from "@vuzeno/ui/components/sidebar";
import { Moon, Sun } from "lucide-vue-next";
import { RouterLink } from "vue-router";
import { useTheme } from "./composables/useDark";

const { isDark, toggleDark } = useTheme();

const navItems = [
  { label: "Autocomplete", to: { name: "components.autocomplete" } },
  { label: "Color Picker", to: { name: "components.color-picker" } },
  { label: "Editable", to: { name: "components.editable" } },
  { label: "Filters", to: { name: "components.filters" } },
  { label: "Image", to: { name: "components.image" } },
  { label: "Phone Field", to: { name: "components.phone-field" } },
  { label: "Password Field", to: { name: "components.password-field" } },
];
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
            <span class="text-sm font-semibold">Vuzeno UI</span>
            <span class="text-xs text-muted-foreground">Playground</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem v-for="item in navItems" :key="item.label">
                <SidebarMenuButton :as="RouterLink" :to="item.to">
                  <span>{{ item.label }}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div class="px-2 py-2 text-xs text-muted-foreground">
          © 2024 Vuzeno UI
        </div>
      </SidebarFooter>
    </Sidebar>
    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger />
        <div class="flex-1">
          <h1 class="text-lg font-semibold">Playground</h1>
        </div>
        <Button
          variant="ghost"
          size="icon"
          @click="toggleDark()"
          aria-label="Toggle dark mode"
        >
          <Sun v-if="isDark" class="size-4" />
          <Moon v-else class="size-4" />
        </Button>
      </header>
      <main class="flex-1 overflow-auto p-6">
        <div class="mx-auto max-w-4xl space-y-6">
          <RouterView />
        </div>
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>
