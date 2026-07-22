<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Empty } from "@vuzeno/registry/ui/empty";
import { ArrowUpRightIcon, FolderIcon } from "lucide-vue-next";
</script>

<template>
  <Empty.Root>
    <Empty.Header>
      <Empty.Media variant="icon">
        <FolderIcon />
      </Empty.Media>
      <Empty.Title>No Projects Yet</Empty.Title>
      <Empty.Description>
        You haven't created any projects yet. Get started by creating your first project.
      </Empty.Description>
    </Empty.Header>
    <Empty.Content class="flex-row justify-center gap-2">
      <Button>Create Project</Button>
      <Button variant="outline">Import Project</Button>
    </Empty.Content>
    <Button variant="link" class="text-muted-foreground" size="sm">
      Learn More
      <ArrowUpRightIcon />
    </Button>
  </Empty.Root>
</template>
