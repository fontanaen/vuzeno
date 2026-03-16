<script setup lang="ts">
import { Button } from "@vuzeno/ui/components/button";
import { ArrowRightIcon } from "lucide-vue-next";
</script>

<template>
  <div class="w-full h-full max-w-2xl mx-auto">
    <section class="animate-fade-in-up text-center md:text-left">
      <div class="flex justify-center flex-col gap-4 mx-auto mt-20 md:mt-30 relative">
        <div class="absolute top-0 right-0 blur-xl hidden md:block opacity-75 -z-1">
          <svg class="w-96 h-auto" width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9 13L0 0H4L9 7L14 0H18L9 13Z" fill="#FFB300"/>
              <path d="M11 0L9 3L7 0H4L9 7L14 0H11Z" fill="#734700"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21 13L22.3333 11H15L22 1H14.2852L12.8555 3H17.9231L11 13H21Z" fill="#FFB300"/>
              <path d="M15 11H22.3333L23 10H17L21.8571 3L23.2857 1L24 0H20H15L14.2852 1H22L15 11Z" fill="#FFB300"/>
          </svg>
        </div>

        <div class="flex items-center justify-center md:justify-start gap-3 animate-fade-in-up" style="animation-delay: 100ms">
          <span class="text-sm text-muted-foreground">A shadcn-vue registry</span>
        </div>

        <div class="text-7xl font-bold">
          Vuzeno UI
        </div>

        <p class="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed text-balance">
          Beautiful, accessible components built for
          <span class="text-foreground font-medium text-nowrap">shadcn-vue</span>. 
          <br />
          <span>Copy, paste, and make them yours.</span>
        </p>

        <div class="flex justify-center md:justify-start gap-2 mt-4">
          <Button as="a" href="/docs/getting-started" class="animate-in slide-in-from-left-4 duration-750">
            Get Started
            <ArrowRightIcon />
          </Button>

          <Button variant="outline" as="a" href="/docs/components/autocomplete" class="animate-in slide-in-from-bottom-4 duration-750">
            Browse Components
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(3deg);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(-2deg);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 10s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-float-slow {
  animation: float-slow 12s ease-in-out infinite;
  animation-delay: 4s;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.delay-500 {
  animation-delay: 500ms;
}

.delay-1000 {
  animation-delay: 1000ms;
}
</style>