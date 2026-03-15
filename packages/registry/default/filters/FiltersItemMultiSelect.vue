<script setup lang="ts">
import { Badge } from "@vuzeno/ui/components/badge";
import { Button } from "@vuzeno/ui/components/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@vuzeno/ui/components/command";
import { Popover, PopoverContent, PopoverTrigger } from "@vuzeno/ui/components/popover";
import { CheckIcon } from "lucide-vue-next";
import { computed, isVNode } from "vue";
import type { FilterVariant } from "./FiltersProvider.vue";
import type { Field, FieldOption } from "./field";

const props = defineProps<{
  field: Field;
  variant: FilterVariant;
}>();

const modelValue = defineModel<unknown[]>({ default: () => [] });

const visibleValues = computed<FieldOption<unknown>[]>(() => {
  if (!Array.isArray(modelValue.value)) {
    return [];
  }

  return modelValue.value
    .slice(0, 2)
    .map((item) => props.field.options?.items?.find((option) => option.value === item))
    .filter(Boolean) as FieldOption<unknown>[];
});

function toogleValue(value: string) {
  if (modelValue.value.includes(value)) {
    modelValue.value = modelValue.value.filter((item) => item !== value);
  } else {
    modelValue.value = [...modelValue.value, value];
  }
}
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button :variant="variant" class="h-auto w-auto gap-1 justify-between font-normal text-sm px-3">
                <template v-if="Array.isArray(modelValue) && modelValue.length > 0">
                    <template v-for="item in visibleValues" :key="item.value?.toString()">
                        <Badge :variant="variant" class="rounded-sm">
                            <template v-if="field.options?.optionDisplay">
                                <template v-if="isVNode(field.options?.optionDisplay(item))">
                                    <component :is="field.options?.optionDisplay(item)" />
                                </template>
                                <template v-else>
                                    {{ field.options?.optionDisplay(item) }}
                                </template>
                            </template>
                            <template v-else>
                                {{ item.label }}
                            </template>
                        </Badge>
                    </template>

                    <span v-if="modelValue.length > visibleValues.length" class="text-muted-foreground text-xs ml-1">+{{ modelValue.length - visibleValues.length }} more</span>
                </template>
                <span v-else class="text-muted-foreground">
                    Select options
                </span>
            </Button>
        </PopoverTrigger>

        <PopoverContent align="start" class="w-auto overflow-hidden p-0">
            <Command highlight-on-hover>
                <CommandInput class="h-8" placeholder="Search option" />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                        <CommandItem v-for="item in field.options?.items" :key="item.value?.toString()" :value="(item.value as string)" @click="toogleValue(item?.value as string)">
                            <template v-if="field.options?.optionDisplay">
                                <template v-if="isVNode(field.options?.optionDisplay(item))">
                                    <component :is="field.options?.optionDisplay(item)" />
                                </template>
                                <template v-else>
                                    {{ field.options?.optionDisplay(item) }}
                                </template>
                            </template>
                            <template v-else>
                                {{ item.label }}
                            </template>

                            <CheckIcon class="size-4 text-primary ml-auto" :class="{ 'opacity-0': !modelValue?.includes(item.value) }" />
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>
</template>