<script setup lang="ts">
import { AlertDialog } from "@vuzeno/registry/ui/alert-dialog";
import { Button } from "@vuzeno/registry/ui/button";
</script>

<template>
  <AlertDialog.Root>
    <AlertDialog.Trigger as-child>
      <Button variant="destructive" size="sm">Delete Account</Button>
    </AlertDialog.Trigger>

    <AlertDialog.Content>
      <AlertDialog.Header>
        <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
        <AlertDialog.Description>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialog.Description>
      </AlertDialog.Header>

      <AlertDialog.Footer>
        <AlertDialog.Cancel>
          Cancel
        </AlertDialog.Cancel>

        <AlertDialog.Confirm variant="destructive">
          Delete Account
        </AlertDialog.Confirm>
      </AlertDialog.Footer>
    </AlertDialog.Content>
  </AlertDialog.Root>
</template>
