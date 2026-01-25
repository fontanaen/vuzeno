<script setup lang="ts">
import { Button } from "@vuetella/ui/components/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@vuetella/ui/components/tabs";
import { useStorage } from "@vueuse/core";
import { CheckIcon, CopyIcon } from "lucide-vue-next";
import { ref } from "vue";

const props = defineProps<{
  code: string;
}>();

const isCopied = ref(false);
const timeout = ref<NodeJS.Timeout | null>(null);

function copyToClipboard() {
  if (timeout.value) {
    clearTimeout(timeout.value);
  }

  navigator.clipboard.writeText(props.code);

  isCopied.value = true;

  timeout.value = setTimeout(() => {
    isCopied.value = false;
  }, 2000);
}
</script>
    
<template>
  <Button variant="outline" size="icon" @click="copyToClipboard()">
    <CopyIcon v-if="!isCopied" class="animate-in fade-in size-4" />
    <CheckIcon v-else class="animate-in fade-in size-4" />
  </Button>
</template>