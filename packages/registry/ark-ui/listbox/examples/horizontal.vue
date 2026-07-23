<script setup lang="ts">
import { CheckIcon } from "@lucide/vue";
import { createListCollection, Listbox } from "@vuzeno/registry/ui/listbox";

const collection = createListCollection({
  items: [
    {
      title: "Midnight Dreams",
      artist: "Luna Ray",
      image: "https://picsum.photos/seed/album1/300/300",
    },
    {
      title: "Neon Skyline",
      artist: "The Electric",
      image: "https://picsum.photos/seed/album2/300/300",
    },
    {
      title: "Acoustic Sessions",
      artist: "Sarah Woods",
      image: "https://picsum.photos/seed/album3/300/300",
    },
    {
      title: "Urban Echoes",
      artist: "Metro Collective",
      image: "https://picsum.photos/seed/album4/300/300",
    },
    {
      title: "Summer Vibes",
      artist: "Coastal Waves",
      image: "https://picsum.photos/seed/album5/300/300",
    },
  ],
  itemToValue: (item) => item.title,
  itemToString: (item) => item.title,
});
</script>

<template>
  <Listbox.Root :collection="collection" orientation="horizontal">
    <Listbox.Label>Select Album</Listbox.Label>
    <Listbox.Content>
      <Listbox.Item v-for="item in collection.items" :key="item.title" :item="item">
        <Listbox.ItemIndicator>
          <CheckIcon />
        </Listbox.ItemIndicator>
        <img :src="item.image" :alt="item.title">
        <span>{{ item.title }}</span>
        <span>{{ item.artist }}</span>
      </Listbox.Item>
    </Listbox.Content>
  </Listbox.Root>
</template>
