<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { createToaster, Toast } from "@vuzeno/registry/ui/toast";
import { X } from "lucide-vue-next";
import { ref } from "vue";

const toaster = createToaster({
  placement: "bottom-end",
  overlap: true,
  gap: 16,
});

const id = ref<string | undefined>(undefined);

function createToast() {
  id.value = toaster.create({
    title: "Uploading file...",
    description: "Please wait while your file is being uploaded.",
    type: "loading",
  });
}

function updateToast() {
  if (!id.value) {
    return;
  }
  toaster.update(id.value, {
    title: "Upload complete",
    description: "Your file has been uploaded successfully.",
    type: "success",
  });
}
</script>

<template>
  <div>
    <div class="flex gap-2">
      <Button variant="outline" @click="createToast">
        Start upload
      </Button>
      <Button variant="outline" @click="updateToast">
        Complete upload
      </Button>
    </div>
    
    <Toast.Toaster v-slot="toast" :toaster="toaster">
      <Toast.Root>
        <Toast.Title>{{ toast.title }}</Toast.Title>
        <Toast.Description>{{ toast.description }}</Toast.Description>
        <Toast.CloseTrigger>
          <X />
        </Toast.CloseTrigger>
      </Toast.Root>
    </Toast.Toaster>
  </div>
</template>
