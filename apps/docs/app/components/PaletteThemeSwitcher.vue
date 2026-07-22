<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Menu } from "@vuzeno/registry/ui/menu";
import { PaletteIcon } from "lucide-vue-next";
import { type AppThemeId, appThemes } from "~/lib/themes";

const { theme, setTheme } = useAppTheme();

function onThemeChange(value: string) {
  setTheme(value as AppThemeId);
}
</script>

<template>
  <Menu.Root :positioning="{ placement: 'bottom-end' }">
    <Menu.Trigger as-child>
      <Button
        variant="ghost"
        size="icon"
        class="group/toggle extend-touch-target size-8"
        title="Select theme"
      >
        <PaletteIcon class="size-4.5" />
        <span class="sr-only">Select theme</span>
      </Button>
    </Menu.Trigger>
    <Menu.Content class="w-40">
      <Menu.ItemGroup>
        <Menu.ItemGroupLabel>Theme</Menu.ItemGroupLabel>
        <Menu.RadioItemGroup :model-value="theme" @update:model-value="onThemeChange">
          <Menu.RadioItem
            v-for="appTheme in appThemes"
            :key="appTheme.id"
            :value="appTheme.id"
            class="gap-2"
          >
            <span
              class="size-3 shrink-0 rounded-full border border-border"
              :style="{ backgroundColor: appTheme.primary }"
            />
            <Menu.ItemText>{{ appTheme.label }}</Menu.ItemText>
          </Menu.RadioItem>
        </Menu.RadioItemGroup>
      </Menu.ItemGroup>
    </Menu.Content>
  </Menu.Root>
</template>
