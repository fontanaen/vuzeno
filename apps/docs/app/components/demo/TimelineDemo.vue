<script setup lang="ts">
import { Timeline, TimelineContent, TimelineItem, TimelineMedia } from "@vuzeno/registry/ui/timeline";
import { Avatar, AvatarFallback, AvatarImage } from "@vuzeno/ui/components/avatar";
import { CircleCheckIcon, CircleDotIcon, GitMergeIcon, GitPullRequestIcon, TagIcon } from "lucide-vue-next";

type User = {
  username: string;
  avatar: string;
};

function initials(username: string) {
  return username.slice(0, 2).toUpperCase();
}

const me: User = { username: "zeno", avatar: "https://github.com/fontanaen.png" };
const shadcn: User = { username: "shadcn", avatar: "https://github.com/shadcn.png" };

type Entry =
  | { id: string; kind: "opened"; user: User; timestamp: string }
  | { id: string; kind: "comment"; user: User; body: string; timestamp: string }
  | { id: string; kind: "labeled"; user: User; label: string; labelClass: string; timestamp: string }
  | { id: string; kind: "linked"; user: User; pr: { number: number; title: string }; timestamp: string }
  | { id: string; kind: "merged"; user: User; pr: { number: number; branch: string }; timestamp: string }
  | { id: string; kind: "closed"; user: User; timestamp: string };

const entries: Entry[] = [
  { id: "opened", kind: "opened", user: shadcn, timestamp: "3 days ago" },
  {
    id: "comment-1",
    kind: "comment",
    user: shadcn,
    body: "Would love a composable Timeline component — something close to the shadcn-vue style, built on reka-ui primitives, supporting both vertical and horizontal layouts.",
    timestamp: "3 days ago",
  },
  {
    id: "labeled",
    kind: "labeled",
    user: me,
    label: "enhancement",
    labelClass: "bg-sky-500/15 text-sky-600 ring-sky-500/30 dark:text-sky-400",
    timestamp: "2 days ago",
  },
  {
    id: "linked",
    kind: "linked",
    user: me,
    pr: { number: 42, title: "feat(registry): add Timeline" },
    timestamp: "yesterday",
  },
  {
    id: "comment-2",
    kind: "comment",
    user: me,
    body: "Opened #42 with the initial primitives. Let me know if the API feels right before I wire up the docs.",
    timestamp: "yesterday",
  },
  {
    id: "merged",
    kind: "merged",
    user: shadcn,
    pr: { number: 42, branch: "main" },
    timestamp: "2h ago",
  },
  { id: "closed", kind: "closed", user: shadcn, timestamp: "2h ago" },
];
</script>

<template>
  <Timeline class="w-full max-w-xl">
    <TimelineItem
      v-for="(entry, index) in entries"
      :key="entry.id"
      class="animate-in fade-in slide-in-from-left-4 fill-mode-both duration-500"
      :style="{ animationDelay: `${index * 90}ms` }"
    >
      <template v-if="entry.kind === 'comment'">
        <TimelineMedia variant="icon">
          <Avatar class="size-full">
            <AvatarImage :src="entry.user.avatar" :alt="entry.user.username" />
            <AvatarFallback>{{ initials(entry.user.username) }}</AvatarFallback>
          </Avatar>
        </TimelineMedia>
        <TimelineContent>
          <div class="overflow-hidden rounded-md border bg-card">
            <div class="flex items-center justify-between gap-2 border-b bg-muted/40 px-3 py-2 text-sm">
              <div>
                <span class="font-semibold text-foreground">{{ entry.user.username }}</span>
                <span class="text-muted-foreground"> commented</span>
              </div>
              <span class="text-xs text-muted-foreground">{{ entry.timestamp }}</span>
            </div>
            <p class="px-3 py-2 text-sm leading-relaxed">{{ entry.body }}</p>
          </div>
        </TimelineContent>
      </template>

      <template v-else>
        <TimelineMedia variant="icon">
          <CircleDotIcon v-if="entry.kind === 'opened'" class="size-4 text-emerald-500" />
          <TagIcon v-else-if="entry.kind === 'labeled'" class="size-4" />
          <GitPullRequestIcon v-else-if="entry.kind === 'linked'" class="size-4 text-emerald-500" />
          <GitMergeIcon v-else-if="entry.kind === 'merged'" class="size-4 text-violet-500" />
          <CircleCheckIcon v-else-if="entry.kind === 'closed'" class="size-4 text-violet-500" />
        </TimelineMedia>
        <TimelineContent>
          <div class="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 pt-1.5 text-sm text-muted-foreground">
            <Avatar class="size-5 text-[10px]">
              <AvatarImage :src="entry.user.avatar" :alt="entry.user.username" />
              <AvatarFallback>{{ initials(entry.user.username) }}</AvatarFallback>
            </Avatar>
            <span class="font-semibold text-foreground">{{ entry.user.username }}</span>

            <template v-if="entry.kind === 'opened'">
              <span>opened this issue</span>
            </template>
            
            <template v-if="entry.kind === 'labeled'">
              <span>added the</span>
              <span
                :class="[
                  'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset',
                  entry.labelClass,
                ]"
              >{{ entry.label }}</span>
              <span>label</span>
            </template>

            <template v-if="entry.kind === 'linked'">
              <span>linked a pull request</span>
              <a href="#" class="font-medium text-foreground hover:underline">#{{ entry.pr.number }}</a>
              <span class="text-foreground">{{ entry.pr.title }}</span>
            </template>

            <template v-if="entry.kind === 'merged'">
              <span>merged pull request</span>
              <a href="#" class="font-medium text-foreground hover:underline">#{{ entry.pr.number }}</a>
              <span>into</span>
              <code class="rounded bg-muted px-1 py-0.5 text-xs text-foreground">{{ entry.pr.branch }}</code>
            </template>

            <template v-if="entry.kind === 'closed'">
              <span>closed this as completed</span>
            </template>

            <span aria-hidden="true">·</span>
            <span>{{ entry.timestamp }}</span>
          </div>
        </TimelineContent>
      </template>
    </TimelineItem>
  </Timeline>
</template>
