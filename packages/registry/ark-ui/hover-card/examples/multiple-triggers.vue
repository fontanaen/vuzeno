<script setup lang="ts">
import { HoverCard } from "@vuzeno/registry/ui/hover-card";
import { ref } from "vue";

type Profile = {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
};

const profiles: Profile[] = [
  {
    id: "sarah",
    name: "Sarah Chen",
    username: "@sarah_chen",
    avatar: "https://i.pravatar.cc/300?u=sarah",
    bio: "Design Engineer at Acme Inc. Building beautiful interfaces.",
  },
  {
    id: "alex",
    name: "Alex Rivera",
    username: "@alex_r",
    avatar: "https://i.pravatar.cc/300?u=alex",
    bio: "Full-stack developer and open source contributor.",
  },
  {
    id: "jordan",
    name: "Jordan Lee",
    username: "@jordan_lee",
    avatar: "https://i.pravatar.cc/300?u=jordan",
    bio: "DevOps lead. Automating all the things.",
  },
];

const activeProfile = ref<Profile | null>(null);
</script>

<template>
  <HoverCard.Root @trigger-value-change="(event) => (activeProfile = profiles.find((profile) => profile.id === event.value) ?? null)">
    <p class="max-w-lg text-sm leading-7 text-foreground">
      Reviewed by
      <HoverCard.Trigger value="sarah" as-child>
        <a href="#">@sarah_chen</a>
      </HoverCard.Trigger>
      ,
      <HoverCard.Trigger value="alex" as-child>
        <a href="#">@alex_r</a>
      </HoverCard.Trigger>
      , and
      <HoverCard.Trigger value="jordan" as-child>
        <a href="#">@jordan_lee</a>
      </HoverCard.Trigger>
    </p>
    <Teleport to="body">
      <HoverCard.Positioner>
        <HoverCard.Content>
          <HoverCard.Arrow>
            <HoverCard.ArrowTip />
          </HoverCard.Arrow>
          <div v-if="activeProfile" class="flex flex-col gap-3">
            <div class="flex items-start justify-between gap-3">
              <img
                class="size-16 rounded-full object-cover"
                :src="activeProfile.avatar"
                :alt="activeProfile.name"
              >
            </div>
            <div>
              <p class="m-0 text-[15px] font-bold leading-tight text-foreground">
                {{ activeProfile.name }}
              </p>
              <p class="m-0 text-sm text-muted-foreground">
                {{ activeProfile.username }}
              </p>
            </div>
            <p class="m-0 text-sm leading-snug text-foreground">
              {{ activeProfile.bio }}
            </p>
          </div>
        </HoverCard.Content>
      </HoverCard.Positioner>
    </Teleport>
  </HoverCard.Root>
</template>
