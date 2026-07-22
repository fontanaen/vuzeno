<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Empty } from "@vuzeno/registry/ui/empty";
import { CloudIcon } from "lucide-vue-next";
</script>

<template>
  <Empty.Root class="border border-dashed">
    <Empty.Header>
      <Empty.Media variant="icon">
        <CloudIcon />
      </Empty.Media>
      <Empty.Title>Cloud Storage Empty</Empty.Title>
      <Empty.Description>
        Upload files to your cloud storage to access them anywhere.
      </Empty.Description>
    </Empty.Header>
    <Empty.Content>
      <Button variant="outline" size="sm">Upload Files</Button>
    </Empty.Content>
  </Empty.Root>
</template>
