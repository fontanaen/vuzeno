<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
import { Menu } from "@vuzeno/registry/ui/menu";
import { ChevronDownIcon, XIcon } from "lucide-vue-next";
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger as-child>
      <Button variant="outline" size="sm">Open Dialog</Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Title>Settings</Dialog.Title>
      <Dialog.Description>Configure your preferences below.</Dialog.Description>
      <Dialog.CloseTrigger as-child>
        <Button variant="outline" size="sm">
          <XIcon />
        </Button>
      </Dialog.CloseTrigger>
      <Dialog.Body>
        <Menu.Root lazy-mount unmount-on-exit>
          <Menu.Trigger as-child>
            <Button variant="outline" size="sm">
              Select theme
              <Menu.Indicator>
                <ChevronDownIcon />
              </Menu.Indicator>
            </Button>
          </Menu.Trigger>
          <Menu.Content>
            <Menu.Arrow>
              <Menu.ArrowTip />
            </Menu.Arrow>
            <Menu.Item value="light">Light</Menu.Item>
            <Menu.Item value="dark">Dark</Menu.Item>
            <Menu.Item value="system">System</Menu.Item>
          </Menu.Content>
        </Menu.Root>
      </Dialog.Body>
    </Dialog.Content>
  </Dialog.Root>
</template>
