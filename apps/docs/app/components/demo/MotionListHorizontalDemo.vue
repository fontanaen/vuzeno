<script setup lang="ts">
import { MotionList, MotionListItem } from "@vuzeno/registry/ui/motion-list";
import { Button } from "@vuzeno/ui/components/button";
import { PlusIcon, XIcon } from "lucide-vue-next";
import { ref } from "vue";

type Tab = {
  id: string;
  label: string;
};

const tabs = ref<Tab[]>([
  { id: "overview", label: "Overview" },
  { id: "issues", label: "Issues" },
  { id: "pull-requests", label: "Pull requests" },
]);

const counter = ref(1);

function addTab() {
  tabs.value.push({
    id: `tab-${counter.value++}`,
    label: `Tab ${tabs.value.length + 1}`,
  });
}

function removeTab(id: string) {
  tabs.value = tabs.value.filter((tab) => tab.id !== id);
}
</script>

<template>
  <div class="w-full max-w-2xl mx-auto flex flex-col gap-3">
    <MotionList
      orientation="horizontal"
      class="flex flex-row items-center gap-2 overflow-x-auto"
    >
      <MotionListItem
        v-for="tab in tabs"
        :key="tab.id"
        :value="tab.id"
        class="group inline-flex items-center gap-1 rounded-full border bg-background px-3 py-1 text-xs whitespace-nowrap"
      >
        <span>{{ tab.label }}</span>
        <button
          type="button"
          class="grid place-items-center rounded-full p-0.5 text-muted-foreground hover:bg-muted hover:text-foreground"
          @click="removeTab(tab.id)"
        >
          <XIcon class="size-3" />
        </button>
      </MotionListItem>
    </MotionList>

    <Button size="sm" variant="outline" class="w-fit" @click="addTab">
      <PlusIcon class="size-3.5" /> Add tab
    </Button>
  </div>
</template>
