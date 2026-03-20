<script setup lang="ts">
import { ActionSheet, ActionSheetCancel, ActionSheetContent, ActionSheetOption, ActionSheetOptionGroup, ActionSheetTrigger } from "@vuzeno/registry/ui/action-sheet";
import { Button } from "@vuzeno/ui/components/button";
import { toast } from "@vuzeno/ui/components/sonner";
import { ref, useTemplateRef } from "vue";

definePage({
  name: "components.action-sheet",
});

const isOpen = ref<boolean>(false);
const actionSheet = useTemplateRef<InstanceType<typeof ActionSheet>>("actionSheet");

async function openActionSheet() {
  const result = await actionSheet.value?.start<string>();

  if (!result) {
    return;
  }

  if (result?.cancelled) {
    toast.error(`Action sheet cancelled: ${result.cancelledReason}`);
  } else {
    toast.success(`Selected option: ${result.selectedOption}`);
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">

    <Button @click="openActionSheet()">Open Action Sheet #1</Button>
    <ActionSheet v-model:open="isOpen" ref="actionSheet">
      <ActionSheetTrigger>
        <Button>Open Action Sheet #2</Button>
      </ActionSheetTrigger>
      
      <ActionSheetContent>
        <ActionSheetOptionGroup>
          <ActionSheetOption value="option1">Option 1</ActionSheetOption>
          <ActionSheetOption value="option2">Option 2</ActionSheetOption>
          <ActionSheetOption value="option3">Option 3</ActionSheetOption>
          <ActionSheetOption value="option4">Option 4</ActionSheetOption>
        </ActionSheetOptionGroup>
          
        <ActionSheetCancel>Cancel</ActionSheetCancel>
      </ActionSheetContent>
    </ActionSheet>
  </div>
</template>