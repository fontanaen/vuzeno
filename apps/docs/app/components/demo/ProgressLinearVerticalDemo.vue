<script setup lang="ts">
import { ProgressLinear } from "@vuzeno/registry/ui/progress-linear";
</script>

<template>
  <ProgressLinear.Root :default-value="42" orientation="vertical">
    <ProgressLinear.Track>
      <ProgressLinear.Range />
    </ProgressLinear.Track>
  </ProgressLinear.Root>
</template>
