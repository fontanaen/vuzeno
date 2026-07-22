<script setup lang="ts">
import { FileUpload, type FileUploadFileError } from "@vuzeno/registry/ui/file-upload";
import { XIcon } from "lucide-vue-next";

const errorMessages: Record<FileUploadFileError, string> = {
  TOO_MANY_FILES: "Too many files selected (max 3 allowed)",
  FILE_INVALID_TYPE: "Invalid file type (only images and PDFs allowed)",
  FILE_TOO_LARGE: "File too large (max 1MB)",
  FILE_TOO_SMALL: "File too small (min 1KB)",
  FILE_INVALID: "Invalid file",
  FILE_EXISTS: "File already exists",
};
</script>

<template>
  <FileUpload.Root
    :max-files="3"
    :max-file-size="1024 * 1024"
    :min-file-size="1024"
    accept="image/*,application/pdf"
  >
    <FileUpload.Label>File Upload with Validation</FileUpload.Label>
    <FileUpload.Trigger>Select Files</FileUpload.Trigger>

    <div class="flex w-full flex-col gap-2">
      <h3 class="text-xs font-semibold tracking-wide text-green-600 uppercase">
        Accepted Files
      </h3>
      <FileUpload.ItemGroup>
        <FileUpload.Context v-slot="{ acceptedFiles }">
          <div
            v-if="acceptedFiles.length === 0"
            class="p-4 text-center text-sm text-muted-foreground"
          >
            No files uploaded yet
          </div>
          <template v-else>
            <FileUpload.Item
              v-for="file in acceptedFiles"
              :key="file.name"
              :file="file"
            >
              <FileUpload.ItemPreview type="image/*">
                <FileUpload.ItemPreviewImage />
              </FileUpload.ItemPreview>
              <FileUpload.ItemPreview type="application/pdf">
                <div class="text-xs font-medium text-muted-foreground">
                  PDF
                </div>
              </FileUpload.ItemPreview>
              <FileUpload.ItemName />
              <FileUpload.ItemSizeText />
              <FileUpload.ItemDeleteTrigger>
                <XIcon />
              </FileUpload.ItemDeleteTrigger>
            </FileUpload.Item>
          </template>
        </FileUpload.Context>
      </FileUpload.ItemGroup>
    </div>

    <div class="flex w-full flex-col gap-2">
      <h3 class="text-xs font-semibold tracking-wide text-destructive uppercase">
        Rejected Files
      </h3>
      <FileUpload.ItemGroup>
        <FileUpload.Context v-slot="{ rejectedFiles }">
          <div
            v-if="rejectedFiles.length === 0"
            class="p-4 text-center text-sm text-muted-foreground"
          >
            No rejected files
          </div>
          <template v-else>
            <FileUpload.Item
              v-for="fileRejection in rejectedFiles"
              :key="fileRejection.file.name"
              :file="fileRejection.file"
            >
              <FileUpload.ItemName />
              <FileUpload.ItemSizeText />
              <div class="col-span-full mt-1 flex flex-col gap-1">
                <strong class="text-xs">Validation Errors:</strong>
                <div
                  v-for="(error, index) in fileRejection.errors"
                  :key="index"
                  class="text-xs text-destructive"
                >
                  {{ errorMessages[error] || error }}
                </div>
              </div>
            </FileUpload.Item>
          </template>
        </FileUpload.Context>
      </FileUpload.ItemGroup>
    </div>

    <FileUpload.HiddenInput />
  </FileUpload.Root>
</template>
