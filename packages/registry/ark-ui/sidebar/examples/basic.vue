<script setup lang="ts">
import { Sidebar } from "@vuzeno/registry/ui/sidebar";
import { BookOpenIcon, HomeIcon, InboxIcon, SearchIcon, SettingsIcon } from "lucide-vue-next";
</script>

<template>
  <div class="h-[420px] w-full overflow-hidden rounded-lg border">
    <Sidebar.Provider class="h-full">
      <Sidebar.Root nested>
        <Sidebar.Header>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton size="lg">
                <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <span class="text-sm font-semibold">V</span>
                </div>
                <div class="grid flex-1 text-left text-sm leading-tight">
                  <span class="truncate font-semibold">Vuzeno</span>
                  <span class="truncate text-xs text-sidebar-foreground/70">Documentation</span>
                </div>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupLabel>Platform</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton is-active tooltip="Home">
                    <HomeIcon />
                    <span>Home</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton tooltip="Inbox">
                    <InboxIcon />
                    <span>Inbox</span>
                    <Sidebar.MenuBadge>12</Sidebar.MenuBadge>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton tooltip="Docs">
                    <BookOpenIcon />
                    <span>Docs</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
          <Sidebar.Group>
            <Sidebar.GroupLabel>Settings</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton tooltip="Search">
                    <SearchIcon />
                    <span>Search</span>
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
        <Sidebar.Footer>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton tooltip="Account">
                <span class="flex size-6 items-center justify-center rounded-full bg-sidebar-accent text-xs font-medium">JD</span>
                <span>John Doe</span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Footer>
        <Sidebar.Rail />
      </Sidebar.Root>
      <Sidebar.Inset>
        <header class="flex h-12 items-center gap-2 border-b px-4">
          <Sidebar.Trigger />
          <span class="text-sm font-medium">Classic sidebar</span>
        </header>
        <div class="flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground">
          Main content area
        </div>
      </Sidebar.Inset>
    </Sidebar.Provider>
  </div>
</template>
