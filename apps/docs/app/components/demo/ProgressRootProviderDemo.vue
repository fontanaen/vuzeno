<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { ButtonGroup } from "@vuzeno/registry/ui/button-group";
import { Progress, useProgress } from "@vuzeno/registry/ui/progress-circular";
import { MinusIcon, PlusIcon } from "lucide-vue-next";

const progress = useProgress();
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <Progress.RootProvider :value="progress">
      <Progress.CircleContainer>
        <Progress.Circle>
          <Progress.CircleTrack />
          <Progress.CircleRange />
        </Progress.Circle>
        <Progress.ValueText />
      </Progress.CircleContainer>
    </Progress.RootProvider>

    <ButtonGroup>
      <Button variant="outline" size="icon" @click="progress.setValue((progress.value ?? 0) - 10)">
        <MinusIcon class="size-4" />
      </Button>
      <Button variant="outline" size="icon" @click="progress.setValue((progress.value ?? 0) + 10)">
        <PlusIcon class="size-4" />
      </Button>
    </ButtonGroup>
  </div>
</template>
