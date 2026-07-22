---
title: File Upload
description: A component that is used to upload multiple files.
tag: new
links:
  api: https://ark-ui.com/vue/docs/components/file-upload
---

::component-preview
---
name: FileUploadDemo
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/file-upload.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { FileUpload } from "@vuzeno/registry/ui/file-upload";
</script>

<template>
  <FileUpload.Root :max-files="5">
    <FileUpload.Label>File Upload</FileUpload.Label>
    <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
    <FileUpload.ItemGroup>
      <FileUpload.Context v-slot="{ acceptedFiles }">
        <FileUpload.Item
          v-for="file in acceptedFiles"
          :key="file.name"
          :file="file"
        >
          <FileUpload.ItemName />
          <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.Root>
</template>
```

## Composition

```
FileUpload.Root
├── FileUpload.Label
├── FileUpload.Dropzone
│   └── FileUpload.Trigger
├── FileUpload.ItemGroup
│   └── FileUpload.Item
│       ├── FileUpload.ItemPreview
│       │   └── FileUpload.ItemPreviewImage
│       ├── FileUpload.ItemName
│       ├── FileUpload.ItemSizeText
│       └── FileUpload.ItemDeleteTrigger
├── FileUpload.ClearTrigger
├── FileUpload.HiddenInput
├── FileUpload.Context
└── FileUpload.RootProvider
```

## Examples

### Initial Files

Use the `defaultAcceptedFiles` prop to set the initial files in the file upload component.

::component-preview
---
name: FileUploadInitialFilesDemo
---
::

### Clear Trigger

Use the `ClearTrigger` to remove all uploaded files at once.

::component-preview
---
name: FileUploadClearTriggerDemo
---
::

### Dropzone

Use the `Dropzone` to enable drag-and-drop. It exposes a `data-dragging` attribute for styling.

::component-preview
---
name: FileUploadDropzoneDemo
---
::

### Directory Upload

Use the `directory` prop to upload entire folders. Access file paths through `file.webkitRelativePath`.

::component-preview
---
name: FileUploadDirectoryUploadDemo
---
::

> When uploading directories with many files, set `maxFiles` to a higher value or remove it entirely to prevent rejections.

### Accepted File Types

Use the `accept` prop to restrict file types. Accepts MIME types (`image/png`) or extensions (`.pdf`).

::component-preview
---
name: FileUploadAcceptedFileTypesDemo
---
::

### Error Handling

Set constraints with `maxFiles`, `maxFileSize`, `minFileSize`, and `accept`. Rejected files include error codes like `TOO_MANY_FILES`, `FILE_INVALID_TYPE`, `FILE_TOO_LARGE`, or `FILE_EXISTS`.

::component-preview
---
name: FileUploadErrorHandlingDemo
---
::

### File Transformations

Use `transformFiles` to process files before they're added. Useful for image compression, format conversion, or resizing.

::component-preview
---
name: FileUploadFileTransformationsDemo
---
::

### Field

Use `Field` to add helper text and error handling.

::component-preview
---
name: FileUploadFieldDemo
---
::

### Root Provider

An alternative way to control the file upload is to use the `RootProvider` component and the `useFileUpload` hook. This way you can access the state and methods from outside the component.

::component-preview
---
name: FileUploadRootProviderDemo
---
::

### Pasting Files

Use `setClipboardFiles` to enable pasting images from the clipboard.

::component-preview
---
name: FileUploadPastingFilesDemo
---
::

### Media Capture

Use `capture` to access the device camera. Set to `"environment"` for back camera or `"user"` for front camera.

::component-preview
---
name: FileUploadMediaCaptureDemo
---
::

### Rejected Files

Access `rejectedFiles` from the context to display validation errors.

::component-preview
---
name: FileUploadRejectedFilesDemo
---
::

## API

See [Ark UI File Upload docs](https://ark-ui.com/vue/docs/components/file-upload) for full props and examples.
