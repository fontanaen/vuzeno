<script setup lang="ts">
import { List, ListItem, ListItemActions, ListItemContent, ListItemDescription, ListItemTitle } from "@vuzeno/registry/ui/list";
import { Button } from "@vuzeno/ui/components/button";
import { XIcon } from "lucide-vue-next";
import { ref } from "vue";

type Tag = {
  id: string;
  label: string;
  color: string;
};

const palette = [
  { label: "Frontend", color: "bg-sky-500/15 text-sky-600 ring-sky-500/30" },
  { label: "Backend", color: "bg-emerald-500/15 text-emerald-600 ring-emerald-500/30" },
  { label: "Design", color: "bg-violet-500/15 text-violet-600 ring-violet-500/30" },
  { label: "Docs", color: "bg-amber-500/15 text-amber-600 ring-amber-500/30" },
  { label: "Bug", color: "bg-rose-500/15 text-rose-600 ring-rose-500/30" },
];

const tags = ref<Tag[]>([
  { id: "1", ...palette[0]! },
  { id: "2", ...palette[1]! },
]);

let nextId = tags.value.length + 1;

function addTag() {
  const next = palette[(nextId - 1) % palette.length];

  if (!next) {
    return;
  }

  tags.value.push({ id: `${nextId++}`, ...next });
}

function removeTag(id: string) {
  tags.value = tags.value.filter((tag) => tag.id !== id);
}
</script>

<template>
  <div class="w-full max-w-sm flex flex-col gap-3">
    <List
      variant="outline"
      class="gap-2"
      :transition="{
        enterFromClass: 'opacity-0 scale-95',
        enterActiveClass: 'transition-[opacity,transform] duration-300 ease-out',
        leaveActiveClass: 'transition-[opacity,transform] duration-200 ease-in absolute w-full',
        leaveToClass: 'opacity-0 scale-95',
        moveClass: 'transition-transform duration-300 ease-out',
      }"
    >
      <ListItem v-for="tag in tags" :key="tag.id">
        <ListItemContent>
          <ListItemTitle class="flex items-center gap-2">
            <span :class="['inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset', tag.color]">
              {{ tag.label }}
            </span>
          </ListItemTitle>
          <ListItemDescription>Tag #{{ tag.id }}</ListItemDescription>
        </ListItemContent>
        <ListItemActions>
          <Button variant="ghost" size="icon" aria-label="Remove" @click="removeTag(tag.id)">
            <XIcon class="size-4" />
          </Button>
        </ListItemActions>
      </ListItem>
    </List>

    <Button variant="outline" @click="addTag">Add tag</Button>
  </div>
</template>
