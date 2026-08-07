<script setup lang="ts">
import { Breadcrumb } from "@vuzeno/registry/ui/breadcrumb";
import { Button } from "@vuzeno/registry/ui/button";
import { Menu } from "@vuzeno/registry/ui/menu";
</script>

<template>
  <Breadcrumb.Root>
    <Breadcrumb.List>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/">
          Home
        </Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Menu.Root>
          <Menu.Trigger as-child>
            <Button variant="ghost" size="icon-xs">
              <Breadcrumb.Ellipsis />
            </Button>
          </Menu.Trigger>
          <Menu.Content align="start">
            <Menu.Item value="documentation">
              Documentation
            </Menu.Item>
            <Menu.Item value="themes">
              Themes
            </Menu.Item>
            <Menu.Item value="github">
              GitHub
            </Menu.Item>
          </Menu.Content>
        </Menu.Root>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb.Root>
</template>
