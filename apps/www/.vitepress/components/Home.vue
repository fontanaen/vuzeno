<script setup lang="ts">
import { Button } from "@vuzeno/ui/components/button";
import { ArrowRightIcon } from "lucide-vue-next";
import { GitHubIcon, XIcon } from "vue3-simple-icons";
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- Decorative floating shapes -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-[10%] w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div class="absolute top-40 right-[15%] w-56 h-56 bg-primary/10 rounded-full blur-3xl animate-float-delayed" />
      <div class="absolute bottom-32 left-[20%] w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float-slow" />
    </div>

    <div class="mx-auto max-w-[1440px] px-6 relative">
      <!-- Hero Section -->
      <section class="max-w-3xl mx-auto py-20 md:py-32 h-[calc(100vh-13rem)]">
        <div class="flex flex-col gap-8 animate-fade-in-up">
            <div class="absolute top-0 right-0 blur-xl hidden md:block">
              <svg class="w-96 h-auto" width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9 13L0 0H4L9 7L14 0H18L9 13Z" fill="#FFB300"/>
                  <path d="M11 0L9 3L7 0H4L9 7L14 0H11Z" fill="#734700"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21 13L22.3333 11H15L22 1H14.2852L12.8555 3H17.9231L11 13H21Z" fill="#FFB300"/>
                  <path d="M15 11H22.3333L23 10H17L21.8571 3L23.2857 1L24 0H20H15L14.2852 1H22L15 11Z" fill="#FFB300"/>
              </svg>
            </div>
          <!-- Badge -->
          <div class="flex items-center gap-3 animate-fade-in-up" style="animation-delay: 100ms">
            <span class="text-sm text-muted-foreground">A shadcn-vue registry</span>
          </div>

          <!-- Title -->
          <div class="flex flex-col gap-4 animate-fade-in-up" style="animation-delay: 200ms">
            <h1 class="text-5xl md:text-7xl font-bold tracking-tight">
              <div class="">
                Vuzeno <span class="text-primary">UI</span>
              </div>
            </h1>
            <p class="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
              Beautiful, accessible components built for 
              <span class="text-foreground font-medium">shadcn-vue</span>. 
              Copy, paste, and make them yours.
            </p>
          </div>

          <div class="flex flex-wrap gap-4 animate-fade-in-up md:flex-row flex-col" style="animation-delay: 300ms">
            <Button as="a" href="/docs/getting-started" size="lg" class="group">
              Get Started
              <ArrowRightIcon class="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" as="a" href="/docs/components/filters" size="lg">
              Browse Components
            </Button>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-12 border-t border-border/50">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-2 text-muted-foreground">
            <span class="font-semibold text-foreground">Vuzeno</span>
            <span>·</span>
            <span class="text-sm">Built with Vue & <a href="https://shadcn-vue.com" target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-primary transition-colors">shadcn-vue</a></span>
          </div>
          
          <div class="flex items-center gap-6">
            <a 
              href="/docs/introduction" 
              class="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </a>
            <a 
              href="/docs/components/filters" 
              class="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Components
            </a>
            <a 
              href="https://github.com/fontanaen/vuzeno" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon class="size-4 fill-foreground" />
            </a>

            <a 
              href="https://x.com/fontanaen11" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon class="size-4 fill-foreground" />
            </a>
          </div>
        </div>
      </footer>
    </div>
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
