<script setup lang="ts">
import type { Toc } from "@nuxt/content";
import { useIntersectionObserver } from "@vueuse/core";
import { Button } from "@vuzeno/registry/ui/button";
import { Menu } from "@vuzeno/registry/ui/menu";
import { cn } from "cnfast";
import { MenuIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<{
    toc: Toc;
    variant?: "dropdown" | "list";
    class?: HTMLAttributes["class"];
  }>(),
  {
    variant: "list",
  },
);

const open = ref(false);
const { path } = toRefs(useRoute());

const activeHeading = ref("");

const tocLinks = computed(() => {
  const result: Toc["links"] = [];

  for (const node of props.toc.links) {
    const { children, ...nodeWithoutChildren } = node;
    result.push(nodeWithoutChildren);

    if (children && children.length > 0) {
      for (const child of children) {
        const { children: _, ...childWithoutChildren } = child;
        result.push(childWithoutChildren);
      }
    }
  }

  return result;
});

onMounted(() => {
  const elements = tocLinks.value.map((link) => document.getElementById(link.id));
  const observers = useIntersectionObserver(
    elements,
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeHeading.value = entry.target.id;
        }
      }
    },
    { rootMargin: "0% 0% -80% 0%" },
  );

  onBeforeUnmount(() => {
    observers.stop();
  });
});
</script>

<template>
  <Menu.Root v-if="variant === 'dropdown'" v-model:open="open" :positioning="{ placement: 'bottom-start' }">
    <Menu.Trigger as-child>
      <Button
        variant="outline"
        size="sm"
        :class="cn('h-8 md:h-7', props.class)"
      >
        <MenuIcon /> On This Page
      </Button>
    </Menu.Trigger>
    <Menu.Content
      class="no-scrollbar max-h-[70svh]"
    >
      <Menu.Item
        v-for="item in tocLinks"
        :key="item.id"
        :value="item.id"
        as-child
        :class="cn(
          'data-[depth=3]:pl-6 data-[depth=4]:pl-8',
        )"
        :data-depth="item.depth"
        @click="open = true"
      >
        <a :href="`${path}#${item.id}`">{{ item.text }}</a>
      </Menu.Item>
    </Menu.Content>
  </Menu.Root>

  <div v-else :class="cn('flex flex-col gap-2 p-4 pt-0 text-sm', props.class)">
    <p v-if="tocLinks.length" class="text-muted-foreground bg-background sticky top-0 h-6 text-xs">
      On This Page
    </p>
    <a
      v-for="item in tocLinks"
      :key="item.id"
      :href="`${path}#${item.id}`"
      class="text-muted-foreground hover:text-foreground data-[active=true]:text-foreground text-[0.8rem] no-underline transition-colors data-[depth=3]:pl-4 data-[depth=4]:pl-6"
      :data-active="item.id === activeHeading"
      :data-depth="item.depth"
    >
      {{ item.text }}
    </a>
  </div>
</template>
