<script setup lang="ts">
import { FileUpload } from "@vuzeno/registry/ui/file-upload";
</script>

<template>
  <FileUpload.Root :max-files="5" accept="image/png,image/jpeg">
    <FileUpload.Label>File Upload</FileUpload.Label>
    <div class="flex flex-wrap gap-2">
      <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
      <FileUpload.ClearTrigger>Clear Files</FileUpload.ClearTrigger>
    </div>
    <FileUpload.ItemGroup>
      <FileUpload.Context v-slot="{ acceptedFiles }">
        <FileUpload.Item
          v-for="file in acceptedFiles"
          :key="file.name"
          :file="file"
        >
          <FileUpload.ItemPreview type="image/*">
            <FileUpload.ItemPreviewImage />
          </FileUpload.ItemPreview>
          <FileUpload.ItemName />
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.Root>
</template>
