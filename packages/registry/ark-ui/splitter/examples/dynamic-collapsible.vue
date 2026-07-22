<script setup lang="ts">
import { Splitter, useSplitter } from "@vuzeno/registry/ui/splitter";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

const rootRef = ref<HTMLDivElement | null>(null);
const rootSize = ref<number | null>(null);

const isBelowMd = computed(() => rootSize.value != null && rootSize.value < 600);

const splitterProps = computed(() => ({
  panels: [{ id: "a", collapsible: isBelowMd.value, collapsedSize: 5, minSize: 20, maxSize: 40 }, { id: "b" }],
  defaultSize: [15, 85],
}));

const splitter = useSplitter(splitterProps);

function handleResize() {
  rootSize.value = rootRef.value?.offsetWidth ?? null;
}

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

watch(isBelowMd, (below) => {
  if (below) {
    splitter.value.collapsePanel("a");
  } else {
    splitter.value.expandPanel("a");
  }
});
</script>

<template>
  <div ref="rootRef" class="w-full">
    <Splitter.RootProvider :value="splitter">
      <Splitter.Panel id="a">
        A
      </Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" aria-label="Resize panels">
        <Splitter.ResizeTriggerIndicator />
      </Splitter.ResizeTrigger>
      <Splitter.Panel id="b">
        B
      </Splitter.Panel>
    </Splitter.RootProvider>
  </div>
</template>
