<script setup lang="ts">
import { Button } from "@vuetella/ui/components/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@vuetella/ui/components/tabs";
import { useStorage } from "@vueuse/core";
import { CheckIcon, CopyIcon } from "lucide-vue-next";
import { ref } from "vue";

const PACKAGE_MANAGERS = ["bun", "npm", "yarn", "pnpm"];
const EXEC_PREFIXES = {
  bun: "bunx --bun",
  npm: "npx",
  yarn: "yarn dlx",
  pnpm: "pnpm dlx",
};
const INSTALL_PREFIXES = {
  bun: "bun add",
  npm: "npm install",
  yarn: "yarn add",
  pnpm: "pnpm add",
};

const props = defineProps<{
  exec?: boolean;
  value: string;
}>();

const packageManager = useStorage<(typeof PACKAGE_MANAGERS)[number]>("packageManager", "bun");

const isCopied = ref(false);
const timeout = ref<NodeJS.Timeout | null>(null);

function copyToClipboard() {
  if (timeout.value) {
    clearTimeout(timeout.value);
  }

  if (props.exec) {
    navigator.clipboard.writeText(`${EXEC_PREFIXES[packageManager.value]} ${props.value}`);
  } else {
    navigator.clipboard.writeText(`${INSTALL_PREFIXES[packageManager.value]} ${props.value}`);
  }

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
        <TabsList class="flex gap-2 bg-transparent p-2">
          <TabsTrigger
            v-for="(pkg, index) in PACKAGE_MANAGERS"
            :key="index"
            :value="pkg"
            tabindex="-1"
            class="transition-colors duration-200 bg-transparent data-[state=active]:bg-primary/30 py-1.5 rounded-sm"
          >
            {{ pkg }}
          </TabsTrigger>
        </TabsList>

        <Button class="no-prose" variant="ghost" size="icon-sm" @click="copyToClipboard()">
          <CopyIcon v-if="!isCopied" class="animate-in fade-in size-4" />
          <CheckIcon v-else class="animate-in fade-in size-4" />
        </Button>
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
        <div class="p-4 text-sm space-x-2 text-[#FFC799] font-mono">
          <span v-if="exec">
            {{ EXEC_PREFIXES[pkg] }} {{ value }}
          </span>
          <code v-else class="font-mono">{{ INSTALL_PREFIXES[pkg] }} {{ value }}</code>
        </div>
      </TabsContent>
    </div>
  </Tabs>
</template>