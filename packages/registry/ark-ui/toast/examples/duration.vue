<script setup lang="ts">
import { X } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { createToaster, Toast } from "@vuzeno/registry/ui/toast";

const toaster = createToaster({
  overlap: true,
  placement: "bottom-end",
  gap: 16,
});

const durations = [
  { label: "1s", value: 1000 },
  { label: "3s", value: 3000 },
  { label: "5s", value: 5000 },
  { label: "∞", value: Infinity },
];
</script>

<template>
  <div>
    <div class="flex flex-wrap gap-2">
      <Button
        v-for="duration in durations"
        :key="duration.label"
        variant="outline"
        @click="
          toaster.create({
            title: `Duration: ${duration.label}`,
            description:
              duration.value === Infinity
                ? 'This toast will stay until you dismiss it.'
                : `This toast will automatically close in ${duration.label}.`,
            type: 'info',
            duration: duration.value,
          })
        "
      >
        {{ duration.label }}
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
