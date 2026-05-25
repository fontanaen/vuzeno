<script setup lang="ts">
import { MotionList, MotionListItem } from "@vuzeno/registry/ui/motion-list";
import { Input } from "@vuzeno/ui/components/input";
import { XIcon } from "lucide-vue-next";
import { ref } from "vue";

type Tag = {
  id: string;
  label: string;
};

const tags = ref<Tag[]>([
  { id: "design", label: "design" },
  { id: "engineering", label: "engineering" },
  { id: "product", label: "product" },
  { id: "research", label: "research" },
  { id: "marketing", label: "marketing" },
  { id: "support", label: "support" },
]);

const newTag = ref("");
const counter = ref(1);

function addTag() {
  const value = newTag.value.trim();
  if (!value) {
    return;
  }
  tags.value.push({ id: `tag-${counter.value++}`, label: value });
  newTag.value = "";
}

function removeTag(id: string) {
  tags.value = tags.value.filter((tag) => tag.id !== id);
}
</script>

<template>
  <div class="w-full max-w-md mx-auto flex flex-col gap-3">
    <Input
      v-model="newTag"
      placeholder="Add tag and press enter"
      @keyup.enter="addTag"
    />

    <MotionList
      orientation="horizontal"
      class="data-[orientation=horizontal]:flex-wrap gap-2"
    >
      <MotionListItem
        v-for="tag in tags"
        :key="tag.id"
        :value="tag.id"
        class="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs"
      >
        <span>{{ tag.label }}</span>
        <button
          type="button"
          class="grid place-items-center rounded-full p-0.5 text-muted-foreground hover:bg-background hover:text-foreground"
          @click="removeTag(tag.id)"
        >
          <XIcon class="size-3" />
        </button>
      </MotionListItem>
    </MotionList>
  </div>
</template>
