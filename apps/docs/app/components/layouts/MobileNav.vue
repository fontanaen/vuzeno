<script setup lang="ts">
import { Button } from "@vuzeno/ui/components/button";
import { Sheet, SheetContent, SheetTrigger } from "@vuzeno/ui/components/sheet";
import { MenuIcon } from "lucide-vue-next";

const { data } = await useNavigation();
const tree = computed(() => data.value!.find((i) => i.stem === "docs")!);

const open = ref(false);
</script>

<template>
  <Sheet v-model:open="open">
    <SheetTrigger as-child v-bind="$attrs">
      <Button variant="ghost" size="icon">
        <MenuIcon class="size-4" />
      </Button>
    </SheetTrigger>
    
    <SheetContent side="left" class="no-scrollbar overflow-x-hidden px-4 flex flex-col gap-4">
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
            <NuxtLink active-class="bg-accent border-accent" :to="childItem?.path" class="py-1 px-2 text-sm rounded-sm" @click="open = false">
              {{ childItem.title }}
            </NuxtLink>
          </template>
        </div>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>