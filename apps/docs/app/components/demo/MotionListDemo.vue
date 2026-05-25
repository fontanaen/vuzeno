<script setup lang="ts">
import { MotionList, MotionListItem } from "@vuzeno/registry/ui/motion-list";
import { Button } from "@vuzeno/ui/components/button";
import { Checkbox } from "@vuzeno/ui/components/checkbox";
import { Input } from "@vuzeno/ui/components/input";
import { PlusIcon, XIcon } from "lucide-vue-next";
import { ref } from "vue";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const todosOptions = ref<Todo[]>([
  { id: "t1", text: "Review pull requests", completed: false },
  { id: "t2", text: "Update documentation", completed: true },
  { id: "t3", text: "Fix responsive layout", completed: false },
  { id: "t4", text: "Add animations", completed: false },
  { id: "t5", text: "Write docs", completed: false },
  { id: "t6", text: "Polish styles", completed: false },
  { id: "t7", text: "Add tests", completed: false },
  { id: "t8", text: "Refactor code", completed: false },
  { id: "t9", text: "Improve performance", completed: false },
  { id: "t10", text: "Add features", completed: false },
]);

const todos = ref<Set<string>>(new Set(["t1", "t2", "t3"]));

const searchTerm = ref("");

const filteredTodos = computed(() => {
  const options = Array.from(todos.value).map((id) => todosOptions.value.find((todo) => todo.id === id)!);
  if (searchTerm.value.length === 0) {
    return options;
  }

  return options.filter((todo) => todo.text.toLowerCase().includes(searchTerm.value.toLowerCase()));
});

function addTodo() {
  for (const todo of todosOptions.value) {
    if (!todos.value.has(todo.id)) {
      todos.value.add(todo.id);
      break;
    }
  }
}

function removeTodo(id: string) {
  todos.value.delete(id);
}

function shuffle() {
  todos.value = new Set([...todos.value].sort(() => Math.random() - 0.5));
}
</script>

<template>
  <div class="w-full max-w-md mx-auto flex flex-col gap-3">
    <div class="flex gap-2">
      <Input
        v-model="searchTerm"
        placeholder="Search tasks..."
        class="flex-1"
      />
      <Button size="sm" @click="addTodo">
        Add random task
        <PlusIcon />
      </Button>
      <Button size="sm" variant="outline" @click="shuffle">
        Shuffle
      </Button>
    </div>

    <MotionList class="flex flex-col gap-2">
      <MotionListItem
        v-for="todo in filteredTodos"
        :key="todo.id"
        class="flex items-center justify-between gap-3 rounded-md border bg-background px-3 py-2 text-xs"
      >
        <div class="flex items-center gap-2">
          <Checkbox v-model="todo.completed" />
          <span :class="{ 'line-through text-muted-foreground': todo.completed }">{{ todo.text }}</span>
        </div>
        <Button
          variant="ghost"
          size="icon-sm"
          class="size-7"
          @click="removeTodo(todo.id)"
        >
          <XIcon class="size-3.5" />
        </Button>
      </MotionListItem>
    </MotionList>
  </div>
</template>
