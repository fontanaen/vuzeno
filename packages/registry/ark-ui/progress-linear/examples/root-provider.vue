<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Field } from "@vuzeno/registry/ui/field";
import { ProgressLinear, useProgress } from "@vuzeno/registry/ui/progress-linear";

const progress = useProgress();
</script>

<template>
  <div class="flex flex-col gap-4">
    <Button variant="outline" size="sm" @click="progress.setToMax()">
      Set to Max
    </Button>

    <Field.Root>
      <ProgressLinear.RootProvider :value="progress">
        <Field.Label>Label</Field.Label>
        
        <ProgressLinear.Value />
        <ProgressLinear.Track />
      </ProgressLinear.RootProvider>
    </Field.Root>
  </div>
</template>
