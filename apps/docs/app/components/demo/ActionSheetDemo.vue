<script setup lang="ts">
import { ActionSheet, useActionSheet } from "@vuzeno/registry/ui/action-sheet";
import { Button } from "@vuzeno/registry/ui/button";
import { createToaster, Toast } from "@vuzeno/registry/ui/toast";
import { ref } from "vue";

const open = ref(false);

const toaster = createToaster({
  placement: "bottom-end",
});

const actionSheet = useActionSheet({
  open,
  showOverlay: ref(true),
  closeOnClickOutside: ref(true),
});

async function openActionSheet() {
  const result = await actionSheet.show();

  if (!result) {
    return;
  }

  if (result.cancelled) {
    toaster.create({
      title: "Action cancelled",
      description: result.cancelledReason?.toString(),
      type: "error",
    });
  } else {
    toaster.create({
      title: `Option selected`,
      description: result.selectedOption?.toString(),
      type: "success",
      duration: 10000,
    });
  }
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
      <ActionSheet.Trigger>
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
          <X />
        </Toast.CloseTrigger>
      </Toast.Root>
    </Toast.Toaster>
  </div>
</template>