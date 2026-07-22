<script setup lang="ts">
import { Badge } from "@vuzeno/registry/ui/badge";
import { Button } from "@vuzeno/registry/ui/button";
import { useDialogCaller } from "@vuzeno/registry/ui/dialog-caller";
import { createToaster } from "@vuzeno/registry/ui/toast";
import { Typography } from "@vuzeno/registry/ui/typography";
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
  <Typography.TableContainer>
    <Typography.Table>
      <thead>
        <Typography.TableRow>
          <Typography.TableHead>Document</Typography.TableHead>
          <Typography.TableHead>Status</Typography.TableHead>
          <Typography.TableHead>Updated</Typography.TableHead>
          <Typography.TableHead class="text-right">
            Actions
          </Typography.TableHead>
        </Typography.TableRow>
      </thead>
      <tbody>
        <Typography.TableRow v-for="document in documents" :key="document.id">
          <Typography.TableCell class="font-medium">
            {{ document.name }}
          </Typography.TableCell>
          <Typography.TableCell>
            <Badge :variant="document.status === 'Published' ? 'default' : 'secondary'">
              {{ document.status }}
            </Badge>
          </Typography.TableCell>
          <Typography.TableCell class="text-muted-foreground">
            {{ document.updatedAt }}
          </Typography.TableCell>
          <Typography.TableCell class="text-right">
            <Button variant="outline" size="sm" @click="onDelete(document)">
              Delete
            </Button>
          </Typography.TableCell>
        </Typography.TableRow>
      </tbody>
    </Typography.Table>
  </Typography.TableContainer>
</template>
