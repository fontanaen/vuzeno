<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { ActionSheet, useActionSheet } from "@vuzeno/registry/ui/action-sheet";
import { Button } from "@vuzeno/registry/ui/button";
import { createToaster, Toast } from "@vuzeno/registry/ui/toast";

const toaster = createToaster({
  placement: "bottom-end",
});

const actionSheet = useActionSheet({
  showOverlay: true,
  closeOnClickOutside: true,
});

async function openActionSheet() {
  const result = await actionSheet.value.show();

  if (result.cancelled) {
    toaster.create({
      title: "Action cancelled",
      description: result.cancelledReason.toString(),
      type: "error",
    });
    return;
  }

  toaster.create({
    title: "Option selected",
    description: result.selectedOption?.toString(),
    type: "success",
    duration: 10000,
  });
}
</script>

<template>
  <div class="flex items-center gap-2">
    <Button variant="outline" size="sm" @click="openActionSheet">
      Open with Provider
    </Button>

    <ActionSheet.Provider :value="actionSheet">
      <ActionSheet.Content>
        <ActionSheet.Group>
          <ActionSheet.Item value="option1">Option 1</ActionSheet.Item>
          <ActionSheet.Item value="option2">Option 2</ActionSheet.Item>
          <ActionSheet.Item value="option3">Option 3</ActionSheet.Item>
          <ActionSheet.Item value="option4">Option 4</ActionSheet.Item>
        </ActionSheet.Group>

        <ActionSheet.Group>
          <ActionSheet.Item value="more-a">More A</ActionSheet.Item>
          <ActionSheet.Item value="more-b">More B</ActionSheet.Item>
        </ActionSheet.Group>

        <ActionSheet.Cancel>Cancel</ActionSheet.Cancel>
      </ActionSheet.Content>
    </ActionSheet.Provider>

    <ActionSheet.Root>
      <ActionSheet.Trigger as-child>
        <Button variant="outline" size="sm">
          Open with trigger
        </Button>
      </ActionSheet.Trigger>

      <ActionSheet.Content>
        <ActionSheet.Group>
          <ActionSheet.Item value="option1">Option 1</ActionSheet.Item>
          <ActionSheet.Item value="option2">Option 2</ActionSheet.Item>
          <ActionSheet.Item value="option3">Option 3</ActionSheet.Item>
          <ActionSheet.Item value="option4">Option 4</ActionSheet.Item>
        </ActionSheet.Group>

        <ActionSheet.Group>
          <ActionSheet.Item value="more-a">More A</ActionSheet.Item>
          <ActionSheet.Item value="more-b">More B</ActionSheet.Item>
        </ActionSheet.Group>

        <ActionSheet.Cancel>Cancel</ActionSheet.Cancel>
      </ActionSheet.Content>
    </ActionSheet.Root>

    <Toast.Toaster v-slot="toast" :toaster="toaster">
      <Toast.Root>
        <Toast.Indicator />
        <Toast.Title>{{ toast.title }}</Toast.Title>
        <Toast.Description>{{ toast.description }}</Toast.Description>
        <Toast.CloseTrigger>
          <XIcon />
        </Toast.CloseTrigger>
      </Toast.Root>
    </Toast.Toaster>
  </div>
</template>
