<script setup lang="ts">
import { Button } from "@vuzeno/ui/components/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@vuzeno/ui/components/command";
import { Popover, PopoverContent, PopoverTrigger } from "@vuzeno/ui/components/popover";
import { cn } from "@vuzeno/ui/lib/utils";
import { CheckIcon } from "lucide-vue-next";
import type { AcceptableValue } from "reka-ui";
import { computed, type HTMLAttributes, isVNode, ref } from "vue";
import { injectFiltersContext } from "./context";
import type { BaseField } from "./field";
import type { Operator } from "./operator";
import { DropdownItemSizeVariant, PopoverTriggerSizeVariant } from "./sizes";

const props = defineProps<{
  field: BaseField;
  operator: Operator<unknown>;
  class?: HTMLAttributes["class"];
}>();

const modelValue = defineModel<unknown>();

const { variant, size } = injectFiltersContext();

const open = ref(false);

const items = computed(() => props.operator.options?.items ?? []);

const selectedOption = computed(() => items.value.find((option) => option.value === modelValue.value));

const renderOption = computed(() => props.operator.options?.renderOption);
const renderValue = computed(() => props.operator.options?.renderValue);
const renderedValue = computed(() => {
  if (renderValue.value) {
    if (modelValue.value === undefined || modelValue.value === null) {
      return undefined;
    }

    return renderValue.value(modelValue.value);
  }

  return undefined;
});
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        :variant="variant"
        :class="cn('h-auto w-auto justify-between font-normal px-3', PopoverTriggerSizeVariant[size], props.class)"
      >
        <template v-if="renderedValue !== undefined">
          <component :is="renderedValue" v-if="isVNode(renderedValue)" />
          <template v-else>
            {{ renderedValue }}
          </template>
        </template>
        <template v-else-if="selectedOption">
          <template v-if="renderOption">
            <component :is="renderOption(selectedOption)" v-if="isVNode(renderOption(selectedOption))" />
            <template v-else>
              {{ renderOption(selectedOption) }}
            </template>
          </template>
          <template v-else>
            {{ selectedOption.label }}
          </template>
        </template>
        <span v-else class="text-muted-foreground">
          Select option
        </span>
      </Button>
    </PopoverTrigger>

    <PopoverContent align="start" class="w-auto overflow-hidden p-0">
      <Command highlight-on-hover>
        <CommandInput v-show="operator.options?.searchable" :class="DropdownItemSizeVariant[size]" class="h-8" placeholder="Search option" />
        
        <CommandList>
          <CommandEmpty>{{ operator.options?.emptyLabel ?? "No results found." }}</CommandEmpty>
          <CommandGroup>
            <CommandItem
              v-for="option in items"
              :key="String(option.value)"
              :value="(option.value as AcceptableValue)"
              :class="DropdownItemSizeVariant[size]"
              @select="modelValue = option.value; open = false"
            >
              <template v-if="renderOption">
                <component :is="renderOption(option)" v-if="isVNode(renderOption(option))" />
                <template v-else>
                  {{ renderOption(option) }}
                </template>
              </template>
              <template v-else>
                {{ option.label }}
              </template>

              <CheckIcon class="size-4 text-primary ml-auto" :class="{ 'opacity-0': modelValue !== option.value }" />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
