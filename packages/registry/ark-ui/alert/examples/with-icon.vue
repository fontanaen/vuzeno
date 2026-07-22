<script setup lang="ts">
import { Alert } from "@vuzeno/registry/ui/alert";
</script>

<template>
  <div class="grid w-full max-w-xl items-start gap-4">
    <Alert.Root variant="success">
      <Alert.Icon />
      <Alert.Title>Success! Your changes have been saved</Alert.Title>
      <Alert.Description>
        This is an alert with icon, title and description.
      </Alert.Description>
    </Alert.Root>

    <Alert.Root variant="info">
      <Alert.Icon />
      <Alert.Title>This alert uses the info variant.</Alert.Title>
      <Alert.Description>
        Info styling is distinct from the default neutral variant.
      </Alert.Description>
    </Alert.Root>
  </div>
</template>
