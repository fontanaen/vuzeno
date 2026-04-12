<script setup lang="ts">
import { StackMenu, StackMenuContent, StackMenuGroup, StackMenuItem, StackMenuSub, StackMenuSubContent, StackMenuSubTrigger, StackMenuTrigger } from "@vuzeno/registry/ui/stack-menu";
import { Button } from "@vuzeno/ui/components/button";
import { BanIcon, DiscIcon, EllipsisIcon, HeartIcon, ListMusicIcon, ListPlusIcon, MicVocalIcon, PlayIcon, PlusCircleIcon, RadioIcon, Share2Icon, ShuffleIcon, UserIcon } from "lucide-vue-next";
import { toast } from "vue-sonner";

definePage({
  name: "components.menu",
});

const album = {
  title: "Menu Stack",
  artist: "Zeno",
  year: 2026,
  cover: "https://github.com/fontanaen.png",
};

const tracks = [
  { number: 1, title: "Menu Stack", duration: "3:42", plays: "12,453,891" },
  { number: 2, title: "Menu Stack Trigger", duration: "4:18", plays: "8,921,004" },
  { number: 3, title: "Menu Stack Content", duration: "3:55", plays: "15,302,776" },
  { number: 4, title: "Menu Stack Group", duration: "5:02", plays: "6,104,332" },
  { number: 5, title: "Menu Stack Item", duration: "3:29", plays: "9,712,558" },
  { number: 6, title: "Menu Stack Sub", duration: "4:37", plays: "11,088,210" },
  { number: 7, title: "Menu Stack Sub Trigger", duration: "3:51", plays: "4,556,901" },
  { number: 8, title: "Menu Stack Sub Content", duration: "4:12", plays: "7,233,119" },
];

const playlists = [{ name: "Chill Vibes" }, { name: "Late Night" }, { name: "Workout Mix" }];

function addToPlaylist(playlist: string) {
  toast("Added to playlist: " + playlist);
}
</script>

<template>
  <div class="max-w-sm mx-auto pb-24 pt-16 px-2">
    <!-- Album Header -->
    <div class="flex flex-col items-center text-center mb-6">
      <img
        :src="album.cover"
        :alt="album.title"
        class="size-72 rounded-xl shadow-2xl object-cover mb-4"
      />
      <h1 class="text-xl font-bold tracking-tight">{{ album.title }}</h1>
      <p class="text-sm text-muted-foreground mt-0.5">
        {{ album.artist }} &middot; {{ album.year }}
      </p>
    </div>

    <!-- Action Bar -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-3">
        <Button variant="ghost" size="icon">
          <HeartIcon class="size-5!" />
        </Button>
        <Button variant="ghost" size="icon">
          <ShuffleIcon class="size-5!" />
        </Button>
      </div>

      <Button size="icon-lg" class="rounded-full bg-green-500 hover:bg-green-400 text-black">
        <PlayIcon class="size-5! ml-0.5" />
      </Button>
    </div>

    <div class="flex flex-col">
      <div
        v-for="track in tracks"
        :key="track.number"
        class="flex items-center gap-3 py-3"
      >
        <div class="flex flex-col min-w-0 flex-1">
          <span class="text-sm font-medium truncate">{{ track.title }}</span>
          <span class="text-xs text-muted-foreground truncate">{{ album.artist }}</span>
        </div>

        <StackMenu>
          <StackMenuTrigger>
            <Button variant="ghost" size="icon-sm">
              <EllipsisIcon class="size-4!" />
            </Button>
          </StackMenuTrigger>

          <StackMenuContent>
            <StackMenuGroup>
              <StackMenuItem>
                <PlusCircleIcon /> Add to queue
              </StackMenuItem>

              <StackMenuItem>
                <HeartIcon /> Save to Liked Songs
              </StackMenuItem>

              <StackMenuItem>
                <UserIcon /> Go to artist
              </StackMenuItem>

              <StackMenuItem>
                <DiscIcon /> Go to album
              </StackMenuItem>

              <StackMenuSub>
                <StackMenuSubTrigger>
                  <ListPlusIcon class="size-4" /> Add to playlist
                </StackMenuSubTrigger>

                <StackMenuSubContent>
                  <StackMenuGroup>
                    <StackMenuItem v-for="playlist in playlists" :key="playlist.name" @click="addToPlaylist(playlist.name)">
                      <ListMusicIcon /> {{ playlist.name }}
                    </StackMenuItem>
                    
                    <StackMenuItem>
                      <PlusCircleIcon /> New playlist
                    </StackMenuItem>
                  </StackMenuGroup>
                </StackMenuSubContent>
              </StackMenuSub>

              <StackMenuItem>
                <RadioIcon /> Go to song radio
              </StackMenuItem>

              <StackMenuItem>
                <MicVocalIcon /> Show lyrics
              </StackMenuItem>

              <StackMenuItem>
                <Share2Icon /> Share
              </StackMenuItem>

              <StackMenuItem>
                <BanIcon /> Hide song
              </StackMenuItem>
            </StackMenuGroup>
          </StackMenuContent>
        </StackMenu>
      </div>
    </div>
  </div>
</template>
