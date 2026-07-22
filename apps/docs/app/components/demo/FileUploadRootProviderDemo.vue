<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { FileUpload, useFileUpload } from "@vuzeno/registry/ui/file-upload";
import { FileIcon, XIcon } from "lucide-vue-next";

const fileUpload = useFileUpload({ maxFiles: 5 });
</script>

<template>
  <div class="flex w-full max-w-96 flex-col gap-4">
    <Button variant="outline" size="sm" @click="fileUpload.clearFiles()">
      Clear
    </Button>

    <FileUpload.RootProvider :value="fileUpload">
      <FileUpload.Label>File Upload</FileUpload.Label>
      <FileUpload.Dropzone>Drop your files here</FileUpload.Dropzone>
      <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
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
    </FileUpload.RootProvider>
  </div>
</template>
