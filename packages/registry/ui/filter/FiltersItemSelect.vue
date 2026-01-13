<script setup lang="ts">
import { computed, isVNode } from "vue";
import type { Field } from "./field";
import { type FilterValue } from "./filter";
import { Popover, PopoverContent, PopoverTrigger } from "@vuetella/ui/components/popover";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@vuetella/ui/components/command";
import { Button } from "@vuetella/ui/components/button";
import { CheckIcon } from "lucide-vue-next";
import type { FilterVariant } from "./FiltersProvider.vue";

const props = defineProps<{
  field: Field;
  variant: FilterVariant;
}>();

const modelValue = defineModel<FilterValue>();

const selectedOption = computed(() => {
  return props.field.options?.items?.find((option) => option?.value === modelValue.value);
});
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button :variant="variant" class="h-auto w-auto justify-between font-normal text-sm px-3">
                <template v-if="selectedOption">
                    <template v-if="field.options?.optionDisplay">
                        <template v-if="isVNode(field.options?.optionDisplay(selectedOption))">
                            <component :is="field.options?.optionDisplay(selectedOption)" />
                        </template>
                        <template v-else>
                            {{ field.options?.optionDisplay(selectedOption) }}
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
                <CommandInput class="h-8" placeholder="Search option" />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                        <CommandItem v-for="item in field.options?.items" :key="item?.value" :value="item?.value" @click="modelValue = item?.value">
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

                            <CheckIcon class="size-4 text-primary ml-auto" :class="{ 'opacity-0': modelValue !== item.value }" />
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>
</template>