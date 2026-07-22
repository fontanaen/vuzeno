<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
import { useDialogCaller, useDialogCallerContext } from "@vuzeno/registry/ui/dialog-caller";
import { Textarea } from "@vuzeno/registry/ui/textarea";
import { computed, ref, watch } from "vue";
import DialogCallerUnsavedConfirmDialog from "./DialogCallerUnsavedConfirmDialog.vue";

const props = defineProps<{
  initialContent?: string;
}>();

const call = useDialogCallerContext();
const confirmDialog = useDialogCaller(DialogCallerUnsavedConfirmDialog, {
  exitDuration: 200,
  resultShape: "cancelled",
});

const content = ref(props.initialContent ?? "");
const open = computed(() => call.phase.value === "open");
const isDirty = computed(() => content.value !== (props.initialContent ?? ""));

watch(
  () => props.initialContent,
  (value) => {
    content.value = value ?? "";
  },
);

async function handleDismiss() {
  if (!isDirty.value) {
    call.reject("unchanged");
    return;
  }

  const confirm = await confirmDialog.call({});

  if (confirm.cancelled) {
    return;
  }

  call.reject("discard");
}

function onOpenChange(details: { open: boolean }) {
  if (!details.open && call.phase.value === "open") {
    handleDismiss();
  }
}
</script>

<template>
  <Dialog.Root :open="open" @open-change="onOpenChange">
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Edit note</Dialog.Title>
        <Dialog.Description>
          Make changes, then cancel to stack a confirmation dialog on top.
        </Dialog.Description>
      </Dialog.Header>

      <Dialog.Body>
        <Textarea v-model="content" placeholder="Write something..." :rows="4" />
      </Dialog.Body>
      
      <Dialog.Footer class="justify-end">
        <Button variant="outline" size="sm" @click="handleDismiss">
          Cancel
        </Button>
        <Button size="sm" @click="call.resolve(content)">
          Save
        </Button>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Root>
</template>
