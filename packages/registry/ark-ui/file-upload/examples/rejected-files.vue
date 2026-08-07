<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { FileUpload } from "@vuzeno/registry/ui/file-upload";
</script>

<template>
  <FileUpload.Root :max-files="2">
    <FileUpload.Dropzone>Drag and drop your images here</FileUpload.Dropzone>

    <FileUpload.ItemGroup type="accepted">
      <h3 class="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        Accepted Files
      </h3>
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
          <FileUpload.ItemDeleteTrigger>
            <XIcon />
          </FileUpload.ItemDeleteTrigger>
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>

    <FileUpload.ItemGroup type="rejected">
      <h3 class="text-xs font-semibold tracking-wide text-destructive uppercase">
        Rejected Files
      </h3>
      <FileUpload.Context v-slot="{ rejectedFiles }">
        <FileUpload.Item
          v-for="{ file, errors } in rejectedFiles"
          :key="file.name"
          :file="file"
        >
          <FileUpload.ItemName />
          <div class="text-xs text-destructive [grid-area:size]">
            {{ errors.join(", ") }}
          </div>
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
