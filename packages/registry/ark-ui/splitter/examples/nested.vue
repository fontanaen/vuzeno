<script setup lang="ts">
import { createSplitterRegistry, Splitter } from "@vuzeno/registry/ui/splitter";

const registry = createSplitterRegistry();
</script>

<template>
  <Splitter.Root
    orientation="horizontal"
    :panels="[{ id: 'left' }, { id: 'center' }, { id: 'right' }]"
    :registry="registry"
  >
    <Splitter.Panel id="left">
      Left
    </Splitter.Panel>
    <Splitter.ResizeTrigger id="left:center" aria-label="Resize">
      <Splitter.ResizeTriggerIndicator />
    </Splitter.ResizeTrigger>
    <Splitter.Panel id="center">
      <Splitter.Root orientation="vertical" :panels="[{ id: 'top' }, { id: 'bottom' }]" :registry="registry">
        <Splitter.Panel id="top">
          Top
        </Splitter.Panel>
        <Splitter.ResizeTrigger id="top:bottom" aria-label="Resize">
          <Splitter.ResizeTriggerIndicator />
        </Splitter.ResizeTrigger>
        <Splitter.Panel id="bottom">
          Bottom
        </Splitter.Panel>
      </Splitter.Root>
    </Splitter.Panel>
    <Splitter.ResizeTrigger id="center:right" aria-label="Resize">
      <Splitter.ResizeTriggerIndicator />
    </Splitter.ResizeTrigger>
    <Splitter.Panel id="right">
      Right
    </Splitter.Panel>
  </Splitter.Root>
</template>
