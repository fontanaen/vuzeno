<script setup lang="ts">
import { usePreferredReducedMotion } from "@vueuse/core";
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";

const command = "bunx --bun shadcn-vue@latest add @vuzeno/phone-field";
const COMMAND_DURATION_MS = 1800;
const STEP_DURATION_MS = 1000;

const installLines = ["Resolving @vuzeno/phone-field from the Vuzeno registry", "Installing registry dependencies", "Writing components/ui/phone-field", "Component ready for your Vue app"];

const addedFiles = [
  "components/ui/phone-field/PhoneField.vue",
  "components/ui/phone-field/PhoneFieldInput.vue",
  "components/ui/phone-field/PhoneFieldCountrySelect.vue",
  "components/ui/phone-field/PhoneFieldIndicator.vue",
];

const loaderDots = [
  { id: 1, column: 1, row: 1 },
  { id: 2, column: 2, row: 1 },
  { id: 3, column: 3, row: 1 },
  { id: 4, column: 1, row: 2 },
  { id: 5, column: 2, row: 2 },
  { id: 6, column: 3, row: 2 },
  { id: 7, column: 1, row: 3 },
  { id: 8, column: 2, row: 3 },
  { id: 9, column: 3, row: 3 },
];
const loaderPath = [1, 2, 3, 6, 5, 4, 7, 8, 9, 6, 5, 4, 1];

const terminalBody = ref<HTMLElement>();
const currentStep = ref(-1);
const showAddedFiles = ref(false);
const activeLoaderDot = ref(loaderPath[0]);
const reducedMotion = usePreferredReducedMotion();
const timers: ReturnType<typeof setTimeout>[] = [];
const intervals: ReturnType<typeof setInterval>[] = [];

function queueTimer(callback: () => void, delay: number) {
  const timer = setTimeout(callback, delay);
  timers.push(timer);
}

function queueInterval(callback: () => void, delay: number) {
  const interval = setInterval(callback, delay);
  intervals.push(interval);
}

function isStepVisible(index: number) {
  return showAddedFiles.value || currentStep.value >= index;
}

function isStepComplete(index: number) {
  return showAddedFiles.value || currentStep.value > index;
}

async function scrollTerminalToBottom() {
  await nextTick();

  if (!terminalBody.value) {
    return;
  }

  terminalBody.value.scrollTo({
    top: terminalBody.value.scrollHeight,
    behavior: reducedMotion.value === "reduce" ? "auto" : "smooth",
  });
}

function runInstallSequence() {
  if (reducedMotion.value === "reduce") {
    currentStep.value = installLines.length;
    showAddedFiles.value = true;
    return;
  }

  const startDelay = COMMAND_DURATION_MS + 450;

  for (const [index] of installLines.entries()) {
    queueTimer(
      () => {
        currentStep.value = index;
      },
      startDelay + index * STEP_DURATION_MS,
    );
  }

  queueTimer(
    () => {
      currentStep.value = installLines.length;
      showAddedFiles.value = true;
    },
    startDelay + installLines.length * STEP_DURATION_MS,
  );
}

function runLoaderSequence() {
  if (reducedMotion.value === "reduce") {
    return;
  }

  let pathIndex = 0;

  queueInterval(() => {
    pathIndex = (pathIndex + 1) % loaderPath.length;
    activeLoaderDot.value = loaderPath[pathIndex];
  }, 70);
}

watch([currentStep, showAddedFiles], () => {
  scrollTerminalToBottom();
});

onMounted(() => {
  runLoaderSequence();
  runInstallSequence();
});

onBeforeUnmount(() => {
  for (const timer of timers) {
    clearTimeout(timer);
  }

  for (const interval of intervals) {
    clearInterval(interval);
  }
});
</script>

<template>
  <figure
    class="hero-terminal relative mx-auto w-full overflow-hidden rounded-xl outline-4 outline-border bg-[#0d0d0d] text-[#ededed]"
    aria-label="Terminal installing a Vuzeno component with the shadcn-vue CLI"
  >
    <div ref="terminalBody" class="hero-terminal-body overflow-y-auto p-4 font-mono text-[12px] leading-6 sm:p-6 sm:text-sm">
      <div class="mb-4 overflow-x-auto">
        <pre class="min-w-max"><code
          class="inline-flex items-center"
          :style="{ '--command-length': command.length, '--command-duration': `${COMMAND_DURATION_MS}ms` }"
        ><span class="select-none text-[#7c7c7c]">$ </span><span class="hero-terminal-command">{{ command }}</span><span class="hero-terminal-cursor" aria-hidden="true" /></code></pre>
      </div>

      <ul class="space-y-0.5 text-[#a3a3a3]">
        <li
          v-for="(line, index) in installLines"
          :key="line"
          class="hero-terminal-line flex items-start gap-2"
          :class="{ 'hero-terminal-line--visible': isStepVisible(index) }"
        >
          <span v-if="isStepComplete(index)" class="shrink-0 text-primary">✓</span>
          <span v-else class="hero-terminal-loader mt-2 shrink-0" aria-hidden="true">
            <span
              v-for="dot in loaderDots"
              :key="dot.id"
              :class="{ 'hero-terminal-loader-dot--active': dot.id === activeLoaderDot }"
              :style="{ '--dot-column': dot.column, '--dot-row': dot.row }"
            />
          </span>
          <span>{{ line }}</span>
        </li>
      </ul>

      <div v-if="showAddedFiles" class="hero-terminal-files mt-5 text-[#a3a3a3]">
        <p class="mb-2 text-[#ededed]">4 files added</p>

        <div class="space-y-0">
          <div
            v-for="file in addedFiles"
            :key="file"
            class="grid grid-cols-[1rem_minmax(0,1fr)] gap-1"
          >
            <span class="text-[#7ddc8a]">+</span>
            <span class="truncate">{{ file }}</span>
          </div>
        </div>
      </div>
    </div>
  </figure>
</template>

<style scoped>
.hero-terminal-body {
  max-height: min(34rem, 68vh);
  scrollbar-width: none;
}

.hero-terminal-body::-webkit-scrollbar {
  display: none;
}

.hero-terminal-command {
  display: inline-block;
  width: 0;
  max-width: calc(var(--command-length) * 1ch);
  overflow: hidden;
  white-space: nowrap;
  animation: terminal-command-type var(--command-duration) steps(var(--command-length)) 180ms forwards;
}

.hero-terminal-cursor {
  display: inline-block;
  width: 0.5rem;
  height: 1.1em;
  margin-left: 0.125rem;
  background: var(--vz-accent);
  animation: terminal-cursor-blink 900ms steps(2, jump-none) infinite;
}

.hero-terminal-line {
  opacity: 0;
  transform: translateY(6px);
}

.hero-terminal-line--visible {
  animation: terminal-line-in 420ms ease forwards;
}

.hero-terminal-loader {
  display: inline-grid;
  width: 0.5rem;
  height: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.hero-terminal-loader span {
  width: 0.15rem;
  height: 0.15rem;
  align-self: center;
  background: var(--vz-accent);
  grid-column: var(--dot-column);
  grid-row: var(--dot-row);
  justify-self: center;
  opacity: 0.25;
}

.hero-terminal-loader-dot--active {
  opacity: 1 !important;
}

.hero-terminal-files {
  opacity: 0;
  transform: translateY(8px);
  animation: terminal-line-in 420ms ease forwards;
}

@keyframes terminal-command-type {
  from {
    width: 0;
  }
  to {
    width: calc(var(--command-length) * 1ch);
  }
}

@keyframes terminal-cursor-blink {
  50% {
    opacity: 0;
  }
}

@keyframes terminal-line-in {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-terminal-command {
    width: auto;
    max-width: none;
    animation: none;
  }

  .hero-terminal-cursor {
    animation: none;
  }

  .hero-terminal-line {
    opacity: 1;
    transform: none;
    animation: none;
  }

  .hero-terminal-loader span {
    opacity: 1;
    animation: none;
  }

  .hero-terminal-files {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
</style>
