<script setup lang="ts">
import { ChevronDownIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Menu } from "@vuzeno/registry/ui/menu";
</script>

<template>
  <Menu.Root>
    <Menu.Trigger as-child>
      <Button variant="outline" size="sm">
        Help
        <Menu.Indicator>
          <ChevronDownIcon />
        </Menu.Indicator>
      </Button>
    </Menu.Trigger>
    <Menu.Content>
        <Menu.Item value="docs" as-child>
          <a href="https://ark-ui.com">Documentation</a>
        </Menu.Item>
        <Menu.Item value="github" as-child>
          <a href="https://github.com/chakra-ui/ark">GitHub</a>
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item value="changelog" as-child>
          <a href="https://github.com/chakra-ui/ark/releases">Changelog</a>
        </Menu.Item>
    </Menu.Content>
  </Menu.Root>
</template>
