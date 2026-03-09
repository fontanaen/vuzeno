<script setup lang="ts">
import { SidebarInset } from "@/components/ui/sidebar";
</script>

<template>
  <SidebarInset class="p-6 bg-background/90">    
    <slot />
  </SidebarInset>
</template>