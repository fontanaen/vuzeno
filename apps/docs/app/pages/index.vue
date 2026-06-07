<script setup lang="ts">
import { siteConfig } from "~/lib/site-config";

const homepageTitle = "Vuzeno — shadcn-vue Component Registry for Vue | Free";
const homepageDescription =
  "Install production-ready Vue components — phone fields, filters, galleries — with one shadcn-vue CLI command. Free, open source, TypeScript-first. Get started in 2 minutes.";

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
        description:
          "Open-source shadcn-vue registry with 14 production-ready Vue components for Vue 3.5+.",
        sameAs: [siteConfig.links.github, siteConfig.links.x],
      }),
    },
  ],
});
</script>

<template>
  <div class="w-full home-scope">
    <HomeHero />
  </div>
</template>

<style scoped>
.home-scope {
  --vz-accent: #ffb300;
}

:deep(.reveal) {
  opacity: 0;
  transform: translateY(12px);
  will-change: opacity, transform;
}

:deep(.reveal[data-visible="true"]) {
  animation: home-reveal 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: calc(var(--i, 0) * 90ms);
}

@keyframes home-reveal {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  :deep(.reveal),
  :deep(.reveal[data-visible="true"]) {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
  }
}
</style>
