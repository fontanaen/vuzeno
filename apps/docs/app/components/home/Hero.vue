<script setup lang="ts">
import { useMediaQuery, usePreferredReducedMotion } from "@vueuse/core";
import { Button } from "@vuzeno/ui/components/button";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, MoveRightIcon, PauseIcon, PlayIcon } from "lucide-vue-next";
import { computed, defineAsyncComponent, onMounted, ref } from "vue";

type FeaturedItem = {
  name: string;
  filename: string;
  href: string;
  component: ReturnType<typeof defineAsyncComponent>;
};

const featured: FeaturedItem[] = [
  {
    name: "Autocomplete",
    filename: "autocomplete.vue",
    href: "/docs/components/autocomplete",
    component: defineAsyncComponent(() => import("~/components/demo/AutocompleteDemo.vue")),
  },
  {
    name: "Phone Field",
    filename: "phone-field.vue",
    href: "/docs/components/phone-field",
    component: defineAsyncComponent(() => import("~/components/demo/PhoneFieldDemo.vue")),
  },
  {
    name: "Time Field",
    filename: "time-field.vue",
    href: "/docs/components/time-field",
    component: defineAsyncComponent(() => import("~/components/demo/TimeFieldDemo.vue")),
  },
  {
    name: "Password Field",
    filename: "password-field.vue",
    href: "/docs/components/password-field",
    component: defineAsyncComponent(() => import("~/components/demo/PasswordFieldDemo.vue")),
  },
  {
    name: "Color",
    filename: "color.vue",
    href: "/docs/components/color",
    component: defineAsyncComponent(() => import("~/components/demo/ColorDemo.vue")),
  },
];

const AUTOPLAY_MS = 4500;

const index = ref(0);
const direction = ref<1 | -1>(1);
const isPaused = ref(false);
const isHovered = ref(false);

const reducedMotion = usePreferredReducedMotion();
useReveal();

const animated = computed(() => reducedMotion.value !== "reduce");

const noHover = useMediaQuery("(hover: none)");

const current = computed(() => featured[index.value]!);
const indexLabel = computed(() => `${String(index.value + 1).padStart(2, "0")} / ${String(featured.length).padStart(2, "0")}`);

function go(next: number, dir: 1 | -1) {
  direction.value = dir;
  const length = featured.length;
  index.value = ((next % length) + length) % length;
}

function next() {
  go(index.value + 1, 1);
}

function prev() {
  go(index.value - 1, -1);
}

function goTo(i: number) {
  if (i === index.value) {
    return;
  }
  go(i, i > index.value ? 1 : -1);
}

const progressPaused = computed(() => isPaused.value || isHovered.value);

function onProgressEnd() {
  if (!animated.value || progressPaused.value) {
    return;
  }
  next();
}

function togglePlay() {
  isPaused.value = !isPaused.value;
}

onMounted(() => {
  if (noHover.value) {
    isPaused.value = true;
  }
});
</script>

<template>
  <section class="w-full">
    <div class="max-w-[1440px] mx-auto px-4 md:px-8 pt-10 md:pt-20 pb-16 md:pb-24">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div class="lg:col-span-7 flex flex-col gap-8">
          <div class="flex items-center gap-4 reveal" style="--i: 0">
            <span class="font-bold text-[11px] uppercase tracking-[0.22em] text-muted-foreground whitespace-nowrap">
              Registry · vuzeno/ui
            </span>
            <span class="h-px flex-1 bg-border" />
          </div>

          <h1
            class="hero-title font-bold text-foreground text-balance reveal"
            style="--i: 1"
          >
            A Vue component<br />registry<span class="hero-accent">.</span>
          </h1>

          <p class="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed text-pretty reveal" style="--i: 2">
            Vuzeno extends <span class="text-foreground">shadcn-vue</span> with higher-complexity, production-ready components —
            composable, accessible, and Tailwind-native. Built for the Vue ecosystem that was missing them.
          </p>

          <div class="flex flex-wrap items-center gap-3 reveal" style="--i: 3">
            <Button as="a" href="/docs/getting-started">
              Get Started
              <ArrowRightIcon />
            </Button>

            <Button variant="outline" as="a" :href="current.href">
              Browse components
            </Button>
          </div>
        </div>

        <div
          class="lg:col-span-5 reveal"
          style="--i: 4"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
          @focusin="isHovered = true"
          @focusout="isHovered = false"
        >
          <figure
            class="relative aspect-4/5 border border-border rounded-xl bg-background flex flex-col overflow-hidden"
            aria-roledescription="carousel"
            :aria-label="`Featured component: ${current.name}`"
          >
            <figcaption class="relative z-10 flex items-center justify-between px-4 py-3 border-b border-border/60 bg-background">
              <span class="tabular-nums text-sm font-medium tracking-tight text-muted-foreground whitespace-nowrap">
                {{ indexLabel }}
              </span>
              <NuxtLink
                :to="current.href"
                class="flex items-center gap-1 text-sm font-medium tracking-tight text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {{ current.name }} <MoveRightIcon class="size-4" />
              </NuxtLink>
            </figcaption>

            <!-- Demo stage with slide transition -->
            <div class="relative flex-1 overflow-hidden">
              <Transition
                :name="animated ? (direction === 1 ? 'slide-left' : 'slide-right') : 'none'"
                mode="out-in"
              >
                <div
                  :key="current.name"
                  class="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 py-8"
                  :aria-roledescription="'slide'"
                  :aria-label="`${index + 1} of ${featured.length}: ${current.name}`"
                >
                  <span class="text-sm font-medium tracking-tight text-muted-foreground">
                    {{ current.name }}
                  </span>
                  <ClientOnly>
                    <component :is="current.component" />
                  </ClientOnly>
                </div>
              </Transition>

              <span
                :key="index"
                aria-hidden="true"
                class="hero-progress absolute left-0 right-0 bottom-0 h-0.5 origin-left bg-(--vz-accent)"
                :class="{ 'hero-progress--paused': progressPaused, 'hero-progress--disabled': !animated }"
                :style="{ animationDuration: `${AUTOPLAY_MS}ms` }"
                @animationend="onProgressEnd"
              />
            </div>

            <figcaption class="relative z-10 flex items-center justify-between gap-2 px-2 py-2 border-t border-border/60 bg-background">
              <button
                type="button"
                class="hero-ctrl"
                :aria-label="isPaused ? 'Resume autoplay' : 'Pause autoplay'"
                @click="togglePlay"
              >
                <PauseIcon v-if="!isPaused" class="size-3.5" />
                <PlayIcon v-else class="size-3.5" />
              </button>

              <div class="flex items-center gap-1.5" role="tablist" aria-label="Select a featured component">
                <button
                  v-for="(item, i) in featured"
                  :key="item.name"
                  type="button"
                  role="tab"
                  :aria-selected="i === index"
                  :aria-label="item.name"
                  class="hero-dot"
                  :class="{ 'hero-dot--active': i === index }"
                  @click="goTo(i)"
                />
              </div>

              <div class="flex items-center gap-1">
                <button
                  type="button"
                  class="hero-ctrl"
                  aria-label="Previous component"
                  @click="prev"
                >
                  <ChevronLeftIcon class="size-4" />
                </button>
                <button
                  type="button"
                  class="hero-ctrl"
                  aria-label="Next component"
                  @click="next"
                >
                  <ChevronRightIcon class="size-4" />
                </button>
              </div>
            </figcaption>

            <span aria-hidden="true" class="absolute -top-px left-0 h-px w-10 bg-(--vz-accent) z-20" />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-title {
  font-size: clamp(2.75rem, 7.5vw, 6rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
}

.hero-accent {
  color: var(--vz-accent);
}

/* Carousel controls */
.hero-ctrl {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 0;
  color: var(--muted-foreground);
  transition: color 150ms ease, background-color 150ms ease;
}

.hero-ctrl:hover,
.hero-ctrl:focus-visible {
  color: var(--foreground);
  background-color: color-mix(in oklab, var(--foreground) 6%, transparent);
  outline: none;
}

.hero-dot {
  width: 1.25rem;
  height: 2px;
  background-color: color-mix(in oklab, var(--muted-foreground) 40%, transparent);
  transition: background-color 250ms ease, width 250ms ease;
}

.hero-dot:hover {
  background-color: color-mix(in oklab, var(--foreground) 50%, transparent);
}

.hero-dot--active {
  background-color: var(--vz-accent);
  width: 1.75rem;
}

/* Slide transitions */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 400ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 400ms cubic-bezier(0.22, 1, 0.36, 1);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(24px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-24px);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-24px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(24px);
}

.hero-progress {
  animation-name: hero-progress;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
  transform-origin: left center;
}

.hero-progress--paused {
  animation-play-state: paused;
}

.hero-progress--disabled {
  animation: none;
  transform: scaleX(0);
}

@keyframes hero-progress {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active,
  .hero-ctrl,
  .hero-dot {
    transition: none !important;
  }
  .hero-progress {
    animation: none !important;
    transform: scaleX(0);
  }
}
</style>
