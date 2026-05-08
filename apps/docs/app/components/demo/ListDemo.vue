<script setup lang="ts">
import { List, ListItem, ListItemActions, ListItemContent, ListItemDescription, ListItemMedia, ListItemTitle } from "@vuzeno/registry/ui/list";
import { Avatar, AvatarFallback, AvatarImage } from "@vuzeno/ui/components/avatar";
import { Button } from "@vuzeno/ui/components/button";
import { XIcon } from "lucide-vue-next";
import { ref } from "vue";

type Member = {
  id: string;
  name: string;
  role: string;
  avatar: string;
};

const members = ref<Member[]>([
  { id: "1", name: "Ada Lovelace", role: "Engineer", avatar: "https://i.pravatar.cc/80?img=47" },
  { id: "2", name: "Grace Hopper", role: "Designer", avatar: "https://i.pravatar.cc/80?img=32" },
  { id: "3", name: "Alan Turing", role: "Researcher", avatar: "https://i.pravatar.cc/80?img=12" },
]);

let nextId = members.value.length + 1;

const candidates: Member[] = [
  { id: "candidate-1", name: "Linus Torvalds", role: "Maintainer", avatar: "https://i.pravatar.cc/80?img=8" },
  { id: "candidate-2", name: "Margaret Hamilton", role: "Architect", avatar: "https://i.pravatar.cc/80?img=22" },
  { id: "candidate-3", name: "Edsger Dijkstra", role: "Researcher", avatar: "https://i.pravatar.cc/80?img=5" },
  { id: "candidate-4", name: "Barbara Liskov", role: "Engineer", avatar: "https://i.pravatar.cc/80?img=29" },
];

function addMember() {
  const candidate = candidates[(nextId - 1) % candidates.length];

  if (!candidate) {
    return;
  }

  if (nextId % 2 === 0) {
    members.value.unshift({ ...candidate, id: `m-${nextId++}` });
  } else {
    members.value.push({ ...candidate, id: `m-${nextId++}` });
  }
}

function removeMember(id: string) {
  members.value = members.value.filter((member) => member.id !== id);
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
</script>

<template>
  <div class="w-full max-w-md flex flex-col gap-3">
    <List variant="muted" class="gap-2 border border-border rounded-md">
      <li v-for="(member, index) in members" :key="member.id" :data-index="index" class="flex items-center gap-4 p-4">
        <ListItemMedia variant="image">
          <Avatar>
            <AvatarImage :src="member.avatar" :alt="member.name" />
            <AvatarFallback>{{ initials(member.name) }}</AvatarFallback>
          </Avatar>
        </ListItemMedia>
        <ListItemContent>
          <ListItemTitle>{{ member.name }}</ListItemTitle>
          <ListItemDescription>{{ member.role }}</ListItemDescription>
        </ListItemContent>
        <ListItemActions>
          <Button variant="ghost" size="icon-sm" class="size-7" aria-label="Remove" @click="removeMember(member.id)">
            <XIcon />
          </Button>
        </ListItemActions>
      </li>
    </List>

    <Button variant="outline" @click="addMember">Add member</Button>
  </div>
</template>