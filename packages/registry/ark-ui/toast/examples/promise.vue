<script setup lang="ts">
import { CircleAlertIcon, CircleCheckIcon, InfoIcon, LoaderIcon, X } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { createToaster, Toast } from "@vuzeno/registry/ui/toast";

const toaster = createToaster({
  overlap: true,
  placement: "bottom-end",
  gap: 16,
});

const iconMap = {
  loading: LoaderIcon,
  success: CircleCheckIcon,
  error: CircleAlertIcon,
  info: InfoIcon,
};

function uploadFile() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve();
      } else {
        reject(new Error("Upload failed"));
      }
    }, 2000);
  });
}

function handleUpload() {
  toaster.promise(uploadFile, {
    loading: {
      title: "Uploading file...",
      description: "Please wait while we process your file.",
    },
    success: {
      title: "Upload complete",
      description: "Your file has been uploaded successfully.",
    },
    error: {
      title: "Upload failed",
      description: "There was an error uploading your file. Please try again.",
    },
  });
}
</script>

<template>
  <div>
    <Button variant="outline" @click="handleUpload">
      Upload file
    </Button>

    <Toast.Toaster v-slot="toast" :toaster="toaster">
      <Toast.Root>
        <Toast.Indicator />
        <Toast.Title>
          {{ toast.title }}
        </Toast.Title>
        <Toast.Description>{{ toast.description }}</Toast.Description>
        <Toast.CloseTrigger>
          <X />
        </Toast.CloseTrigger>
      </Toast.Root>
    </Toast.Toaster>
  </div>
</template>
