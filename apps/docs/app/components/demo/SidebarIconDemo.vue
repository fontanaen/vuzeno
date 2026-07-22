<script setup lang="ts">
import { Sidebar } from "@vuzeno/registry/ui/sidebar";
import { ChevronRightIcon, CreditCardIcon, HomeIcon, SettingsIcon, UserIcon } from "lucide-vue-next";
</script>

<template>
  <div class="h-[420px] w-full overflow-hidden rounded-lg border">
    <Sidebar.Provider class="h-full">
      <Sidebar.Root
        collapsible="icon"
        :default-open="true"
      >
        <Sidebar.Header>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton
                size="lg"
                tooltip="Acme Inc"
              >
                <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  A
                </div>
                <span>Acme Inc</span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton
                    is-active
                    tooltip="Home"
                  >
                    <HomeIcon />
                    <span>Home</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
                <Sidebar.MenuSub
                  label="Settings"
                  :default-open="true"
                >
                  <Sidebar.MenuSubTrigger>
                    <SettingsIcon />
                    <span>Settings</span>
                    <ChevronRightIcon class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </Sidebar.MenuSubTrigger>
                  <Sidebar.MenuSubContent>
                    <Sidebar.MenuSubItem>
                      <Sidebar.MenuSubButton>
                        <UserIcon />
                        <span>Profile</span>
                      </Sidebar.MenuSubButton>
                    </Sidebar.MenuSubItem>
                    <Sidebar.MenuSubItem>
                      <Sidebar.MenuSubButton>
                        <CreditCardIcon />
                        <span>Billing</span>
                      </Sidebar.MenuSubButton>
                    </Sidebar.MenuSubItem>
                  </Sidebar.MenuSubContent>
                </Sidebar.MenuSub>
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>
        <Sidebar.Rail />
      </Sidebar.Root>
      <Sidebar.Inset>
        <header class="flex h-12 items-center gap-2 border-b px-4">
          <Sidebar.Trigger />
          <span class="text-sm font-medium">Icon collapse with hover flyout</span>
        </header>
        <div class="flex flex-1 flex-col gap-2 p-6 text-sm text-muted-foreground">
          <p>Collapse the sidebar, then hover the Settings icon to open its submenu.</p>
        </div>
      </Sidebar.Inset>
    </Sidebar.Provider>
  </div>
</template>
