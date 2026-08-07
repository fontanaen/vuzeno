<script setup lang="ts">
import { Progress } from "@vuzeno/registry/ui/progress-circular";
</script>

<template>
  <Progress.Root :default-value="20" :min="10" :max="30">
    <Progress.CircleContainer>
      <Progress.Circle>
        <Progress.CircleTrack />
        <Progress.CircleRange />
      </Progress.Circle>
      <Progress.ValueText />
    </Progress.CircleContainer>
  </Progress.Root>
</template>
