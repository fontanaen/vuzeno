<script setup lang="ts">
import { Toaster } from "@vuzeno/ui/components/sonner";
import { TooltipProvider } from "@vuzeno/ui/components/tooltip";
import { ConfigProvider } from "reka-ui";

const colorMode = useColorMode();
</script>

<template>
  <LayoutsAppBody>
    <ConfigProvider>
      <TooltipProvider>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </TooltipProvider>
    </ConfigProvider>

    <ClientOnly>
      <Toaster class="pointer-events-auto" :theme="colorMode.preference as any || 'system'" position="top-center" />
    </ClientOnly>
  </LayoutsAppBody>
</template>
