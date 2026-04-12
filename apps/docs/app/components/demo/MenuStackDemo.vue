<script setup lang="ts">
import { MenuStack, MenuStackContent, MenuStackGroup, MenuStackItem, MenuStackSub, MenuStackSubContent, MenuStackSubTrigger, MenuStackTrigger } from "@vuzeno/registry/ui/menu-stack";
import { Button } from "@vuzeno/ui/components/button";
import { toast } from "@vuzeno/ui/components/sonner";
import { EllipsisIcon, HeartIcon, ListMusicIcon, ListPlusIcon, PlusCircleIcon, Share2Icon } from "lucide-vue-next";

function onShare() {
  toast("Shared");
}
</script>

<template>
  <MenuStack>
    <MenuStackTrigger>
      <Button variant="outline" size="icon">
        <EllipsisIcon class="size-4" />
      </Button>
    </MenuStackTrigger>

    <MenuStackContent>
      <MenuStackGroup>
        <MenuStackItem>
          <PlusCircleIcon class="size-4" />
          Add to queue
        </MenuStackItem>

        <MenuStackItem>
          <HeartIcon class="size-4" />
          Save to Liked Songs
        </MenuStackItem>

        <MenuStackSub>
          <MenuStackSubTrigger>
            <ListPlusIcon class="size-4" />
            Add to playlist
          </MenuStackSubTrigger>

          <MenuStackSubContent>
            <MenuStackGroup>
              <MenuStackItem @click="toast('Chill Vibes')">
                <ListMusicIcon class="size-4" />
                Chill Vibes
              </MenuStackItem>
              <MenuStackItem @click="toast('Late Night')">
                <ListMusicIcon class="size-4" />
                Late Night
              </MenuStackItem>
              <MenuStackItem>
                <PlusCircleIcon class="size-4" />
                New playlist
              </MenuStackItem>
            </MenuStackGroup>
          </MenuStackSubContent>
        </MenuStackSub>

        <MenuStackItem @click="onShare">
          <Share2Icon class="size-4" />
          Share
        </MenuStackItem>
      </MenuStackGroup>
    </MenuStackContent>
  </MenuStack>
</template>
