<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { createToaster, Toast } from "@vuzeno/registry/ui/toast";
import { X } from "lucide-vue-next";

const toaster = createToaster({
  placement: "bottom-end",
  overlap: true,
  gap: 16,
});

function createToast() {
  toaster.info({
    title: "Scheduled for tomorrow",
    description: "Your meeting has been scheduled for tomorrow at 10am.",
  });
}
</script>

<template>
  <div>
    <Button variant="outline" @click="createToast">
      Schedule meeting
    </Button>

    <Toast.Toaster v-slot="toast" :toaster="toaster">
      <Toast.Root>
        <Toast.Indicator />
        <Toast.Title>{{ toast.title }}</Toast.Title>
        <Toast.Description>{{ toast.description }}</Toast.Description>
        <Toast.CloseTrigger>
          <X />
        </Toast.CloseTrigger>
      </Toast.Root>
    </Toast.Toaster>
  </div>
</template>
