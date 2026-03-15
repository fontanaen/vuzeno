<script setup lang="ts">
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@vuzeno/ui/components/command";
import { Dialog, DialogContent, DialogTrigger } from "@vuzeno/ui/components/dialog";
import { Kbd, KbdGroup } from "@vuzeno/ui/components/kbd";
import { Label } from "@vuzeno/ui/components/label";
import { SearchIcon } from "lucide-vue-next";
import { useIsMac } from "~/composables/use-is-mac";

const isMac = useIsMac();

const { data } = await useAsyncData("navigation", async () => queryCollectionNavigation("content"));

const navigation = computed(() => {
  return {
    root: data.value?.find((i) => i.stem === "docs")!.children!,
    components: data.value?.find((i) => i.stem === "docs")!.children!.find((i) => i.stem === "docs/components")!.children!,
  };
});
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <div class="hidden md:flex items-center gap-2 border border-input rounded-md h-8 px-2">
        <div class="w-20 flex gap-2 items-center text-sm text-muted-foreground">
          <SearchIcon class="size-4" />
          Search
        </div>
        
        <KbdGroup>
          <Kbd v-if="isMac">⌘</Kbd>
          <Kbd v-else>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>
    </DialogTrigger>

    <DialogContent class="top-30 p-0 border-2 border-accent translate-y-0" :show-close-button="false">
      <Command class="bg-muted/50 p-2">
        <div class="border-2 border-input bg-background rounded-md h-10">
          <CommandInput placeholder="Search" class="h-9" />
        </div>
        <CommandList v-if="navigation">
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup class="flex flex-col mt-2 mb-4">
            <Label class="text-xs font-medium mb-2 text-muted-foreground">Get Started</Label>
            <CommandItem v-for="file in navigation?.root" :key="file.path" :value="file.path">
              {{ file.title }}
            </CommandItem>
          </CommandGroup>

          <CommandGroup class="flex flex-col">
            <Label class="text-xs font-medium mb-2 text-muted-foreground">Components</Label>
            <CommandItem v-for="file in navigation?.components" :key="file.path" :value="file.path" class="text-sm font-medium">
              {{ file.title }}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </DialogContent>
  </Dialog>
</template>