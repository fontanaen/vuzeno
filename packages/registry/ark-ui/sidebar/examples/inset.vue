<script setup lang="ts">
import { HomeIcon, LayoutDashboardIcon, SettingsIcon } from "@lucide/vue";
import { Sidebar } from "@vuzeno/registry/ui/sidebar";
</script>

<template>
  <div class="h-[420px] w-full overflow-hidden rounded-lg border">
    <Sidebar.Provider class="h-full">
      <Sidebar.Root variant="inset">
        <Sidebar.Header>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton size="lg">
                <LayoutDashboardIcon />
                <span>Dashboard</span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton is-active tooltip="Overview">
                    <HomeIcon />
                    <span>Overview</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton tooltip="Settings">
                    <SettingsIcon />
                    <span>Settings</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>
        <Sidebar.Rail />
      </Sidebar.Root>
      <Sidebar.Inset>
        <header class="flex h-12 items-center gap-2 border-b px-4">
          <Sidebar.Trigger />
          <span class="text-sm font-medium">Inset variant</span>
        </header>
        <div class="flex flex-1 flex-col gap-4 p-6">
          <div class="rounded-lg border bg-background p-4 text-sm text-muted-foreground">
            The inset variant wraps the main content in a padded, rounded container.
          </div>
        </div>
      </Sidebar.Inset>
    </Sidebar.Provider>
  </div>
</template>
