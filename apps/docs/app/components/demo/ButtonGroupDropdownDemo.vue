<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { ButtonGroup } from "@vuzeno/registry/ui/button-group";
import { Menu } from "@vuzeno/registry/ui/menu";
import { AlertTriangleIcon, CheckIcon, ChevronDownIcon, CopyIcon, ShareIcon, Trash2Icon, UserRoundXIcon, VolumeOffIcon } from "lucide-vue-next";
</script>

<template>
  <ButtonGroup aria-label="Follow actions">
    <Button variant="outline">
      Follow
    </Button>
    <Menu.Root>
      <Menu.Trigger as-child>
        <Button variant="outline" size="icon" aria-label="More options">
          <ChevronDownIcon />
        </Button>
      </Menu.Trigger>

      <Menu.Content class="min-w-44">
        <Menu.ItemGroup>
          <Menu.Item value="mute">
            <VolumeOffIcon />
            Mute conversation
          </Menu.Item>
          <Menu.Item value="read">
            <CheckIcon />
            Mark as read
          </Menu.Item>
          <Menu.Item value="report">
            <AlertTriangleIcon />
            Report conversation
          </Menu.Item>
          <Menu.Item value="block">
            <UserRoundXIcon />
            Block user
          </Menu.Item>
          <Menu.Item value="share">
            <ShareIcon />
            Share conversation
          </Menu.Item>
          <Menu.Item value="copy">
            <CopyIcon />
            Copy conversation
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.Separator />
        <Menu.ItemGroup>
          <Menu.Item value="delete" variant="destructive">
            <Trash2Icon />
            Delete conversation
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.Content>
    </Menu.Root>
  </ButtonGroup>
</template>
