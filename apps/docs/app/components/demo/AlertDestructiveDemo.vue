<script setup lang="ts">
import { Alert } from "@vuzeno/registry/ui/alert";
</script>

<template>
  <Alert.Root variant="destructive" class="max-w-xl">
    <Alert.Icon />
    <Alert.Title>Unable to process your payment.</Alert.Title>
    <Alert.Description>
      <p>Please verify your billing information and try again.</p>
      <ul class="mt-2 list-inside list-disc space-y-1">
        <li>Check your card details</li>
        <li>Ensure sufficient funds</li>
        <li>Verify billing address</li>
      </ul>
    </Alert.Description>
  </Alert.Root>
</template>
