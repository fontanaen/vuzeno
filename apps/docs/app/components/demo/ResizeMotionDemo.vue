<script setup lang="ts">
import { ResizeMotion } from "@vuzeno/registry/ui/resize-motion";
import { Button } from "@vuzeno/ui/components/button";
import { Dialog, DialogContent, DialogTrigger } from "@vuzeno/ui/components/dialog";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@vuzeno/ui/components/item";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "lucide-vue-next";
import { ref } from "vue";
import { DiscordIcon, FigmaIcon, GitHubIcon, GoogleCalendarIcon, IntercomIcon, LinearIcon, NotionIcon, StripeIcon } from "vue3-simple-icons";

const currentStep = ref(0);

const steps = ["Workspace", "Profile", "Tools", "Done"];

const preferences = ["Design reviews", "Planning notes", "Client handoff"];
const imports = [
  {
    id: "linear",
    name: "Linear",
    description: "Issues and project updates",
    icon: LinearIcon,
  },
  {
    id: "github",
    name: "GitHub",
    description: "Repositories and pull requests",
    icon: GitHubIcon,
  },
  {
    id: "notion",
    name: "Notion",
    description: "Product briefs and planning docs",
    icon: NotionIcon,
  },
  {
    id: "figma",
    name: "Figma",
    description: "Design files and comments",
    icon: FigmaIcon,
  },
  {
    id: "discord",
    name: "Discord",
    description: "Community channels and launch updates",
    icon: DiscordIcon,
  },
  {
    id: "google-calendar",
    name: "Google Calendar",
    description: "Milestones and team events",
    icon: GoogleCalendarIcon,
  },
  {
    id: "stripe",
    name: "Stripe",
    description: "Customer and billing updates",
    icon: StripeIcon,
  },
  {
    id: "intercom",
    name: "Intercom",
    description: "Customer conversations",
    icon: IntercomIcon,
  },
];
const selectedImports = ref(["linear", "github", "figma"]);

function isImportSelected(id: string) {
  return selectedImports.value.includes(id);
}

function toggleImport(id: string) {
  if (isImportSelected(id)) {
    selectedImports.value = selectedImports.value.filter((selectedId) => selectedId !== id);
    return;
  }

  selectedImports.value = [...selectedImports.value, id];
}

function goToPreviousStep() {
  currentStep.value = Math.max(currentStep.value - 1, 0);
}

function goToNextStep() {
  currentStep.value = Math.min(currentStep.value + 1, steps.length - 1);
}
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <Button variant="outline">
        Open Dialog
      </Button>
    </DialogTrigger>

    <DialogContent class="overflow-hidden sm:max-w-md py-4 px-0 outline-4 outline-border">
      <ResizeMotion animation="spring" :duration="350" viewport-overflow="hidden">
        <div v-if="currentStep === 0" key="workspace" class="space-y-5 animate-in zoom-in-95 fade-in-0 blur-in-sm duration-300">
          <ul class="flex gap-1.5 px-4">
            <li v-for="(_, index) in steps" :key="index" class="h-1 flex-1 rounded-full bg-muted">
              <span v-if="index <= currentStep" class="block h-full rounded-full bg-foreground" />
            </li>
          </ul>

          <div class="space-y-2 px-4">
            <div class="space-y-1">
              <h3 class="text-2xl font-bold tracking-tight">
                Create your workspace
              </h3>
              <p class="text-sm text-muted-foreground">
                Start with a calm, focused onboarding step.
              </p>
            </div>
          </div>

          <p class="px-4 text-sm">
            Acme Studio
          </p>
        </div>

        <div v-else-if="currentStep === 1" key="profile" class="space-y-5 animate-in zoom-in-95 fade-in-0 blur-in-sm duration-300">
          <ul class="flex gap-1.5 px-4">
            <li v-for="(_, index) in steps" :key="index" class="h-1 flex-1 rounded-full bg-muted">
              <span v-if="index <= currentStep" class="block h-full rounded-full bg-foreground" />
            </li>
          </ul>

          <div class="space-y-2 px-4">
            <div class="space-y-1">
              <h3 class="text-2xl font-bold tracking-tight">
                Tell us how you work
              </h3>
              <p class="text-sm text-muted-foreground">
                A medium step with a few short preferences.
              </p>
            </div>
          </div>

          <p class="px-4 text-sm">
            Design team, weekly planning, async updates
          </p>

          <div class="grid gap-2 px-4">
            <div v-for="item in preferences" :key="item" class="rounded-md bg-muted/50 px-4 py-3 text-sm">
              {{ item }}
            </div>
          </div>
        </div>

        <div v-else-if="currentStep === 2" key="tools" class="space-y-5 animate-in zoom-in-95 fade-in-0 blur-in-sm duration-300">
          <ul class="flex gap-1.5 px-4">
            <li v-for="(_, index) in steps" :key="index" class="h-1 flex-1 rounded-full bg-muted">
              <span v-if="index <= currentStep" class="block h-full rounded-full bg-foreground" />
            </li>
          </ul>

          <div class="space-y-2 px-4">
            <div class="space-y-1">
              <h3 class="text-2xl font-bold tracking-tight">
                Connect your tools
              </h3>
              <p class="text-sm text-muted-foreground">
                This step is intentionally larger, but only the tool list scrolls.
              </p>
            </div>
          </div>

          <p class="px-4 text-sm">
            Choose the integrations you want to sync first.
          </p>

          <div class="relative space-y-2">
            <div class="pointer-events-none absolute inset-x-0 top-0 z-10 h-5 bg-linear-to-b from-background via-background/80 to-transparent" />
            <div class="max-h-72 space-y-2 overflow-y-auto py-4 px-4 pr-5">
              <Item
                v-for="tool in imports"
                :key="tool.id"
                as="button"
                type="button"
                :data-selected="isImportSelected(tool.id) ? '' : undefined"
                class="w-full cursor-pointer flex-nowrap text-left hover:bg-muted/70 data-selected:border-primary/40 data-selected:bg-primary/5"
                @click="toggleImport(tool.id)"
              >
                <ItemMedia variant="icon" class="bg-background">
                  <component :is="tool.icon" class="size-4" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{{ tool.name }}</ItemTitle>
                  <ItemDescription>{{ tool.description }}</ItemDescription>
                </ItemContent>
                <CheckIcon v-if="isImportSelected(tool.id)" class="size-4 shrink-0 text-primary" />
              </Item>
            </div>
            <div class="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-6 bg-linear-to-t from-background via-background/80 to-transparent" />
          </div>
        </div>

        <div v-else key="done" class="space-y-5 animate-in zoom-in-95 fade-in-0 blur-in-sm duration-300">
          <ul class="flex gap-1.5 px-4">
            <li v-for="(_, index) in steps" :key="index" class="h-1 flex-1 rounded-full bg-muted">
              <span v-if="index <= currentStep" class="block h-full rounded-full bg-foreground" />
            </li>
          </ul>

          <div class="space-y-2 px-4">
            <div class="space-y-1">
              <h3 class="text-2xl font-bold tracking-tight">
                You are ready to go
              </h3>
              <p class="text-sm text-muted-foreground">
                The final step returns to a compact height.
              </p>
            </div>
          </div>

          <p class="px-4 text-sm">
            Your workspace is configured and ready for the team.
          </p>
        </div>
      </ResizeMotion>

      <div class="flex justify-between gap-2 px-4">
        <Button variant="outline" :disabled="currentStep === 0" @click="goToPreviousStep">
          <ArrowLeftIcon class="w-4 h-4" />
          Previous
        </Button>
        <Button :disabled="currentStep === steps.length - 1" @click="goToNextStep">
          Next
          <ArrowRightIcon class="w-4 h-4" />
        </Button>
      </div>
    </DialogContent>
  </Dialog>
</template>
