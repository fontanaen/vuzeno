<script setup lang="ts">
import { Trash2Icon } from "@lucide/vue";
import { Badge } from "@vuzeno/registry/ui/badge";
import { Button } from "@vuzeno/registry/ui/button";
import { useDialogCaller } from "@vuzeno/registry/ui/dialog-caller";
import { Table } from "@vuzeno/registry/ui/table";
import { createToaster } from "@vuzeno/registry/ui/toast";
import { ref } from "vue";
import DialogCallerDeleteConfirmDialog from "./delete-confirm-dialog.vue";

type DocumentRow = {
  id: string;
  name: string;
  status: "Draft" | "Published";
  updatedAt: string;
};

const documents = ref<DocumentRow[]>([
  { id: "1", name: "Project brief", status: "Published", updatedAt: "Jul 8, 2026" },
  { id: "2", name: "Design specs", status: "Draft", updatedAt: "Jul 10, 2026" },
  { id: "3", name: "Release notes", status: "Published", updatedAt: "Jul 11, 2026" },
]);

const toaster = createToaster({
  placement: "top-end",
  duration: 2000,
});

const deleteDialog = useDialogCaller<{ name: string }, boolean>(DialogCallerDeleteConfirmDialog, {
  exitDuration: 200,
  resultShape: "cancelled",
});

async function onDelete(document: DocumentRow) {
  const result = await deleteDialog.call({ name: document.name });

  if (result.cancelled) {
    toaster.create({
      title: "Delete cancelled",
      description: result.reason ? `: ${result.reason}` : "",
    });
    return;
  }

  documents.value = documents.value.filter((row) => row.id !== document.id);

  toaster.create({
    title: "Deleted",
    description: `"${document.name}"`,
  });
}
</script>

<template>
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.Head>Document</Table.Head>
        <Table.Head>Status</Table.Head>
        <Table.Head>Updated</Table.Head>
        <Table.Head class="text-right">
          Actions
        </Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row v-for="document in documents" :key="document.id">
        <Table.Cell class="font-medium">
          {{ document.name }}
        </Table.Cell>
        <Table.Cell>
          <Badge :variant="document.status === 'Published' ? 'default' : 'secondary'">
            {{ document.status }}
          </Badge>
        </Table.Cell>
        <Table.Cell class="text-muted-foreground">
          {{ document.updatedAt }}
        </Table.Cell>
        <Table.Cell class="text-right">
          <Button variant="destructive" size="icon" @click="onDelete(document)">
            <Trash2Icon class="size-4" />
          </Button>
        </Table.Cell>
      </Table.Row>

      <Table.Empty v-if="documents.length === 0" :colspan="4">
        No documents found.
      </Table.Empty>
    </Table.Body>
  </Table.Root>
</template>
