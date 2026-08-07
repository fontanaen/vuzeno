<script setup lang="ts">
import { FileIcon, XIcon } from "@lucide/vue";
import { FileUpload } from "@vuzeno/registry/ui/file-upload";

const defaultAcceptedFiles = [new File(["Welcome to Ark UI Vue"], "README.md", { type: "text/plain" })];
</script>

<template>
  <FileUpload.Root :default-accepted-files="defaultAcceptedFiles">
    <FileUpload.Label>File Upload</FileUpload.Label>
    <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
    <FileUpload.ItemGroup>
      <FileUpload.Context v-slot="{ acceptedFiles }">
        <FileUpload.Item
          v-for="file in acceptedFiles"
          :key="file.name"
          :file="file"
        >
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
