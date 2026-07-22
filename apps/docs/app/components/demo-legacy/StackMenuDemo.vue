<script setup lang="ts">
import { StackMenu, StackMenuContent, StackMenuGroup, StackMenuItem, StackMenuSub, StackMenuSubContent, StackMenuSubTrigger, StackMenuTrigger } from "@vuzeno/registry/legacy/stack-menu";
import { Button } from "@vuzeno/registry/ui/button";
import { createToaster, Toast } from "@vuzeno/registry/ui/toast";
import { EllipsisIcon, HeartIcon, ListMusicIcon, ListPlusIcon, PlusCircleIcon, Share2Icon } from "lucide-vue-next";

const toast = createToaster({
  placement: "top-end",
  duration: 3000,
});

function onShare() {
  toast.success({
    title: "Shared",
  });
}
</script>

<template>
  <StackMenu>
    <StackMenuTrigger>
      <Button variant="outline" size="icon">
        <EllipsisIcon class="size-4" />
      </Button>
    </StackMenuTrigger>

    <StackMenuContent>
      <StackMenuGroup>
        <StackMenuItem>
          <PlusCircleIcon class="size-4" />
          Add to queue
        </StackMenuItem>

        <StackMenuItem>
          <HeartIcon class="size-4" />
          Save to Liked Songs
        </StackMenuItem>

        <StackMenuSub>
          <StackMenuSubTrigger>
            <ListPlusIcon class="size-4" />
            Add to playlist
          </StackMenuSubTrigger>

          <StackMenuSubContent>
            <StackMenuGroup>
              <StackMenuItem @click="toast.success({ title: 'Chill Vibes' })">
                <ListMusicIcon class="size-4" />
                Chill Vibes
              </StackMenuItem>
              <StackMenuItem @click="toast.success({ title: 'Late Night' })">
                <ListMusicIcon class="size-4" />
                Late Night
              </StackMenuItem>
              <StackMenuItem>
                <PlusCircleIcon class="size-4" />
                New playlist
              </StackMenuItem>
            </StackMenuGroup>
          </StackMenuSubContent>
        </StackMenuSub>

        <StackMenuItem @click="onShare">
          <Share2Icon class="size-4" />
          Share
        </StackMenuItem>
      </StackMenuGroup>
    </StackMenuContent>
  </StackMenu>
</template>
