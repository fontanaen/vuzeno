<script setup lang="ts">
import { Alert } from "@vuzeno/registry/ui/alert";
</script>

<template>
  <Alert.Root class="max-w-xl" variant="success">
    <Alert.Icon />
    <Alert.Title>Payment confirmed</Alert.Title>
    <Alert.Description>
      Your order has been processed successfully.
    </Alert.Description>
  </Alert.Root>
</template>
