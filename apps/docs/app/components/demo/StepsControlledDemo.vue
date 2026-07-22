<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Steps } from "@vuzeno/registry/ui/steps";
import { ref } from "vue";

const items = [
  { value: "first", title: "First", description: "Contact Info" },
  { value: "second", title: "Second", description: "Date & Time" },
  { value: "third", title: "Third", description: "Select Rooms" },
];

const currentStep = ref(0);
</script>

<template>
  <div class="flex flex-col w-full items-center gap-4">
    <output class="text-sm text-muted-foreground">current step: {{ currentStep + 1 }}</output>

    <Steps.Root v-model:step="currentStep" :count="items.length">
      <Steps.List class="flex-1">
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
        <Steps.PrevTrigger>
          <Button variant="outline" size="sm">Back</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <Button size="sm">Next</Button>
        </Steps.NextTrigger>
      </div>
    </Steps.Root>
  </div>
</template>
