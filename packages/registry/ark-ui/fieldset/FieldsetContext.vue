<script setup lang="ts">
import { Fieldset } from "@ark-ui/vue/fieldset";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";



const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Fieldset.Context
    
    :class="cn(props.class)"
    data-slot="fieldset-context"
  >
    <slot />
  </Fieldset.Context>
</template>
