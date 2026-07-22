<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { PinInput, usePinInput } from "@vuzeno/registry/ui/pin-input";

const pinInput = usePinInput();
</script>

<template>
  <div class="flex flex-col gap-4">
    <Button variant="outline" size="sm" @click="pinInput.focus()">
      Focus
    </Button>

    <PinInput.RootProvider :value="pinInput">
      <PinInput.Label>Label</PinInput.Label>
      <PinInput.Control>
        <PinInput.Input v-for="id in [0, 1, 2]" :key="id" :index="id" />
      </PinInput.Control>
      <PinInput.HiddenInput />
    </PinInput.RootProvider>
  </div>
</template>
