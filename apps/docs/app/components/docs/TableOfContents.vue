<script setup lang="ts">
import { MenuIcon } from "@lucide/vue";
import type { Toc as ContentToc } from "@nuxt/content";
import { Button } from "@vuzeno/registry/ui/button";
import { Menu } from "@vuzeno/registry/ui/menu";
import { ScrollSpy } from "@vuzeno/registry/ui/scroll-spy";
import { Toc } from "@vuzeno/registry/ui/toc";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<{
    toc: ContentToc;
    variant?: "dropdown" | "list";
    class?: HTMLAttributes["class"];
  }>(),
  {
    variant: "list",
  },
);

const open = ref(false);
const { path } = toRefs(useRoute());

const tocLinks = computed(() => {
  const result: ContentToc["links"] = [];

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

  <ScrollSpy.Root
    v-else
    :offset="0.2"
    :class="cn('p-4 pt-0', props.class)"
  >
    <ScrollSpy.Target
      v-for="item in tocLinks"
      :key="`${path}-${item.id}`"
      :value="item.id"
    />

    <Toc.Root
      v-if="tocLinks.length"
      turn="rounded"
      indicator="fill"
    >
      <Toc.Title class="bg-background sticky top-0">
        On This Page
      </Toc.Title>
      <Toc.List>
        <Toc.Indicator />
        <Toc.Item
          v-for="item in tocLinks"
          :key="item.id"
          :value="item.id"
          :depth="item.depth"
        >
          <Toc.Link
            :href="`${path}#${item.id}`"
            class="data-active:text-foreground"
          >
            {{ item.text }}
          </Toc.Link>
        </Toc.Item>
      </Toc.List>
    </Toc.Root>
  </ScrollSpy.Root>
</template>
