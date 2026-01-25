<script setup lang="ts">
import { Separator } from "@vuetella/ui/components/separator";
import type { FunctionalComponent } from "vue";

const props = defineProps<{
  component: FunctionalComponent;
}>();
</script>

<template>
    <div class="flex flex-col gap-0 border border-border rounded-xl overflow-hidden">
        <div class="flex items-center justify-center bg-background px-4 py-12 not-prose min-h-40">
            <component :is="component" />
        </div>
        <Separator />
        <div class="max-h-96 overflow-hidden">
            <div>
                <slot />
            </div>
        </div>
    </div>
</template>