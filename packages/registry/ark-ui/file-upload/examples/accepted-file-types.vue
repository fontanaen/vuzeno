<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { FileUpload } from "@vuzeno/registry/ui/file-upload";
</script>

<template>
  <FileUpload.Root accept="image/png,image/jpeg">
    <FileUpload.Label>File Upload (PNG and JPEG only)</FileUpload.Label>
    <FileUpload.Dropzone>Drop your files here</FileUpload.Dropzone>
    <FileUpload.Trigger>Select Files</FileUpload.Trigger>

    <FileUpload.ItemGroup>
      <FileUpload.Context v-slot="{ acceptedFiles }">
        <FileUpload.Item
          v-for="file in acceptedFiles"
          :key="file.name"
          :file="file"
        >
          <FileUpload.ItemPreview type=".*">
            <FileUpload.ItemPreviewImage />
          </FileUpload.ItemPreview>
          <FileUpload.ItemName />
          <FileUpload.ItemSizeText />
          <FileUpload.ItemDeleteTrigger>
            <XIcon />
          </FileUpload.ItemDeleteTrigger>
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>

    <FileUpload.ItemGroup>
      <FileUpload.Context v-slot="{ rejectedFiles }">
        <FileUpload.Item
          v-for="fileRejection in rejectedFiles"
          :key="fileRejection.file.name"
          :file="fileRejection.file"
        >
          <FileUpload.ItemName />
          <FileUpload.ItemSizeText />
          <div class="col-span-full flex flex-col gap-1 text-xs text-destructive">
            <div v-for="error in fileRejection.errors" :key="error">
              {{ error }}
            </div>
          </div>
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>

    <FileUpload.HiddenInput />
  </FileUpload.Root>
</template>
