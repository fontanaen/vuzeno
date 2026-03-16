<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@vuzeno/ui/components/tabs";
import { TerminalIcon } from "lucide-vue-next";

const props = defineProps<{
  command: string;
  exec?: boolean;
}>();

const PACKAGE_MANAGERS = ["bun", "npm", "yarn", "pnpm"];

const EXEC_PREFIXES: Record<(typeof PACKAGE_MANAGERS)[number], string> = {
  bun: "bunx --bun",
  npm: "npx",
  yarn: "yarn dlx",
  pnpm: "pnpm dlx",
};

const INSTALL_PREFIXES: Record<(typeof PACKAGE_MANAGERS)[number], string> = {
  bun: "bun add",
  npm: "npm install",
  yarn: "yarn add",
  pnpm: "pnpm add",
};

const packageManager = useCookie<(typeof PACKAGE_MANAGERS)[number]>("packageManager", {
  default: () => "bun",
});

const currentCommand = computed(() => {
  const prefix = props.exec ? EXEC_PREFIXES[packageManager.value] : INSTALL_PREFIXES[packageManager.value];
  return `${prefix} ${props.command}`;
});
</script>

<template>
  <Tabs
    v-model="packageManager"
    class="bg-background border border-border rounded-lg overflow-hidden mt-4"
  >
    <div class="bg-background border-b border-border flex px-2">
      <div class="flex items-center gap-2 w-full text-[13px]">
        <div class="bg-muted size-7 flex items-center justify-center rounded-sm">
          <TerminalIcon class="size-4" />
        </div>
        <TabsList class="flex gap-2 bg-transparent p-2">
          <TabsTrigger
            v-for="(pkg, index) in PACKAGE_MANAGERS"
            :key="index"
            :value="pkg"
            tabindex="-1"
            class="transition-colors duration-200 bg-transparent data-[state=active]:bg-primary/30 py-1 rounded-sm"
          >
            {{ pkg }}
          </TabsTrigger>
        </TabsList>
      </div>
    </div>

    <TabsContent
      v-for="pkg in PACKAGE_MANAGERS"
      :key="pkg"
      tabindex="-1"
      :value="pkg"
      class="mt-0"
      as-child
    >
      <div class="**:data-pretty-code-figure:m-0! **:data-pretty-code-figure:rounded-t-none! **:data-pretty-code-figure:border-t">
        <ProsePre language="bash" :code="currentCommand || ''" />
      </div>
    </TabsContent>
  </Tabs>
</template>