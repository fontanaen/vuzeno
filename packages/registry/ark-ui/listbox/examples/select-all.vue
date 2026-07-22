<script setup lang="ts">
import { createListCollection, Listbox, type UseListboxContext } from "@vuzeno/registry/ui/listbox";
import { CheckIcon, MinusIcon } from "lucide-vue-next";

const frameworks = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
    { label: "Next.js", value: "nextjs" },
    { label: "Nuxt.js", value: "nuxtjs" },
    { label: "Remix", value: "remix" },
    { label: "Gatsby", value: "gatsby" },
  ],
});

function handleSelectAll(listbox: UseListboxContext) {
  const isAllSelected = listbox.value.length === frameworks.items.length;

  if (isAllSelected) {
    listbox.setValue([]);
    return;
  }

  listbox.setValue(frameworks.items.map((item) => item.value));
}
</script>

<template>
  <Listbox.Root :collection="frameworks" selection-mode="multiple">
    <Listbox.Context v-slot="listbox">
      <button
        type="button"
        class="flex min-h-10 items-center gap-2 rounded border-none bg-transparent"
        @click="handleSelectAll(listbox)"
      >
        <span
          class="inline-flex size-5 items-center justify-center rounded border border-border bg-transparent text-white not-empty:border-transparent not-empty:bg-primary [&_svg]:size-3.5"
        >
          <CheckIcon v-if="listbox.value.length === frameworks.items.length" />
          <MinusIcon
            v-else-if="listbox.value.length > 0 && listbox.value.length < frameworks.items.length"
          />
        </span>
        <span class="text-sm font-medium leading-5 text-foreground select-none">Select All</span>
      </button>
    </Listbox.Context>

    <Listbox.Content>
      <Listbox.Item v-for="item in frameworks.items" :key="item.value" :item="item">
        <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
        <Listbox.ItemIndicator>
          <CheckIcon />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    </Listbox.Content>
  </Listbox.Root>
</template>
