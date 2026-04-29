<script setup lang="ts">
import { Button } from "@vuzeno/ui/components/button";
import { ArrowRightIcon } from "lucide-vue-next";

useReveal();
</script>

<template>
  <section class="w-full">
    <div class="max-w-[1440px] mx-auto px-4 md:px-8 pt-10 md:pt-20 pb-16 md:pb-24">
      <div class="flex flex-col gap-10 items-center">
        <div class="flex flex-col gap-6 w-full sm:w-3xl items-center">
          <h1
            class="hero-title text-center font-bold text-foreground animate-in fade-in-0 blur-in-md duration-700"
          >
            A Vue component registry<span class="hero-accent">.</span>
          </h1>

          <p class="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed text-pretty reveal text-center" style="--i: 2">
            Vuzeno extends <span class="text-foreground">shadcn-vue</span> with production-ready components
            built for Vue.
          </p>

          <div class="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:items-center sm:justify-center reveal" style="--i: 3">
            <Button variant="secondary" as="a" href="/docs/components/phone-field">
              Browse components
            </Button>

            <Button as="a" href="/docs/getting-started">
              Get Started
              <ArrowRightIcon />
            </Button>
          </div>
        </div>

        <div class="reveal w-full sm:w-2xl mx-auto" style="--i: 4">
          <HomeHeroTerminal />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-title {
  font-size: clamp(2.75rem, 3.5vw, 5rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
}

.hero-accent {
  color: var(--vz-accent);
}
</style>
