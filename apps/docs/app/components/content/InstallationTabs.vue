<script setup lang="ts">
import { TerminalIcon } from "@lucide/vue";
import { Tabs } from "@vuzeno/registry/ui/tabs";

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

function getCommand(packageManager: (typeof PACKAGE_MANAGERS)[number]) {
  const prefix = props.exec ? EXEC_PREFIXES[packageManager] : INSTALL_PREFIXES[packageManager];
  return `${prefix} ${props.command}`;
}
</script>

<template>
  <Tabs.Root
    v-model="packageManager"
    class="bg-muted/75 border border-border rounded-lg mt-4 w-full"
  >
    <Tabs.TabList class="p-2 items-center">
      <div class="bg-black/90 text-white dark:bg-muted size-7 flex items-center justify-center rounded-sm mr-2">
        <TerminalIcon class="size-4" />
      </div>

      <Tabs.TabTriggerIndicator
        v-for="(pkg, index) in PACKAGE_MANAGERS"
        :key="index"
        :value="pkg"
        tabindex="-1"
      >
        {{ pkg }}
      </Tabs.TabTriggerIndicator>
    </Tabs.TabList>

    <Tabs.TabContent
      v-for="pkg in PACKAGE_MANAGERS"
      :key="pkg"
      tabindex="-1"
      :value="pkg"
      class="mt-0"
    >
      <div class="**:data-pretty-code-figure:m-0! **:data-pretty-code-figure:rounded-t-none!">
        <ProsePre language="bash" :code="getCommand(pkg) || ''" />
      </div>
    </Tabs.TabContent>
  </Tabs.Root>
</template>