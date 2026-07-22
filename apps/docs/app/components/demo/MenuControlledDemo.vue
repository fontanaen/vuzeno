<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Menu } from "@vuzeno/registry/ui/menu";
import { ChevronDownIcon } from "lucide-vue-next";
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <div class="flex flex-col gap-4">
    <Button variant="outline" size="sm" @click="open = !open">Toggle</Button>
    <Menu.Root v-model:open="open">
      <Menu.Trigger as-child>
        <Button variant="outline" size="sm">
          Actions
          <Menu.Indicator>
            <ChevronDownIcon />
          </Menu.Indicator>
        </Button>
      </Menu.Trigger>
      <Menu.Content>
          <Menu.Item value="edit">Edit</Menu.Item>
          <Menu.Item value="duplicate">Duplicate</Menu.Item>
          <Menu.Item value="archive">Archive</Menu.Item>
          <Menu.Item value="delete">Delete</Menu.Item>
      </Menu.Content>
    </Menu.Root>
  </div>
</template>
