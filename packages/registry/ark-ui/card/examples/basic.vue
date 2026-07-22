<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Card } from "@vuzeno/registry/ui/card";
import { ClockIcon, GitBranchIcon, TimerIcon } from "lucide-vue-next";

const data = [
  { icon: ClockIcon, label: "Last deployment", value: "2 min ago" },
  { icon: GitBranchIcon, label: "Branch", value: "main" },
  { icon: TimerIcon, label: "Duration", value: "42s" },
];
</script>

<template>
  <Card.Root class="w-[350px]">
    <Card.Header>
      <Card.Title>Marketing-site</Card.Title>
      <Card.Description>Production environment</Card.Description>
    </Card.Header>
    <Card.Content class="grid gap-2 text-sm">
      <div v-for="item in data" :key="item.label" class="flex items-center justify-between">
        <span class="flex items-center gap-2 text-muted-foreground">
          <component :is="item.icon" class="size-3.5" />
          {{ item.label }}
        </span>
        <span>{{ item.value }}</span>
      </div>
      <Button class="w-full mt-2">Redeploy</Button>
    </Card.Content>
    <Card.Footer class="gap-1.5">
      <div class="size-2 shrink-0 rounded-full bg-green-500" />
      <div class="text-xs flex justify-between w-full">
        <span class="font-medium">Deployed</span>
        <span class="text-muted-foreground">2 min ago</span>
      </div>

    </Card.Footer>
  </Card.Root>
</template>
