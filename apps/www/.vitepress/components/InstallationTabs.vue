<script setup lang="ts">
import { Button } from "@vuetella/ui/components/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@vuetella/ui/components/tabs";
import { useStorage } from "@vueuse/core";
import { CheckIcon, CopyIcon } from "lucide-vue-next";
import { ref } from "vue";

const PACKAGE_MANAGERS = ["bun", "npm", "yarn"];
const COMMANDS = {
  bun: "bun add",
  npm: "npm install",
  yarn: "yarn add",
};

const props = defineProps<{
  value: string;
}>();

const packageManager = useStorage<"bun" | "npm" | "yarn">("packageManager", "bun");

const isCopied = ref(false);
const timeout = ref<NodeJS.Timeout | null>(null);

function copyToClipboard(command: string) {
  if (timeout.value) {
    clearTimeout(timeout.value);
  }

  navigator.clipboard.writeText(command);

  isCopied.value = true;

  timeout.value = setTimeout(() => {
    isCopied.value = false;
  }, 2000);
}
</script>
  
<template>
  <Tabs
    v-model="packageManager"
    class="bg-[hsl(60,15%,5%)] border border-[hsl(0_0%_15%)] rounded-lg overflow-hidden"
  >
    <div class="bg-[hsl(60,15%,5%)] border-b border-[hsl(0_0%_15%)] flex pr-2">
      <div class="flex justify-between items-center w-full text-[13px]">
        <TabsList class="flex bg-transparent p-0">
          <TabsTrigger
            v-for="(pkg, index) in PACKAGE_MANAGERS"
            :key="index"
            :value="pkg"
            tabindex="-1"
            class="rounded-none text-white/70 py-2.5 px-4 data-[state=active]:shadow-[0_1px_0_#ffff9b] data-[state=active]:font-medium data-[state=active]:text-white hover:text-white"
          >
            {{ pkg }}
          </TabsTrigger>
        </TabsList>
      </div>
    </div>

    <div
      class="[&_>div]:!m-0 custom [&_pre]:rounded-t-none [&_pre]:border-none"
    >
      <TabsContent
        v-for="pkg in PACKAGE_MANAGERS"
        :key="pkg"
        tabindex="-1"
        :value="pkg"
        as-child
      >
        <div class="p-4 text-sm space-x-2 flex items-center justify-between">
          <div class="space-x-2 text-amber-400">
            <span>$</span>
            <span class="font-mono">{{ COMMANDS[pkg] }} {{ value }}</span>
          </div>

          <Button class="no-prose" variant="outline" size="icon" @click="copyToClipboard(COMMANDS[pkg] + ' ' + value)">
            <CopyIcon v-if="!isCopied" class="animate-in fade-in size-4" />
            <CheckIcon v-else class="animate-in fade-in size-4" />
          </Button>
        </div>
      </TabsContent>
    </div>
  </Tabs>
</template>