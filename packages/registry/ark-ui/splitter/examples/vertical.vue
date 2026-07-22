<script setup lang="ts">
import { Splitter } from "@vuzeno/registry/ui/splitter";
</script>

<template>
  <Splitter.Root orientation="vertical" :panels="[{ id: 'a' }, { id: 'b' }]">
    <Splitter.Panel id="a">
      A
    </Splitter.Panel>
    <Splitter.ResizeTrigger id="a:b" aria-label="Resize">
      <Splitter.ResizeTriggerIndicator />
    </Splitter.ResizeTrigger>
    <Splitter.Panel id="b">
      B
    </Splitter.Panel>
  </Splitter.Root>
</template>
