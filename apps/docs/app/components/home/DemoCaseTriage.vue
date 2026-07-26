<script setup lang="ts">
import { CircleDashedIcon, SearchIcon, SignalHighIcon, TagIcon, UserIcon } from "@lucide/vue";
import { Avatar } from "@vuzeno/registry/ui/avatar";
import { Badge } from "@vuzeno/registry/ui/badge";
import { Button } from "@vuzeno/registry/ui/button";
import type { Filter, FilterValue } from "@vuzeno/registry/ui/filters";
import { Field, Filters, Operator } from "@vuzeno/registry/ui/filters";
import { computed, type Ref, ref } from "vue";

const assignees = {
  ada: { name: "Ada", initials: "AL" },
  grace: { name: "Grace", initials: "GH" },
  linus: { name: "Linus", initials: "LT" },
} as const;

type Issue = {
  id: string;
  title: string;
  status: "open" | "progress" | "done";
  priority: "low" | "medium" | "high";
  assignee: keyof typeof assignees;
};

const issues: Issue[] = [
  { id: "VZ-241", title: "Autocomplete loses focus on Escape", status: "open", priority: "high", assignee: "ada" },
  { id: "VZ-238", title: "Date picker skips a month on RTL", status: "progress", priority: "high", assignee: "grace" },
  { id: "VZ-233", title: "Filters chip truncates long labels", status: "open", priority: "medium", assignee: "linus" },
  { id: "VZ-227", title: "Phone field rejects +33 6 numbers", status: "progress", priority: "medium", assignee: "ada" },
  { id: "VZ-219", title: "Kbd group misaligns inside input", status: "done", priority: "low", assignee: "grace" },
  { id: "VZ-204", title: "Skeleton flashes on fast connections", status: "done", priority: "low", assignee: "linus" },
];

const statusLabels = {
  open: "Open",
  progress: "In progress",
  done: "Done",
} as const;

const statusDotClasses = {
  open: "bg-muted-foreground",
  progress: "bg-amber-500",
  done: "bg-green-500",
} as const;

const priorityVariants = {
  high: "destructive",
  medium: "secondary",
  low: "outline",
} as const;

const fields = ref([
  Field.TextField({
    key: "title",
    label: "Title",
    icon: SearchIcon,
    operators: [Operator.Contain({ label: "contains" })],
  }),
  Field.TextField({
    key: "status",
    label: "Status",
    icon: CircleDashedIcon,
    operators: [
      Operator.In({
        label: "any of",
        options: {
          items: [
            { label: "Open", value: "open" },
            { label: "In progress", value: "progress" },
            { label: "Done", value: "done" },
          ],
        },
      }),
    ],
  }),
  Field.TextField({
    key: "priority",
    label: "Priority",
    icon: SignalHighIcon,
    operators: [
      Operator.In({
        label: "any of",
        options: {
          items: [
            { label: "High", value: "high" },
            { label: "Medium", value: "medium" },
            { label: "Low", value: "low" },
          ],
        },
      }),
    ],
  }),
  Field.TextField({
    key: "assignee",
    label: "Assignee",
    icon: UserIcon,
    operators: [
      Operator.Eq({
        label: "is",
        inputType: "select",
        options: {
          items: [
            { label: "Ada", value: "ada" },
            { label: "Grace", value: "grace" },
            { label: "Linus", value: "linus" },
          ],
        },
      }),
    ],
  }),
]);

const filters: Ref<Filter[]> = ref([{ field: "status", operator: "in", value: ["open", "progress"] }]);

const matchers: Record<string, (issue: Issue, value: FilterValue) => boolean> = {
  title: (issue, value) => typeof value !== "string" || issue.title.toLowerCase().includes(value.toLowerCase()),
  status: (issue, value) => !Array.isArray(value) || value.length === 0 || value.includes(issue.status),
  priority: (issue, value) => !Array.isArray(value) || value.length === 0 || value.includes(issue.priority),
  assignee: (issue, value) => typeof value !== "string" || value === "" || issue.assignee === value,
};

function matchesFilters(issue: Issue) {
  return filters.value.every((filter) => matchers[filter.field]?.(issue, filter.value) ?? true);
}

function clearFilters() {
  filters.value = [];
}

const visibleIssues = computed(() => issues.filter(matchesFilters));
</script>

<template>
  <div class="flex flex-col gap-3">
    <Filters.Provider v-model:filters="filters" :fields="fields" variant="outline" size="sm">
      <div class="flex flex-wrap items-center gap-2">
        <Filters.Menu>
          <Filters.MenuTrigger />
          <Filters.MenuContent />
        </Filters.Menu>

        <Filters.Group filter-style="short">
          <Filters.Item
            v-for="filter in filters"
            :key="`${filter.field}:${filter.operator}`"
            :filter="filter"
          />
        </Filters.Group>

        <Filters.Clear />
      </div>
    </Filters.Provider>

    <ul v-if="visibleIssues.length" class="divide-y divide-border overflow-hidden rounded-lg border border-border">
      <li
        v-for="issue in visibleIssues"
        :key="issue.id"
        class="flex items-center gap-2.5 bg-muted/40 px-3 py-2.5"
      >
        <span class="size-2 shrink-0 rounded-full" :class="statusDotClasses[issue.status]" />
        <span class="sr-only">{{ statusLabels[issue.status] }}</span>

        <span class="shrink-0 font-mono text-xs text-muted-foreground">{{ issue.id }}</span>

        <span class="min-w-0 flex-1 truncate text-sm text-foreground">{{ issue.title }}</span>

        <Badge :variant="priorityVariants[issue.priority]">
          {{ issue.priority }}
        </Badge>

        <Avatar.Root size="sm" :title="assignees[issue.assignee].name">
          <Avatar.Fallback>{{ assignees[issue.assignee].initials }}</Avatar.Fallback>
        </Avatar.Root>
      </li>
    </ul>

    <div v-else class="flex flex-col items-center gap-3 rounded-lg border border-dashed border-border px-3 py-8 text-center">
      <TagIcon class="size-5 text-muted-foreground" />
      <div class="space-y-1">
        <p class="text-sm font-medium text-foreground">No issues match</p>
        <p class="text-xs text-muted-foreground">Loosen a filter to bring results back.</p>
      </div>
      <Button variant="outline" size="sm" @click="clearFilters">
        Clear filters
      </Button>
    </div>

    <p class="text-xs text-muted-foreground">
      Showing {{ visibleIssues.length }} of {{ issues.length }} issues
      <template v-if="filters.length">
        · {{ filters.length }} {{ filters.length === 1 ? "filter" : "filters" }} applied
      </template>
    </p>
  </div>
</template>
