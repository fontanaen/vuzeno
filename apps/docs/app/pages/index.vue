<script setup lang="ts">
import { ArrowRightIcon, BoxesIcon, CodeXmlIcon, FileCodeIcon, LayersIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { siteConfig } from "~/lib/site-config";

const homepageTitle = "Vuzeno — Own the UI you ship";
const homepageDescription = "A shadcn-vue registry for Vue. Install production-ready components with one CLI command — phone fields, filters, calendars, and more. Keep the source.";

const benefits = [
  {
    icon: CodeXmlIcon,
    title: "TypeScript",
    body: "Fully typed props, emits, and composition APIs — inferred as you build.",
  },
  {
    icon: LayersIcon,
    title: "Composition",
    body: "Namespace parts you assemble like Ark UI. No black-box mega-components.",
  },
  {
    icon: BoxesIcon,
    title: "Ready to use",
    body: "Install with one shadcn-vue CLI command. Styled defaults, production-ready.",
  },
  {
    icon: FileCodeIcon,
    title: "Own your code",
    body: "Components land in your repo. Change anything. No package lock-in.",
  },
];

useSeoMeta({
  title: homepageTitle,
  titleTemplate: "",
  description: homepageDescription,
  ogTitle: homepageTitle,
  ogDescription: homepageDescription,
  twitterTitle: homepageTitle,
  twitterDescription: homepageDescription,
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/favicon.ico`,
        description: homepageDescription,
        sameAs: [siteConfig.links.github, siteConfig.links.x],
      }),
    },
  ],
});
</script>

<template>
  <div class="home-scope relative w-full pb-16">
    <section class="relative mx-auto max-w-6xl px-4 pt-12 pb-16">
      <div class="grid items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
        <div class="flex flex-col items-start gap-16 lg:sticky lg:top-24 lg:self-start">
          <div class="flex w-full flex-col items-start gap-4">
            <HomeGithubStars class="animate-in fade-in-0 slide-in-from-bottom-2 duration-500" />

            <div class="space-y-4 animate-in fade-in-0 slide-in-from-bottom-3 duration-500 delay-75">
              <h1 class="max-w-xl text-4xl font-bold tracking-tighter text-balance text-foreground md:text-5xl">
                Your own design system<span class="hero-accent">.</span>
              </h1>
              <p class="max-w-md text-base leading-relaxed text-pretty text-muted-foreground">
                A complete design system based on shadcn-vue and ark-ui. 
                <br />
                Install production-ready components with one CLI command.
              </p>
            </div>

            <div class="grid grid-cols-2 gap-3 w-full sm:flex sm:flex-wrap mt-2 animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-150">
              <Button as-child>
                <NuxtLink to="/docs/getting-started">
                  Get Started
                  <ArrowRightIcon />
                </NuxtLink>
              </Button>
              <Button variant="secondary" as-child>
                <NuxtLink to="/docs/components/phone-field">
                  Browse components
                </NuxtLink>
              </Button>
            </div>
          </div>

          <ul class="grid w-full grid-cols-2 gap-2 animate-in fade-in-0 slide-in-from-bottom-2 duration-500 delay-200">
            <li v-for="benefit in benefits" :key="benefit.title" class="space-y-2 border border-input border-dashed p-4">
              <div class="flex size-9 items-center justify-center rounded-xl border border-border/70 bg-background/60 text-foreground">
                <component :is="benefit.icon" class="size-4" />
              </div>
              <h3 class="text-sm font-semibold tracking-tight text-foreground">
                {{ benefit.title }}
              </h3>
              <p class="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {{ benefit.body }}
              </p>
            </li>
          </ul>
        </div>

        <div class="animate-in fade-in-0 slide-in-from-bottom-3 duration-500 delay-100 min-w-0">
          <ClientOnly>
            <HomeDemoStack />
          </ClientOnly>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-scope {
  --vz-accent: #ffb300;
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
}

.hero-accent {
  color: var(--vz-accent);
}
</style>
