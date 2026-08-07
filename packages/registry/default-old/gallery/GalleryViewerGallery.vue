<script setup lang="ts">
import { SidebarInset } from "@vuzeno/ui/components/sidebar";
</script>

<template>
  <SidebarInset class="p-6 bg-transparent">    
    <slot />
  </SidebarInset>
</template>