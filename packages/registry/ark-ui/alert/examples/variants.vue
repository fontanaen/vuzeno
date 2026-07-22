<script setup lang="ts">
import { Alert } from "@vuzeno/registry/ui/alert";
</script>

<template>
  <div class="grid w-full max-w-xl items-start gap-4">
    <Alert.Root variant="info">
      <Alert.Icon />
      <Alert.Title>New update available</Alert.Title>
      <Alert.Description>
        A new version of the app is ready to install.
      </Alert.Description>
    </Alert.Root>

    <Alert.Root variant="success">
      <Alert.Icon />
      <Alert.Title>Payment confirmed</Alert.Title>
      <Alert.Description>
        Your order has been processed successfully.
      </Alert.Description>
    </Alert.Root>

    <Alert.Root variant="warning">
      <Alert.Icon />
      <Alert.Title>Storage almost full</Alert.Title>
      <Alert.Description>
        You have used 90% of your available storage.
      </Alert.Description>
    </Alert.Root>

    <Alert.Root variant="destructive">
      <Alert.Icon />
      <Alert.Title>Connection failed</Alert.Title>
      <Alert.Description>
        We could not reach the server. Please try again later.
      </Alert.Description>
    </Alert.Root>
  </div>
</template>
