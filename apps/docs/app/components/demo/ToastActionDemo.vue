<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { createToaster, Toast } from "@vuzeno/registry/ui/toast";
import { XIcon } from "lucide-vue-next";

const toaster = createToaster({
  placement: "bottom-end",
  overlap: true,
  gap: 16,
});

function addToast() {
  toaster.create({
    title: "Invitation sent",
    description: "Your team invitation has been sent. Click undo to cancel.",
    type: "info",
    action: {
      label: "Undo",
      onClick: () => {
        console.log("Undo clicked");
      },
    },
  });
}
</script>

<template>
  <div>
    <Button variant="outline" @click="addToast">
      Send invitation
    </Button>
    
    <Toast.Toaster v-slot="toast" :toaster="toaster">
      <Toast.Root>
        <Toast.Title>{{ toast.title }}</Toast.Title>
        <Toast.Description>{{ toast.description }}</Toast.Description>
        <Toast.ActionTrigger v-if="toast.action">
          <Button variant="outline" size="sm">
            {{ toast.action?.label }}
          </Button>
        </Toast.ActionTrigger>
        <Toast.CloseTrigger>
          <XIcon />
        </Toast.CloseTrigger>
      </Toast.Root>
    </Toast.Toaster>
  </div>
</template>
