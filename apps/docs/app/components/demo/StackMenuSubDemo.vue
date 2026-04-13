<script setup lang="ts">
import { StackMenu, StackMenuContent, StackMenuGroup, StackMenuItem, StackMenuSub, StackMenuSubContent, StackMenuSubTrigger, StackMenuTrigger } from "@vuzeno/registry/ui/stack-menu";
import { Button } from "@vuzeno/ui/components/button";
import { ChevronRightIcon, FolderIcon, HomeIcon, SettingsIcon, UserIcon } from "lucide-vue-next";
</script>

<template>
  <StackMenu>
    <StackMenuTrigger>
      <Button variant="outline">
        Open menu
      </Button>
    </StackMenuTrigger>

    <StackMenuContent>
      <StackMenuGroup>
        <StackMenuItem>
          <HomeIcon class="size-4" />
          Home
        </StackMenuItem>

        <StackMenuSub>
          <StackMenuSubTrigger>
            <FolderIcon class="size-4" />
            Projects
          </StackMenuSubTrigger>

          <StackMenuSubContent>
            <StackMenuGroup>
              <StackMenuItem>
                <ChevronRightIcon class="size-4" />
                Web app
              </StackMenuItem>
              <StackMenuItem>
                <ChevronRightIcon class="size-4" />
                Mobile
              </StackMenuItem>
              <StackMenuItem>
                <ChevronRightIcon class="size-4" />
                Design system
              </StackMenuItem>
            </StackMenuGroup>
          </StackMenuSubContent>
        </StackMenuSub>

        <StackMenuItem>
          <UserIcon class="size-4" />
          Account
        </StackMenuItem>

        <StackMenuItem>
          <SettingsIcon class="size-4" />
          Settings
        </StackMenuItem>
      </StackMenuGroup>
    </StackMenuContent>
  </StackMenu>
</template>
