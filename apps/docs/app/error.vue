<script setup lang="ts">
import { Button } from "@vuzeno/ui/components/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "@vuzeno/ui/components/empty";
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <Empty>
      <EmptyHeader>
        <EmptyTitle>
          {{ error.statusCode }}
        </EmptyTitle>
      </EmptyHeader>
      <EmptyDescription>
        {{ error.statusMessage }}
      </EmptyDescription>
      <EmptyContent>
        <div class="flex gap-2">
          <Button as="a" href="/" variant="outline">
            Go to home
          </Button>
          <Button as="a" href="/docs/getting-started">
            Get started
          </Button>
        </div>
      </EmptyContent>
    </Empty>
  </div>
</template>
