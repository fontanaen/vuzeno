<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Progress } from "@vuzeno/registry/ui/progress-circular";
import { Steps } from "@vuzeno/registry/ui/steps";

const items = [
  { value: "first", title: "First", description: "Contact Info" },
  { value: "second", title: "Second", description: "Date & Time" },
  { value: "third", title: "Third", description: "Select Rooms" },
];
</script>

<template>
  <Steps.Root :count="items.length">
    <Steps.Context v-slot="api">
      <div class="flex items-center gap-4">
        <Progress.Root
          :model-value="Math.min(api.value, api.count)"
          :max="api.count"
          class="w-auto gap-0"
        >
          <Progress.CircleContainer>
            <Progress.Circle>
              <Progress.CircleTrack />
              <Progress.CircleRange />
            </Progress.Circle>
            <span class="absolute text-xs font-medium tabular-nums text-foreground">
              {{ Math.min(api.value, api.count) }}/{{ api.count }}
            </span>
          </Progress.CircleContainer>
        </Progress.Root>

        <div class="flex min-w-0 flex-col gap-0.5">
          <template v-if="api.value < api.count">
            <span class="text-sm font-medium text-foreground">
              {{ items[api.value]?.title }}
            </span>
            <span class="text-sm text-muted-foreground">
              {{ items[api.value]?.description }}
            </span>
          </template>
          <template v-else>
            <span class="text-sm font-medium text-foreground">Completed</span>
            <span class="text-sm text-muted-foreground">All steps are done</span>
          </template>
        </div>
      </div>
    </Steps.Context>

    <Steps.Content
      v-for="(item, index) in items"
      :key="index"
      :index="index"
      class="rounded-md border border-border p-4"
    >
      {{ item.title }} - {{ item.description }}
    </Steps.Content>

    <Steps.CompletedContent class="rounded-md border border-border p-4">
      Steps Complete - Thank you for filling out the form!
    </Steps.CompletedContent>

    <div class="flex justify-end gap-2">
      <Steps.PrevTrigger as-child>
        <Button variant="outline">Back</Button>
      </Steps.PrevTrigger>
      <Steps.NextTrigger as-child>
        <Button>Next</Button>
      </Steps.NextTrigger>
    </div>
  </Steps.Root>
</template>
