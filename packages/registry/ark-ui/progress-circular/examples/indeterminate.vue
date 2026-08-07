<script setup lang="ts">
import { Progress } from "@vuzeno/registry/ui/progress-circular";
</script>

<template>
  <Progress.Root :default-value="null">
    <Progress.CircleContainer>
      <Progress.Circle>
        <Progress.CircleTrack />
        <Progress.CircleRange />
      </Progress.Circle>
      <Progress.ValueText />
    </Progress.CircleContainer>
  </Progress.Root>
</template>
