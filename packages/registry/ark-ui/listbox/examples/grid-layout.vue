<script setup lang="ts">
import { createGridCollection, Listbox } from "@vuzeno/registry/ui/listbox";

const collection = createGridCollection({
  items: [
    { label: "😀", value: "grinning" },
    { label: "😍", value: "heart-eyes" },
    { label: "🥳", value: "partying" },
    { label: "😎", value: "sunglasses" },
    { label: "🤩", value: "star-struck" },
    { label: "😂", value: "joy" },
    { label: "🥰", value: "smiling-hearts" },
    { label: "😊", value: "blush" },
    { label: "🤗", value: "hugging" },
    { label: "😇", value: "innocent" },
    { label: "🔥", value: "fire" },
    { label: "✨", value: "sparkles" },
    { label: "💯", value: "hundred" },
    { label: "🎉", value: "tada" },
    { label: "❤️", value: "heart" },
    { label: "👍", value: "thumbs-up" },
    { label: "👏", value: "clap" },
    { label: "🚀", value: "rocket" },
    { label: "⭐", value: "star" },
    { label: "🌈", value: "rainbow" },
  ],
  columnCount: 5,
});
</script>

<template>
  <Listbox.Root :collection="collection">
    <Listbox.Label>Pick a reaction</Listbox.Label>
    <Listbox.Content>
      <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
        <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
      </Listbox.Item>
    </Listbox.Content>
  </Listbox.Root>
</template>
