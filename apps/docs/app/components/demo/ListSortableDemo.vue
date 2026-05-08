<script setup lang="ts">
import { List, ListItem, ListItemContent, ListItemDescription, ListItemDragHandle, ListItemMedia, ListItemTitle, type ListReorderEvent } from "@vuzeno/registry/ui/list";
import { Badge } from "@vuzeno/ui/components/badge";
import { CircleCheckIcon, CircleDashedIcon, CircleDotIcon } from "lucide-vue-next";
import { ref } from "vue";

type Task = {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
};

const tasks = ref<Task[]>([
  { id: "task-1", title: "Design API", description: "Define props and slots", status: "done" },
  { id: "task-2", title: "Wire sortable", description: "Integrate dnd-kit", status: "in-progress" },
  { id: "task-3", title: "Add animations", description: "Insert/remove transitions", status: "in-progress" },
  { id: "task-4", title: "Write docs", description: "Cover all examples", status: "todo" },
  { id: "task-5", title: "Polish styles", description: "Drag handle, focus rings", status: "todo" },
]);

function onReorder(event: ListReorderEvent) {
  const next = [...tasks.value];
  const [removed] = next.splice(event.from, 1);

  if (!removed) {
    return;
  }

  next.splice(event.to, 0, removed);
  tasks.value = next;
}

const statusConfig = {
  done: { icon: CircleCheckIcon, label: "Done", class: "text-emerald-500" },
  "in-progress": { icon: CircleDotIcon, label: "In progress", class: "text-amber-500" },
  todo: { icon: CircleDashedIcon, label: "Todo", class: "text-muted-foreground" },
};
</script>

<template>
  <div class="w-full max-w-md">
    <List variant="outline" sortable class="gap-2" @reorder="onReorder">
      <ListItem v-for="(task, index) in tasks" :id="task.id" :key="task.id" :index="index">
        <ListItemDragHandle />
        <ListItemMedia variant="icon">
          <component :is="statusConfig[task.status].icon" :class="statusConfig[task.status].class" />
        </ListItemMedia>
        <ListItemContent>
          <ListItemTitle>{{ task.title }}</ListItemTitle>
          <ListItemDescription>{{ task.description }}</ListItemDescription>
        </ListItemContent>
        <Badge variant="secondary">{{ statusConfig[task.status].label }}</Badge>
      </ListItem>
    </List>
  </div>
</template>
