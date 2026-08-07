<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { FileUpload, useFileUpload } from "@vuzeno/registry/ui/file-upload";

const fileUpload = useFileUpload({ maxFiles: 3, accept: "image/*" });

function onPaste(event: ClipboardEvent) {
  fileUpload.setClipboardFiles(event.clipboardData);
}
</script>

<template>
  <FileUpload.RootProvider :value="fileUpload">
    <FileUpload.Label>File Upload with Paste</FileUpload.Label>
    <textarea
      class="min-h-24 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-ring focus:shadow-[0_0_0_1px_var(--demo-coral-solid)] focus:outline-none"
      placeholder="Paste image here..."
      @paste="onPaste"
    />
    <FileUpload.ItemGroup>
      <FileUpload.Item
        v-for="file in fileUpload.acceptedFiles"
        :key="file.name"
        :file="file"
      >
        <FileUpload.ItemPreview type="image/*">
          <FileUpload.ItemPreviewImage />
        </FileUpload.ItemPreview>
        <FileUpload.ItemDeleteTrigger>
          <XIcon />
        </FileUpload.ItemDeleteTrigger>
      </FileUpload.Item>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.RootProvider>
</template>
