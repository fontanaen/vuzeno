<script setup lang="ts">
import { Check, Copy, Star } from "@lucide/vue";
import { Clipboard } from "@vuzeno/registry/ui/clipboard";
import { InputGroup } from "@vuzeno/registry/ui/input-group";
import { ref } from "vue";

const url = "https://x.com/shadcn";
const favorite = ref(false);
</script>

<template>
  <div class="grid w-full max-w-sm gap-6">
    <Clipboard.Root :default-value="url" class="contents">
      <InputGroup.Root>
        <InputGroup.Input :model-value="url" readonly />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button aria-label="Copy" title="Copy" size="icon-xs" as-child>
            <Clipboard.Trigger>
              <Clipboard.Indicator />
            </Clipboard.Trigger>
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup.Root>
    </Clipboard.Root>

    <InputGroup.Root>
      <InputGroup.Input placeholder="Type to search..." />
      <InputGroup.Addon align="inline-end">
        <InputGroup.Button variant="secondary">Search</InputGroup.Button>
      </InputGroup.Addon>
    </InputGroup.Root>
    
    <InputGroup.Root>
      <InputGroup.Input placeholder="Bookmark this page" />
      <InputGroup.Addon align="inline-end">
        <InputGroup.Button size="icon-xs" @click="favorite = !favorite">
          <Star
            :class="favorite ? 'fill-yellow-600 stroke-yellow-600' : undefined"
          />
        </InputGroup.Button>
      </InputGroup.Addon>
    </InputGroup.Root>
  </div>
</template>
