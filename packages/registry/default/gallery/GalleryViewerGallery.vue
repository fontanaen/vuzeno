<script setup lang="ts">
import { SidebarInset } from "@/components/ui/sidebar";
</script>

<template>
  <SidebarInset class="p-6 bg-transparent">    
    <slot />
  </SidebarInset>
</template>