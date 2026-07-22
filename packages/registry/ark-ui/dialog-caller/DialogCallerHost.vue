<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import DialogCallerEntry from "./DialogCallerEntry.vue";
import { dialogCallerStack, setDialogCallerHostMounted } from "./store";

onMounted(() => {
  setDialogCallerHostMounted(true);
});

onUnmounted(() => {
  setDialogCallerHostMounted(false);
});
</script>

<template>
  <Teleport to="body">
    <DialogCallerEntry
      v-for="(entry, index) in dialogCallerStack"
      :key="entry.id"
      :entry="entry"
      :layer-index="index"
    />
  </Teleport>
</template>
