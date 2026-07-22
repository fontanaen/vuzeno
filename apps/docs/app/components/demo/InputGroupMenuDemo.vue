<script setup lang="ts">
import { InputGroup } from "@vuzeno/registry/ui/input-group";
import { Menu } from "@vuzeno/registry/ui/menu";
import { ChevronDownIcon, MoreHorizontalIcon } from "lucide-vue-next";
</script>

<template>
  <div class="grid w-full max-w-sm gap-6">
    <InputGroup.Root>
      <InputGroup.Input placeholder="Enter file name" />
      <InputGroup.Addon align="inline-end">
        <Menu.Root>
          <Menu.Trigger as-child>
            <InputGroup.Button variant="ghost" aria-label="More" size="icon-xs">
              <MoreHorizontalIcon />
            </InputGroup.Button>
          </Menu.Trigger>
          <Menu.Content>
            <Menu.ItemGroup>
              <Menu.Item value="settings">Settings</Menu.Item>
              <Menu.Item value="copy-path">Copy path</Menu.Item>
              <Menu.Item value="open-location">Open location</Menu.Item>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Root>
      </InputGroup.Addon>
    </InputGroup.Root>

    <InputGroup.Root>
      <InputGroup.Input placeholder="Enter search query" />
      <InputGroup.Addon align="inline-end">
        <Menu.Root>
          <Menu.Trigger as-child>
            <InputGroup.Button variant="ghost" class="pr-1.5! text-xs">
              Search In...
              <ChevronDownIcon class="size-3" />
            </InputGroup.Button>
          </Menu.Trigger>
          <Menu.Content>
            <Menu.ItemGroup>
              <Menu.Item value="documentation">Documentation</Menu.Item>
              <Menu.Item value="blog-posts">Blog Posts</Menu.Item>
              <Menu.Item value="changelog">Changelog</Menu.Item>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Root>
      </InputGroup.Addon>
    </InputGroup.Root>
  </div>
</template>
