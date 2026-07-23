<script setup lang="ts">
import { Listbox, useListCollection } from "@ark-ui/vue";
import { SearchIcon } from "@lucide/vue";
import { useHotkey } from "@tanstack/vue-hotkeys";
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
import { Kbd, KbdGroup } from "@vuzeno/ui/components/kbd";
import { useIsMac } from "~/composables/use-is-mac";

const open = ref(false);

const isMac = useIsMac();

const { data } = await useNavigation();

const items = computed(() => {
  const docs = data.value?.[0];
  const overview = docs?.children?.find((item) => item.title === "Overview");
  const components = docs?.children?.find((item) => item.title === "Components");

  return [
    ...(overview?.children ?? [])
      .filter((file) => file.stem !== "llms.txt")
      .map((file) => ({
        label: file.title,
        value: file.path,
        href: file.path,
        group: "Overview",
      })),
    ...(components?.children ?? []).map((file) => ({
      label: file.title,
      value: file.path,
      href: file.path,
      group: "Components",
    })),
  ];
});

const { collection, filter } = useListCollection({
  initialItems: items.value,
  groupBy: (item) => item.group,
  filter: (itemText, filterText) => itemText.toLowerCase().includes(filterText.toLowerCase()),
});

useHotkey("Mod+K", () => {
  open.value = true;
});
</script>

<template>
  <Dialog.Root v-model:open="open">
    <Dialog.Trigger as-child>
      <div class="hidden md:flex items-center gap-2 bg-input dark:bg-input/30 border border-input rounded-md h-8 px-2">
        <div class="w-40 flex gap-2 items-center text-sm text-muted-foreground">
          <SearchIcon class="size-4" />
          Search
        </div>
        
        <KbdGroup>
          <Kbd v-if="isMac">⌘</Kbd>
          <Kbd v-else>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>
    </Dialog.Trigger>

    <Dialog.Content class="top-0 p-0 border-2 border-accent translate-y-0 data-[state=open]:slide-in-from-bottom-1/3" :show-close-button="false">
      <Listbox.Root :collection="collection" class="w-full">
        <div class="p-2">
          <div class="flex items-center gap-2 border-2 border-input dark:bg-input/30 rounded-md h-10">
            <SearchIcon class="ml-2 size-4 text-muted-foreground" />
            <Listbox.Input
              placeholder="Search"
              class="text-sm outline-none focus:ring-0 focus:ring-offset-0 focus:border-input"
              @input="(e: Event) => filter((e.target as HTMLInputElement).value)"
            />
          </div>
        </div>
        
        <Listbox.Content class="max-h-80 overflow-y-auto px-2 pb-2 outline-none">
          <Listbox.Empty>No results found.</Listbox.Empty>
          <Listbox.ItemGroup
            v-for="[group, groupItems] in collection.group()"
            class="pb-4"
            :key="group"
          >
            <Listbox.ItemGroupLabel class="text-xs text-muted-foreground pl-4 pt-2 pb-2">{{ group }}</Listbox.ItemGroupLabel>
            <Listbox.Item
              v-for="item in groupItems"
              :key="item.value"
              :item="item"
              as-child
            >
              <Button variant="ghost" class="w-full justify-start">
                <NuxtLink class="w-full text-left" :to="item.href" @click="open = false">
                  <Listbox.ItemText class="text-sm font-normal">{{ item.label }}</Listbox.ItemText>
                </NuxtLink>
              </Button>
            </Listbox.Item>
          </Listbox.ItemGroup>
        </Listbox.Content>
      </Listbox.Root>
    </Dialog.Content>
  </Dialog.Root>
</template>
