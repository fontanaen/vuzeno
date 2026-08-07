<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Empty } from "@vuzeno/registry/ui/empty";
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <Empty.Root>
      <Empty.Header>
        <Empty.Title>
          {{ error.statusCode }}
        </Empty.Title>
      </Empty.Header>
      <Empty.Description>
        {{ error.statusMessage }}
      </Empty.Description>
      <Empty.Content>
        <div class="flex gap-2">
          <Button as-child variant="outline">
            <a href="/">Go to home</a>
          </Button>
          <Button as-child variant="outline">
            <a href="/docs/getting-started">Get started</a>
          </Button>
        </div>
      </Empty.Content>
    </Empty.Root>
  </div>
</template>
