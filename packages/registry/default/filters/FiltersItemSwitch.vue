<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import type { FilterVariant } from "./FiltersProvider.vue";
import type { Field } from "./field";

const props = defineProps<{
  field: Field;
  variant: FilterVariant;
}>();

const modelValue = defineModel<boolean>({ default: false });
</script>

<template>
    <Button :variant="variant" class="h-auto px-3">
        <Switch v-model="modelValue" class="h-5 w-10 **:data-[slot=switch-thumb]:size-4!" />
    </Button>
</template>