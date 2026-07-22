<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { useDialogCaller } from "@vuzeno/registry/ui/dialog-caller";
import { createToaster } from "@vuzeno/registry/ui/toast";
import { Typography } from "@vuzeno/registry/ui/typography";
import DialogCallerFormDialog from "./form-dialog.vue";

const toaster = createToaster({
  placement: "top-end",
  duration: 2000,
});

const formDialog = useDialogCaller(DialogCallerFormDialog, {
  exitDuration: 200,
  resultShape: "cancelled",
});

async function openFormDialog() {
  const result = await formDialog.call({ initialContent: "Draft content" });

  if (result.cancelled) {
    if (result.reason === "discard") {
      toaster.create({
        title: "Changes discarded",
      });
    }

    return;
  }

  toaster.create({
    title: "Saved",
    description: `Saved: ${result.data}`,
  });
}
</script>

<template>
  <div class="flex max-w-md flex-col gap-3">
    <Typography.Muted>
      Edit the note, then cancel. The confirmation dialog opens on top while the form stays mounted in the stack.
    </Typography.Muted>

    <Button variant="outline" size="sm" class="w-fit" @click="openFormDialog">
      Open form
    </Button>
  </div>
</template>
