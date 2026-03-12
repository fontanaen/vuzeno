<script setup lang="ts">
import { Button } from "@vuzeno/ui/components/button";
import { ButtonGroup, ButtonGroupSeparator } from "@vuzeno/ui/components/button-group";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@vuzeno/ui/components/dropdown-menu";
import { CheckIcon, ChevronDownIcon, CopyIcon } from "lucide-vue-next";
import { onMounted, ref } from "vue";
import { ClaudeIcon, MarkdownIcon, OpenAiIcon } from "vue3-simple-icons";
import DocNavigationButtons from "./DocNavigationButtons.vue";

const aiProviders = [
  { name: "ChatGPT", icon: OpenAiIcon, url: "https://chatgpt.com/?hints=search&prompt=" },
  { name: "Claude", icon: ClaudeIcon, url: "https://claude.ai/new?q=" },
];

const copied = ref(false);

const currentURL = ref<string>("");

function removeHtmlExtension(pathSegment: string): string {
  const lastSlashIndex = pathSegment.lastIndexOf("/");
  const lastDotIndex = pathSegment.lastIndexOf(".");

  if (lastDotIndex > lastSlashIndex && lastDotIndex !== -1 && pathSegment.endsWith(".html")) {
    return pathSegment.slice(0, lastDotIndex);
  }

  return pathSegment;
}

function cleanUrl(url: string): string {
  const { origin, pathname } = new URL(url);

  const pathnameWithoutTrailingSlash = pathname.replace(/\/+$/, "");

  if (pathname.length > 0) {
    return origin + removeHtmlExtension(pathnameWithoutTrailingSlash);
  }
  return origin;
}

function resolveMarkdownPageURL(url: string): string {
  const cleanedURL = cleanUrl(url);

  if (cleanedURL === window.location.origin) {
    return `${cleanedURL}/index.md`;
  }
  return `${cleanedURL}.md`;
}

function copyAsMarkdown() {
  fetch(resolveMarkdownPageURL(currentURL.value))
    .then((r) => r.text())
    .then((text) => navigator.clipboard.writeText(text))
    .then(() => {
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2000);
    })
    .catch((e) => console.error("❌ Error:", e));
}

function viewAsMarkdown() {
  window.open(resolveMarkdownPageURL(currentURL.value), "_blank");
}

function openInAI(provider: (typeof aiProviders)[0]) {
  const markdownUrl = resolveMarkdownPageURL(currentURL.value);
  const prompt = `Read from ${markdownUrl} so I can ask questions about it.`;
  window.open(provider.url + encodeURIComponent(prompt), "_blank");
}

onMounted(() => {
  currentURL.value = window.location.origin + window.location.pathname;
});
</script>

<template>
  <div :class="[
    'w-screen z-20 fixed p-4 bg-background left-0 bottom-0 flex items-center justify-between gap-2',
    'md:w-auto md:p-0 md:bg-transparent md:absolute md:bottom-auto md:top-0 md:right-0 md:justify-end'
  ]">
    <ButtonGroup>
      <Button variant="secondary" size="sm" class="text-xs [&>svg]:size-3 h-7" @click="copyAsMarkdown">
        <CopyIcon v-if="!copied" class="ml-auto" />
        <CheckIcon v-else class="ml-auto" />
        Copy page
      </Button>

      <ButtonGroupSeparator class="dark:bg-muted-foreground/30" />
      
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="secondary" size="icon-sm" class="size-7">
            <ChevronDownIcon class="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem @click="viewAsMarkdown">
            <MarkdownIcon class="size-4" />
            View as Markdown
          </DropdownMenuItem>

          <DropdownMenuItem v-for="provider in aiProviders" :key="provider.name" @click="openInAI(provider)">
            <component :is="provider.icon" class="size-4" />
            Open in {{ provider.name }}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>

    <DocNavigationButtons />
  </div>
</template>