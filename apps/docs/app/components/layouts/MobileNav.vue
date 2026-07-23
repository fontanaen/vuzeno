<script setup lang="ts">
import { MenuIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Drawer } from "@vuzeno/registry/ui/drawer";

const { data } = await useNavigation();
const tree = computed(() => data.value!.find((i) => i.stem === "docs")!);

const open = ref(false);
</script>

<template>
  <Drawer.Root v-model:open="open" swipe-direction="start">
    <Drawer.Trigger as-child v-bind="$attrs">
      <Button variant="ghost" size="icon">
        <MenuIcon class="size-4" />
      </Button>
    </Drawer.Trigger>
    
    <Drawer.Content class="no-scrollbar h-full max-h-full max-w-[280px] flex-col gap-4 overflow-x-hidden px-4">
      <div v-for="item in tree.children" :key="item.title" class="flex flex-col gap-2">
        <div class="text-muted-foreground font-medium text-xs">
          {{ item.title }}
        </div>
        <div>
        <div class="flex flex-col gap-0.5">
          <template
            v-for="childItem in item?.children"
            :key="childItem.path"
          >
            <a
              v-if="childItem?.type === 'asset'"
              :href="childItem.path"
              class="py-1 px-2 text-sm rounded-sm"
              target="_blank"
              rel="noopener noreferrer"
              @click="open = false"
            >
              {{ childItem.title }}
            </a>
            <NuxtLink
              v-else
              active-class="bg-accent border-accent"
              :to="childItem?.path"
              class="py-1 px-2 text-sm rounded-sm"
              @click="open = false"
            >
              {{ childItem.title }}
            </NuxtLink>
          </template>
        </div>
        </div>
      </div>
    </Drawer.Content>
  </Drawer.Root>
</template>
