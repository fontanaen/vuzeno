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
