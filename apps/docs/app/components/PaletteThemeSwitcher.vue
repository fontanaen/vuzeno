<script setup lang="ts">
import type { Color } from "@ark-ui/vue/color-picker";
import { PaletteIcon, RotateCcwIcon, XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { ColorPicker } from "@vuzeno/registry/ui/color-picker";
import { Drawer } from "@vuzeno/registry/ui/drawer";
import { SegmentGroup } from "@vuzeno/registry/ui/segment-group";
import { cssColorToPickerColor, pickerColorToCss } from "~/lib/theme/color";
import { type AppThemeId, appThemes, type EditableTokenKey, editableTokens } from "~/lib/themes";

const { theme, setTheme, resolvedTokens, setToken, resetOverrides, hasOverrides } = useAppTheme();

const colorTokens = editableTokens.filter((token) => token.group === "color");

const radiusOptions = [
  { value: "0", label: "None" },
  { value: "0.375rem", label: "SM" },
  { value: "0.5rem", label: "MD" },
  { value: "0.625rem", label: "LG" },
] as const;

function onThemeChange(themeId: AppThemeId) {
  setTheme(themeId);
}

function onColorChange(key: EditableTokenKey, color: Color) {
  setToken(key, pickerColorToCss(color));
}

function matchRadiusOption(current: string) {
  const exact = radiusOptions.find((option) => option.value === current);

  if (exact) {
    return exact.value;
  }

  const currentValue = Number.parseFloat(current);

  if (!Number.isFinite(currentValue)) {
    return radiusOptions[0].value;
  }

  let closest = radiusOptions[0];
  let closestDistance = Number.POSITIVE_INFINITY;

  for (const option of radiusOptions) {
    const distance = Math.abs(Number.parseFloat(option.value) - currentValue);

    if (distance < closestDistance) {
      closest = option;
      closestDistance = distance;
    }
  }

  return closest.value;
}

const selectedRadius = computed(() => matchRadiusOption(resolvedTokens.value.radius));

function onRadiusChange(value: string | null) {
  if (!value) {
    return;
  }

  setToken("radius", value);
}
</script>

<template>
  <Drawer.Root swipe-direction="end" lazy-mount unmount-on-exit>
    <Drawer.Trigger as-child>
      <Button
        variant="ghost"
        size="icon"
        class="group/toggle extend-touch-target size-8"
        title="Customize theme"
      >
        <PaletteIcon class="size-4.5" />
        <span class="sr-only">Customize theme</span>
      </Button>
    </Drawer.Trigger>

    <Drawer.Content
      class="no-scrollbar h-full max-h-full w-full max-w-80 flex-col gap-0 overflow-hidden p-0 data-[swipe-direction=right]:rounded-l-xl data-[swipe-direction=right]:rounded-r-none"
    >
      <div class="flex shrink-0 items-start justify-between gap-3 border-b border-border px-4 py-4">
        <div class="min-w-0 flex flex-col gap-0">
          <Drawer.Title>Theme</Drawer.Title>
          <Drawer.Description>Presets and live overrides</Drawer.Description>
        </div>
        <div class="flex shrink-0 items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            class="h-7 gap-1.5 px-2 text-xs"
            :disabled="!hasOverrides"
            @click="resetOverrides"
          >
            <RotateCcwIcon class="size-3.5" />
            Reset
          </Button>
          <Drawer.CloseTrigger class="static top-auto right-auto size-7">
            <XIcon />
          </Drawer.CloseTrigger>
        </div>
      </div>

      <div class="min-h-0 flex-1 space-y-8 overflow-y-auto p-4">
        <section class="space-y-2">
          <p class="text-muted-foreground text-xs font-medium tracking-wide uppercase">Presets</p>
          <div class="grid grid-cols-1 gap-1">
            <button
              v-for="appTheme in appThemes"
              :key="appTheme.id"
              type="button"
              class="hover:bg-accent flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors"
              :class="theme === appTheme.id ? 'bg-accent text-accent-foreground' : ''"
              @click="onThemeChange(appTheme.id)"
            >
              <span
                class="size-3 shrink-0 rounded-full border border-border"
                :style="{ backgroundColor: appTheme.primary }"
              />
              <span class="flex-1">{{ appTheme.label }}</span>
              <span
                v-if="theme === appTheme.id"
                class="bg-primary size-1.5 rounded-full"
              />
            </button>
          </div>
        </section>

        <section class="space-y-2">
          <p class="text-muted-foreground text-xs font-medium tracking-wide uppercase">Colors</p>
          <div class="space-y-1.5">
            <div
              v-for="token in colorTokens"
              :key="token.key"
              class="flex items-center justify-between gap-3"
            >
              <span class="text-sm">{{ token.label }}</span>
              <ColorPicker.Root
                :model-value="cssColorToPickerColor(resolvedTokens[token.key])"
                @value-change="(details) => onColorChange(token.key, details.value)"
              >
                <ColorPicker.Control class="gap-1.5">
                  <ColorPicker.ChannelInput
                    channel="hex"
                    class="h-7 w-24 px-2 font-mono text-xs uppercase"
                  />
                  <ColorPicker.Trigger
                    class="border-border size-7 shrink-0 overflow-hidden rounded-md border shadow-xs"
                  >
                    <ColorPicker.ValueSwatch class="size-full" />
                  </ColorPicker.Trigger>
                </ColorPicker.Control>
                <ColorPicker.Content>
                  <ColorPicker.Area>
                    <ColorPicker.AreaBackground />
                    <ColorPicker.AreaThumb />
                  </ColorPicker.Area>
                  <ColorPicker.ChannelSlider channel="hue">
                    <ColorPicker.ChannelSliderTrack />
                    <ColorPicker.ChannelSliderThumb />
                  </ColorPicker.ChannelSlider>
                </ColorPicker.Content>
              </ColorPicker.Root>
            </div>
          </div>
        </section>

        <section class="space-y-2">
          <div class="flex items-center justify-between gap-2">
            <p class="text-muted-foreground text-xs font-medium tracking-wide uppercase">Radius</p>
            <span class="text-muted-foreground font-mono text-xs">{{ selectedRadius }}</span>
          </div>
          <SegmentGroup.Root
            class="w-full"
            :model-value="selectedRadius"
            @update:model-value="onRadiusChange"
          >
            <SegmentGroup.Indicator />
            <SegmentGroup.Item
              v-for="option in radiusOptions"
              :key="option.value"
              :value="option.value"
              class="px-2"
            >
              <SegmentGroup.ItemText>{{ option.label }}</SegmentGroup.ItemText>
            </SegmentGroup.Item>
          </SegmentGroup.Root>
        </section>
      </div>
    </Drawer.Content>
  </Drawer.Root>
</template>
