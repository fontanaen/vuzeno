<script setup lang="ts">
import { Input } from '@vuetella/ui/components/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@vuetella/ui/components/select';
import { isVNode, type VNode } from 'vue';

defineProps<{
    options?: (string | number)[];
    multiple?: boolean;
    custom?: boolean;
    renderOption?: ((option: string | number) => VNode | string);
}>()

const value = defineModel<string | string[]>('value');
</script>

<template>
    <Select v-if="options && !custom" v-model="value" :multiple="multiple">
        <SelectTrigger class="h-auto focus:border-ring focus:ring-offset-0 focus:ring-ring/50 focus:ring-[3px]">
            <SelectValue class="pr-2" placeholder="Select values" />
        </SelectTrigger>
    
        <SelectContent class="min-w-36">
            <SelectGroup class="p-0">
                <SelectItem v-for="item in options" :key="item" :value="item">
                    <template v-if="renderOption">
                        <template v-if="isVNode(renderOption(item))">
                            <component :is="renderOption(item)" />
                        </template>
                        <template v-else>
                            {{ renderOption(item) }}
                        </template>
                    </template>
                    <template v-else>
                        {{ item }}
                    </template>
                </SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>

    <Input v-else :model-value="value" class="h-auto" />
</template>