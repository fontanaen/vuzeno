<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { ProgressLinear } from "@vuzeno/registry/ui/progress-linear";
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
      <ProgressLinear.Root
        :model-value="api.percent"
        class="max-w-none w-full grid-cols-1"
      >
        <ProgressLinear.Track />
      </ProgressLinear.Root>
    </Steps.Context>

    <Steps.List>
      <Steps.Item v-for="(item, index) in items" :key="index" :index="index">
        <Steps.Trigger class="items-center gap-2 text-center">
          <Steps.Indicator>{{ index + 1 }}</Steps.Indicator>
          <span>{{ item.title }}</span>
        </Steps.Trigger>
      </Steps.Item>
    </Steps.List>

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
