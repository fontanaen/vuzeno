<script setup lang="ts">
import { Splitter, useSplitter } from "@vuzeno/registry/ui/splitter";

const splitter = useSplitter({
  defaultSize: [50, 50],
  panels: [{ id: "a" }, { id: "b" }],
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <output class="text-sm text-muted-foreground">
      current size: {{ JSON.stringify(splitter.getSizes()) }}
    </output>

    <Splitter.RootProvider :value="splitter">
      <Splitter.Panel id="a">
        A
      </Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" aria-label="Resize">
        <Splitter.ResizeTriggerIndicator />
      </Splitter.ResizeTrigger>
      <Splitter.Panel id="b">
        B
      </Splitter.Panel>
    </Splitter.RootProvider>
  </div>
</template>
