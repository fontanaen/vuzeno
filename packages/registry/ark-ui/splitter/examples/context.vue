<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Splitter } from "@vuzeno/registry/ui/splitter";
</script>

<template>
  <Splitter.Root :panels="[{ id: 'a' }, { id: 'b' }]">
    <Splitter.Context v-slot="splitter">
      <Splitter.Panel id="a">
        <Button variant="outline" size="sm" @click="splitter.resizePanel('a', 10)">
          Set A to 10%
        </Button>
      </Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" aria-label="Resize">
        <Splitter.ResizeTriggerIndicator />
      </Splitter.ResizeTrigger>
      <Splitter.Panel id="b">
        <Button variant="outline" size="sm" @click="splitter.resizePanel('b', 10)">
          Set B to 10%
        </Button>
      </Splitter.Panel>
    </Splitter.Context>
  </Splitter.Root>
</template>
