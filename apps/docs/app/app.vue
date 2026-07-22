<script setup lang="ts">
import { DialogCaller } from "@vuzeno/registry/ui/dialog-caller";
</script>

<template>
  <LayoutsAppBody>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
      <DialogCaller.Host />
    </ClientOnly>
  </LayoutsAppBody>
</template>
