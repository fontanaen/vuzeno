<script setup lang="ts">
import { ScrollArea } from "@vuzeno/registry/ui/scroll-area";
</script>

<template>
  <ScrollArea.Root class="h-48 border border-border rounded-md" orientation="vertical">
    <p class="m-0 text-sm leading-5.5 text-foreground">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </p>
    
    <ScrollArea.Root class="h-32 w-full border border-border rounded-md">
      <p class="m-0 text-sm leading-5.5 text-foreground">
        This is a nested scroll area. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
    </ScrollArea.Root>
  </ScrollArea.Root>
</template>
