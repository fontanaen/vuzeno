<script setup lang="ts">
import { Button } from "@vuzeno/ui/components/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-vue-next";

const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}

const { data: neighbours } = await useAsyncData(`surround-${route.path}`, () => {
  return queryCollectionItemSurroundings("content", route.path);
});

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
  ogTitle: page.value.title,
  ogDescription: page.value.description,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <template v-if="page">
    <div
      data-slot="docs"
      class="flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full"
    >
      <div class="flex min-w-0 flex-1 flex-col">
        <div class="h-(--top-spacing) shrink-0" />
        <div class="mx-auto flex w-full max-w-2xl min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-2">
              <div class="flex items-start justify-between">
                <h1 class="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
                  {{ page.title }}
                </h1>

                <div class="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
                  <DocsCopyPage :page="page" />
                  
                  <Button
                    :disabled="!neighbours?.[0]"
                    variant="secondary"
                    size="icon"
                    class="extend-touch-target ml-auto size-8 shadow-none md:size-7"
                    as-child
                  >
                    <NuxtLink :to="neighbours?.[0]?.path">
                      <ArrowLeftIcon />
                      <span class="sr-only">Previous</span>
                    </NuxtLink>
                  </Button>

                  <Button
                    :disabled="!neighbours?.[1]"
                    variant="secondary"
                    size="icon"
                    class="extend-touch-target size-8 shadow-none md:size-7"
                    as-child
                  >
                    <NuxtLink :to="neighbours?.[1]?.path">
                      <span class="sr-only">Next</span>
                      <ArrowRightIcon />
                    </NuxtLink>
                  </Button>
                </div>
              </div>

              <p v-if="page.description" class="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
                {{ page.description }}
              </p>
            </div>
          </div>

          <ContentRenderer :value="page" class="w-full flex-1 *:data-[slot=alert]:first:mt-0" />

          <div class="flex justify-between gap-2">
            <Button
              v-if="neighbours?.[0]"
              variant="secondary"
              size="sm"
              as-child
            >
              <NuxtLink :to="neighbours?.[0]?.path">
                <ArrowLeftIcon />
                <span>
                  {{ neighbours?.[0]?.title }}
                </span>
              </NuxtLink>
            </Button>

            <Button
              v-if="neighbours?.[1]"
              variant="secondary"
              size="sm"
              class="ml-auto"
              as-child
            >
              <NuxtLink :to="neighbours?.[1]?.path">
                <span>
                  {{ neighbours?.[1]?.title }}
                </span>
                <ArrowRightIcon />
              </NuxtLink>
            </Button>
          </div>
        </div>
      </div>

      <div class="sticky top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[calc(100svh-var(--header-height)-var(--footer-height))] w-72 flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
        <div class="h-(--top-spacing) shrink-0" />
        <div v-if="page.body.toc?.links.length" class="no-scrollbar overflow-y-auto px-8">
          <DocsTableOfContents :toc="page.body.toc" />
          <div class="h-12" />
        </div>
      </div>
    </div>
  </template>
</template>