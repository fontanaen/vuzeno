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
  <Steps.Root :count="items.length" orientation="vertical">
    <Steps.List>
      <Steps.Item v-for="(item, index) in items" :key="index" :index="index">
        <Steps.Trigger>
          <Steps.Indicator>{{ index + 1 }}</Steps.Indicator>
          <span>{{ item.title }}</span>
        </Steps.Trigger>
        <Steps.Separator />
      </Steps.Item>
    </Steps.List>

    <Steps.Content v-for="(item, index) in items" :key="index" :index="index">
      <div class="flex flex-col gap-4">
        <span>{{ item.title }} - {{ item.description }}</span>
        <div class="flex justify-end gap-2">
          <Steps.PrevTrigger as-child>
            <Button variant="outline">Back</Button>
          </Steps.PrevTrigger>
          <Steps.NextTrigger as-child>
            <Button>Next</Button>
          </Steps.NextTrigger>
        </div>
      </div>
    </Steps.Content>

    <Steps.CompletedContent>
      <div class="flex flex-col gap-4">
        <span>Steps Complete - Thank you for filling out the form!</span>
        <Steps.PrevTrigger as-child>
          <Button variant="outline">Back</Button>
        </Steps.PrevTrigger>
      </div>
    </Steps.CompletedContent>
  </Steps.Root>
</template>
