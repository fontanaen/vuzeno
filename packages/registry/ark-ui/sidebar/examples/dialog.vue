<script setup lang="ts">
import { BellIcon, CreditCardIcon, ShieldIcon, UserIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
import { Sidebar } from "@vuzeno/registry/ui/sidebar";
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger as-child>
      <Button variant="outline">
        Open dialog with sidebar
      </Button>
    </Dialog.Trigger>
    <Dialog.Content class="flex h-[min(520px,90vh)] w-5xl flex-col gap-0 overflow-hidden p-0">
      <Sidebar.Provider class="h-full">
        <Sidebar.Root collapsible="none">
          <Sidebar.Content>
            <Sidebar.Group>
              <Sidebar.GroupContent>
                <Sidebar.Menu>
                  <Sidebar.MenuItem>
                    <Sidebar.MenuButton is-active>
                      <UserIcon />
                      <span>Profile</span>
                    </Sidebar.MenuButton>
                  </Sidebar.MenuItem>
                  <Sidebar.MenuItem>
                    <Sidebar.MenuButton>
                      <BellIcon />
                      <span>Notifications</span>
                    </Sidebar.MenuButton>
                  </Sidebar.MenuItem>
                  <Sidebar.MenuItem>
                    <Sidebar.MenuButton>
                      <ShieldIcon />
                      <span>Security</span>
                    </Sidebar.MenuButton>
                  </Sidebar.MenuItem>
                  <Sidebar.MenuItem>
                    <Sidebar.MenuButton>
                      <CreditCardIcon />
                      <span>Billing</span>
                    </Sidebar.MenuButton>
                  </Sidebar.MenuItem>
                </Sidebar.Menu>
              </Sidebar.GroupContent>
            </Sidebar.Group>
          </Sidebar.Content>
        </Sidebar.Root>
        <Sidebar.Inset>
          <div class="flex h-full items-center justify-center p-6 text-sm text-muted-foreground">
            Dialog main content
          </div>
        </Sidebar.Inset>
      </Sidebar.Provider>
    </Dialog.Content>
  </Dialog.Root>
</template>
