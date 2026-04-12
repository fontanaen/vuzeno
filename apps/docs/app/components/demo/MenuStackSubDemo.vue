<script setup lang="ts">
import { MenuStack, MenuStackContent, MenuStackGroup, MenuStackItem, MenuStackSub, MenuStackSubContent, MenuStackSubTrigger, MenuStackTrigger } from "@vuzeno/registry/ui/menu-stack";
import { Button } from "@vuzeno/ui/components/button";
import { ChevronRightIcon, FolderIcon, HomeIcon, SettingsIcon, UserIcon } from "lucide-vue-next";
</script>

<template>
  <MenuStack>
    <MenuStackTrigger>
      <Button variant="outline">
        Open menu
      </Button>
    </MenuStackTrigger>

    <MenuStackContent>
      <MenuStackGroup>
        <MenuStackItem>
          <HomeIcon class="size-4" />
          Home
        </MenuStackItem>

        <MenuStackSub>
          <MenuStackSubTrigger>
            <FolderIcon class="size-4" />
            Projects
          </MenuStackSubTrigger>

          <MenuStackSubContent>
            <MenuStackGroup>
              <MenuStackItem>
                <ChevronRightIcon class="size-4" />
                Web app
              </MenuStackItem>
              <MenuStackItem>
                <ChevronRightIcon class="size-4" />
                Mobile
              </MenuStackItem>
              <MenuStackItem>
                <ChevronRightIcon class="size-4" />
                Design system
              </MenuStackItem>
            </MenuStackGroup>
          </MenuStackSubContent>
        </MenuStackSub>

        <MenuStackItem>
          <UserIcon class="size-4" />
          Account
        </MenuStackItem>

        <MenuStackItem>
          <SettingsIcon class="size-4" />
          Settings
        </MenuStackItem>
      </MenuStackGroup>
    </MenuStackContent>
  </MenuStack>
</template>
