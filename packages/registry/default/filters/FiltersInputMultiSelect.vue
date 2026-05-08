<script setup lang="ts">
import { Badge } from "@vuzeno/ui/components/badge";
import { Button } from "@vuzeno/ui/components/button";
import { Checkbox } from "@vuzeno/ui/components/checkbox";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@vuzeno/ui/components/command";
import { Popover, PopoverContent, PopoverTrigger } from "@vuzeno/ui/components/popover";
import { cn } from "@vuzeno/ui/lib/utils";
import { computed, type HTMLAttributes, isVNode, ref } from "vue";
import { injectFiltersContext } from "./context";
import type { BaseField } from "./field";
import type { Operator, OperatorOption } from "./operator";
import { CheckboxSizeVariant, DropdownItemSizeVariant, PopoverTriggerSizeVariant } from "./sizes";

const props = defineProps<{
  field: BaseField;
  operator: Operator<unknown>;
  class?: HTMLAttributes["class"];
}>();

const modelValue = defineModel<unknown[]>({ default: () => [] });

const open = ref(false);

const { variant, size } = injectFiltersContext();

const items = computed(() => props.operator.options?.items ?? []);
const renderOption = computed(() => props.operator.options?.renderOption);
const renderValue = computed(() => props.operator.options?.renderValue);
const maxSelections = computed(() => props.operator.options?.maxSelections);

const visibleSelections = computed<OperatorOption<unknown>[]>(() => {
  if (!Array.isArray(modelValue.value)) {
    return [];
  }

  return (modelValue.value as unknown[])
    .slice(0, 2)
    .map((current) => items.value.find((option) => option.value === current))
    .filter((option): option is OperatorOption<unknown> => option !== undefined);
});

const renderedValue = computed(() => {
  if (!renderValue.value || !Array.isArray(modelValue.value) || modelValue.value.length === 0) {
    return undefined;
  }

  return renderValue.value(modelValue.value);
});

function isChecked(option: OperatorOption<unknown>): boolean {
  return Array.isArray(modelValue.value) && (modelValue.value as unknown[]).includes(option.value);
}

function toggleOption(option: OperatorOption<unknown>) {
  const current = Array.isArray(modelValue.value) ? (modelValue.value as unknown[]) : [];

  if (current.includes(option.value)) {
    modelValue.value = current.filter((value) => value !== option.value);
    return;
  }

  if (maxSelections.value !== undefined && current.length >= maxSelections.value) {
    return;
  }

  modelValue.value = [...current, option.value];
}

function selectOption(option: OperatorOption<unknown>) {
  toggleOption(option);
  open.value = false;
}
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        :variant="variant"
        :class="cn('h-auto w-auto gap-1 justify-between font-normal px-3', PopoverTriggerSizeVariant[size], props.class)"
      >
        <template v-if="renderedValue !== undefined">
          <component :is="renderedValue" v-if="isVNode(renderedValue)" />
          <template v-else>
            {{ renderedValue }}
          </template>
        </template>
        <template v-else-if="Array.isArray(modelValue) && modelValue.length > 0">
          {{ visibleSelections.map((option) => option.label).join(", ") }}

          <span v-if="modelValue.length > visibleSelections.length" class="text-muted-foreground text-xs ml-1">
            +{{ modelValue.length - visibleSelections.length }}
          </span>
        </template>
        <span v-else class="text-muted-foreground">
          Select options
        </span>
      </Button>
    </PopoverTrigger>

    <PopoverContent align="start" class="w-auto overflow-hidden p-0">
      <Command highlight-on-hover>
        <CommandInput v-if="operator.options?.searchable" class="h-8" :class="DropdownItemSizeVariant[size]" placeholder="Search option" />
        <CommandList>
          <CommandEmpty>{{ operator.options?.emptyLabel ?? "No results found." }}</CommandEmpty>
          <CommandGroup>
            <CommandItem
              v-for="option in items"
              :key="String(option.value)"
              :value="(option.value as string)"
              :class="DropdownItemSizeVariant[size]"
              @select="selectOption(option)"
            >
              <Checkbox
                :model-value="isChecked(option)"
                :class="CheckboxSizeVariant[size]"
                @click.stop
                @update:model-value="toggleOption(option)"
              />
              <template v-if="renderOption">
                <component :is="renderOption(option)" v-if="isVNode(renderOption(option))" />
                <template v-else>
                  {{ renderOption(option) }}
                </template>
              </template>
              <template v-else>
                {{ option.label }}
              </template>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
