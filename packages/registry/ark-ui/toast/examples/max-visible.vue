<script setup lang="ts">
import { X } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { createToaster, Toast } from "@vuzeno/registry/ui/toast";

const toaster = createToaster({
  max: 3,
  overlap: true,
  placement: "bottom-end",
  gap: 16,
});

const messages = [
  { title: "Message received", description: "You have a new message from Sarah." },
  { title: "File uploaded", description: "Your document has been saved." },
  { title: "Sync complete", description: "All changes have been synced." },
  { title: "New follower", description: "John started following you." },
  { title: "Task completed", description: "Your export is ready for download." },
];

function addFiveToasts() {
  for (const message of messages) {
    toaster.create({
      title: message.title,
      description: message.description,
      type: "info",
    });
  }
}
</script>

<template>
  <div>
    <div class="flex flex-wrap gap-2">
      <Button
        variant="outline"
        @click="
          toaster.create({
            title: 'New notification',
            description: 'Maximum of 3 toasts visible at once. Extra toasts are queued.',
            type: 'info',
          })
        "
      >
        Add toast
      </Button>
      <Button variant="outline" @click="addFiveToasts">
        Add 5 toasts
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
