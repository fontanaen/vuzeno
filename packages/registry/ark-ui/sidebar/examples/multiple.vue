<script setup lang="ts">
import { Sidebar } from "@vuzeno/registry/ui/sidebar";
import { BellIcon, HomeIcon } from "lucide-vue-next";
</script>

<template>
  <div class="h-[420px] w-full overflow-hidden rounded-lg border">
    <Sidebar.Provider class="h-full">
      <Sidebar.Root
        id="left"
        side="left"
      >
        <Sidebar.Header>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton tooltip="Home">
                <HomeIcon />
                <span>Home</span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Header>
        <Sidebar.Rail />
      </Sidebar.Root>
      <Sidebar.Inset>
        <header class="flex h-12 items-center justify-between border-b px-4">
          <div class="flex items-center gap-2">
            <Sidebar.Trigger target="left" />
            <span class="text-sm font-medium">Multiple sidebars</span>
          </div>
          <Sidebar.Trigger target="right" />
        </header>
        <div class="flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground">
          Left and right sidebars toggle independently.
        </div>
      </Sidebar.Inset>
      <Sidebar.Root
        id="right"
        side="right"
      >
        <Sidebar.Header>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton tooltip="Notifications">
                <BellIcon />
                <span>Notifications</span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Header>
        <Sidebar.Rail />
      </Sidebar.Root>
    </Sidebar.Provider>
  </div>
</template>
