<script setup lang="ts">
import { MinusIcon, PlusIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { ButtonGroup } from "@vuzeno/registry/ui/button-group";
</script>

<template>
  <ButtonGroup orientation="vertical" aria-label="Media controls" class="h-fit">
    <Button variant="outline" size="icon">
      <PlusIcon />
    </Button>
    <Button variant="outline" size="icon">
      <MinusIcon />
    </Button>
  </ButtonGroup>
</template>
