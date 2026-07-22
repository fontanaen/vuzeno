<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Sidebar } from "@vuzeno/registry/ui/sidebar";
import { HomeIcon } from "lucide-vue-next";

const open = defineModel<boolean>("sidebarOpen", { default: true });

function toggleFromOutside() {
  open.value = !open.value;
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        @click="toggleFromOutside"
      >
        Toggle from outside (v-model)
      </Button>
      <span class="text-sm text-muted-foreground">
        Open: {{ open }}
      </span>
    </div>
    <div class="h-[360px] w-full overflow-hidden rounded-lg border">
      <Sidebar.Provider class="h-full">
        <Sidebar.Root v-model:open="open">
          <Sidebar.Content>
            <Sidebar.Group>
              <Sidebar.GroupContent>
                <Sidebar.Menu>
                  <Sidebar.MenuItem>
                    <Sidebar.MenuButton is-active>
                      <HomeIcon />
                      <span>Home</span>
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
            <span class="text-sm font-medium">Controlled sidebar</span>
          </header>
          <div class="flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground">
            Use v-model:open on Sidebar.Root or useSidebar() inside the tree.
          </div>
        </Sidebar.Inset>
      </Sidebar.Provider>
    </div>
  </div>
</template>
