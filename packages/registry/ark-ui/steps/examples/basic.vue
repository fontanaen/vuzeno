<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Steps } from "@vuzeno/registry/ui/steps";

const items = [
  { value: "first", title: "First", description: "Contact Info" },
  { value: "second", title: "Second", description: "Date & Time" },
  { value: "third", title: "Third", description: "Select Rooms" },
];
</script>

<template>
  <Steps.Root :count="items.length">
    <Steps.List>
      <Steps.Item v-for="(item, index) in items" :key="index" :index="index">
        <Steps.Trigger>
          <Steps.Indicator>{{ index + 1 }}</Steps.Indicator>
          <span>{{ item.title }}</span>
        </Steps.Trigger>
        <Steps.Separator />
      </Steps.Item>
    </Steps.List>

    <Steps.Content v-for="(item, index) in items" :key="index" :index="index" class="border border-border rounded-md p-4">
      {{ item.title }} - {{ item.description }}
    </Steps.Content>

    <Steps.CompletedContent>
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
