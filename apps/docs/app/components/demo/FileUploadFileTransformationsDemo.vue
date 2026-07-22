<script setup lang="ts">
import { FileUpload } from "@vuzeno/registry/ui/file-upload";
import { XIcon } from "lucide-vue-next";

async function transformFiles(files: File[]) {
  return Promise.all(
    files.map(async (file) => {
      if (!file.type.startsWith("image/")) {
        return file;
      }

      try {
        const bitmap = await createImageBitmap(file);
        const maxWidth = 800;
        const scale = Math.min(1, maxWidth / bitmap.width);
        const width = Math.round(bitmap.width * scale);
        const height = Math.round(bitmap.height * scale);
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");

        if (!context) {
          bitmap.close();
          return file;
        }

        context.drawImage(bitmap, 0, 0, width, height);
        bitmap.close();

        const blob = await new Promise<Blob | null>((resolve) => {
          canvas.toBlob(resolve, "image/jpeg", 0.8);
        });

        if (!blob) {
          return file;
        }

        return new File([blob], file.name.replace(/\.\w+$/, ".jpg"), {
          type: "image/jpeg",
        });
      } catch {
        return file;
      }
    }),
  );
}
</script>

<template>
  <FileUpload.Root
    accept="image/*"
    :max-files="5"
    :transform-files="transformFiles"
  >
    <FileUpload.Label>File Upload with Compression</FileUpload.Label>
    <FileUpload.Trigger>Choose Images</FileUpload.Trigger>

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
