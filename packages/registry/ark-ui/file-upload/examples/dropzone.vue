<script setup lang="ts">
import { FileIcon, XIcon } from "@lucide/vue";
import { FileUpload } from "@vuzeno/registry/ui/file-upload";
</script>

<template>
  <FileUpload.Root :max-files="5">
    <FileUpload.Label>File Upload</FileUpload.Label>
    <FileUpload.Dropzone>
      <div class="text-sm font-medium text-foreground">
        Drag and drop files here
      </div>
      <div class="text-xs text-muted-foreground">
        or click to browse
      </div>
    </FileUpload.Dropzone>
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
          <FileUpload.ItemPreview type=".*">
            <FileIcon />
          </FileUpload.ItemPreview>
          <FileUpload.ItemName />
          <FileUpload.ItemSizeText />
          <FileUpload.ItemDeleteTrigger>
            <XIcon />
          </FileUpload.ItemDeleteTrigger>
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.Root>
</template>
