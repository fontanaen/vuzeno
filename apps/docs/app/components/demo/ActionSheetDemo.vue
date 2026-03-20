<script setup lang="ts">
import { ActionSheet, ActionSheetCancel, ActionSheetContent, ActionSheetOption, ActionSheetOptionGroup, ActionSheetTrigger } from "@vuzeno/registry/ui/action-sheet";
import { Button } from "@vuzeno/ui/components/button";
import { toast } from "@vuzeno/ui/components/sonner";
import { ref, useTemplateRef } from "vue";

const isOpen = ref<boolean>(false);
const actionSheet = useTemplateRef<InstanceType<typeof ActionSheet>>("actionSheet");

async function openActionSheet() {
  const result = await actionSheet.value?.start<string>();

  if (!result) {
    return;
  }

  if (result?.cancelled) {
    toast(`Action sheet cancelled: ${result.cancelledReason}`);
  } else {
    toast(`Selected option: ${result.selectedOption}`);
  }
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <Button variant="outline" @click="openActionSheet()">
      Open with promise
    </Button>

    <ActionSheet v-model:open="isOpen" ref="actionSheet">
      <ActionSheetTrigger>
        <Button variant="outline">Open with trigger</Button>
      </ActionSheetTrigger>

      <ActionSheetContent>
        <ActionSheetOptionGroup>
          <ActionSheetOption value="option1">
            Option 1
          </ActionSheetOption>
          <ActionSheetOption value="option2">
            Option 2
          </ActionSheetOption>
          <ActionSheetOption value="option3">
            Option 3
          </ActionSheetOption>
          <ActionSheetOption value="option4">
            Option 4
          </ActionSheetOption>
        </ActionSheetOptionGroup>

        <ActionSheetOptionGroup>
          <ActionSheetOption value="more-a">
            More A
          </ActionSheetOption>
          <ActionSheetOption value="more-b">
            More B
          </ActionSheetOption>
        </ActionSheetOptionGroup>

        <ActionSheetCancel>Cancel</ActionSheetCancel>
      </ActionSheetContent>
    </ActionSheet>
  </div>
</template>
