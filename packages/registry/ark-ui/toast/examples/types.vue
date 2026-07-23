<script setup lang="ts">
import { X } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { createToaster, Toast } from "@vuzeno/registry/ui/toast";

const toaster = createToaster({
  overlap: true,
  placement: "bottom-end",
  gap: 16,
});
</script>

<template>
  <div>
    <div class="flex flex-wrap gap-3">
      <Button
        variant="outline"
        @click="toaster.success({ title: 'Changes saved', description: 'Your profile has been updated successfully.' })"
      >
        Success
      </Button>
      <Button
        variant="outline"
        @click="toaster.error({ title: 'Upload failed', description: 'There was an error uploading your file.' })"
      >
        Error
      </Button>
      <Button
        variant="outline"
        @click="toaster.warning({ title: 'Low storage', description: 'You have less than 10% storage remaining.' })"
      >
        Warning
      </Button>
      <Button
        variant="outline"
        @click="toaster.info({ title: 'Update available', description: 'A new version of the app is ready to install.' })"
      >
        Info
      </Button>
    </div>

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
