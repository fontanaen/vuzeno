<script setup lang="ts">
import { List, ListItem } from "@vuzeno/registry/ui/list";
import { ResizeMotion } from "@vuzeno/registry/ui/resize-motion";
import { Button } from "@vuzeno/ui/components/button";
import { Checkbox } from "@vuzeno/ui/components/checkbox";
import { Input } from "@vuzeno/ui/components/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@vuzeno/ui/components/select";
import { Tabs, TabsList, TabsTrigger } from "@vuzeno/ui/components/tabs";
import { PlusIcon, XIcon } from "lucide-vue-next";
import { computed, ref } from "vue";

type Filter = "all" | "active" | "completed";
type Sort = "newest" | "oldest" | "alpha";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
};

const todos = ref<Todo[]>([
  { id: "t1", text: "Review pull requests", completed: false, createdAt: Date.now() - 100000 },
  { id: "t2", text: "Update documentation", completed: true, createdAt: Date.now() - 200000 },
  { id: "t3", text: "Fix responsive layout", completed: false, createdAt: Date.now() - 50000 },
]);

const filter = ref<Filter>("all");
const sort = ref<Sort>("newest");
const newTodoText = ref("");

const nextId = ref(4);

function addTodo() {
  const text = newTodoText.value.trim();
  if (!text) return;

  todos.value.push({
    id: `t${nextId.value++}`,
    text,
    completed: false,
    createdAt: Date.now(),
  });
  newTodoText.value = "";
}

function removeTodo(id: string) {
  todos.value = todos.value.filter((todo) => todo.id !== id);
}

function toggleTodo(id: string) {
  const todo = todos.value.find((t) => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
}

const filteredAndSortedTodos = computed(() => {
  let result = todos.value;

  if (filter.value === "active") {
    result = result.filter((t) => !t.completed);
  } else if (filter.value === "completed") {
    result = result.filter((t) => t.completed);
  }

  if (sort.value === "newest") {
    result = [...result].sort((a, b) => b.createdAt - a.createdAt);
  } else if (sort.value === "oldest") {
    result = [...result].sort((a, b) => a.createdAt - b.createdAt);
  } else if (sort.value === "alpha") {
    result = [...result].sort((a, b) => a.text.localeCompare(b.text));
  }

  return result;
});

const activeCount = computed(() => todos.value.filter((t) => !t.completed).length);
</script>

<template>
  <div class="w-full max-w-md mx-auto flex flex-col gap-4">
    <div class="flex gap-2">
      <Input
        v-model="newTodoText"
        placeholder="Add new task..."
        class="flex-1"
        @keyup.enter="addTodo"
      />
      <Button size="icon-sm" @click="addTodo" :disabled="!newTodoText.trim()">
        <PlusIcon />
      </Button>
    </div>

    <div class="flex items-center justify-between text-sm">
      <Tabs v-model="filter" class="flex gap-1">
        <TabsList>
          <TabsTrigger value="all" class="text-xs">
            All
          </TabsTrigger>
          <TabsTrigger value="active" class="text-xs">
            Active ({{ activeCount }})
          </TabsTrigger>
          <TabsTrigger value="completed" class="text-xs">
            Completed
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Select
        v-model="sort"
      >
        <SelectTrigger class="w-28 h-7 rounded-md border bg-background px-2 text-xs text-muted-foreground">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="oldest">Oldest</SelectItem>
          <SelectItem value="alpha">A–Z</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div class="grid">
      <div class="rounded-md border border-border p-2">
        <ResizeMotion viewport-overflow="visible">
          <List variant="muted" size="sm" class="gap-2">
            <ListItem
              v-for="todo in filteredAndSortedTodos"
              :key="todo.id"
              class="flex items-center justify-between gap-3 text-xs"
            >
              <div class="flex items-center gap-2">
                <Checkbox v-model="todo.completed" @change="toggleTodo(todo.id)" />
                {{ todo.text }}
              </div>
              <Button
                variant="ghost"
                size="icon-sm"
                class="size-7"
                @click="removeTodo(todo.id)"
                >
                <XIcon class="size-3.5" />
              </Button>
            </ListItem>
          </List>
        </ResizeMotion>
      </div>
    </div>

    <div v-if="filteredAndSortedTodos.length === 0" class="text-center text-sm text-muted-foreground py-4">
      No tasks found.
    </div>
  </div>
</template>
