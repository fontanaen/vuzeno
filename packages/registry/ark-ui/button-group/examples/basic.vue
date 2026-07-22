<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { ButtonGroup } from "@vuzeno/registry/ui/button-group";
</script>

<template>
  <ButtonGroup aria-label="Actions">
    <Button variant="outline">
      Archive
    </Button>
    <Button variant="outline">
      Report
    </Button>
    <Button variant="outline">
      Snooze
    </Button>
  </ButtonGroup>
</template>
