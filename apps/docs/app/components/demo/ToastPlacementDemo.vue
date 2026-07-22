<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { createToaster, Toast } from "@vuzeno/registry/ui/toast";
import { X } from "lucide-vue-next";

const toaster = createToaster({
  placement: "top-end",
  overlap: true,
  gap: 16,
});

function addToast() {
  toaster.create({
    title: "Notification",
    description: "This toast appears at the top-right corner.",
    type: "info",
  });
}
</script>

<template>
  <div>
    <Button variant="outline" @click="addToast">
      Show toast (top-end)
    </Button>

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
