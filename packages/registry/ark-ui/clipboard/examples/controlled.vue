<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Clipboard } from "@vuzeno/registry/ui/clipboard";
import { CheckIcon, ClipboardCopyIcon } from "lucide-vue-next";
import { ref } from "vue";

const url = ref("https://ark-ui.com");
</script>

<template>
  <div class="flex flex-col gap-4">
    <Clipboard.Root v-model="url">
      <Clipboard.Input />

      <Clipboard.Trigger>
        <Button variant="outline" size="icon">
          <Clipboard.Indicator />
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Root>

    <Button variant="outline" @click="url = 'https://chakra-ui.com'">
      Change Url
    </Button>
  </div>
</template>
