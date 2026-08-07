<script setup lang="ts">
import { useForwardProps } from "@ark-ui/vue";
import { JsonTreeView, type JsonTreeViewRootProviderProps } from "@ark-ui/vue/json-tree-view";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import { type HTMLAttributes, isRef } from "vue";

const props = defineProps<JsonTreeViewRootProviderProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = reactiveOmit(props, "class", "value");
const forwarded = useForwardProps(delegatedProps);

/**
 * Ark's JsonTreeView.RootProvider reads `value.value` (expects a ComputedRef),
 * but Vue template bindings unwrap refs. Re-expose a plain getter object so
 * `.value` resolves whether the parent passed a ref or an unwrapped API.
 */
const arkValue = {
  get value() {
    const value = props.value as unknown;
    if (isRef(value)) {
      return value.value;
    }
    return value;
  },
};
</script>

<template>
  <JsonTreeView.RootProvider
    v-bind="forwarded"
    :value="(arkValue as never)"
    :class="cn(
      'w-full font-mono text-foreground',
      '[--json-string:oklch(0.45_0.14_145)] [--json-number:oklch(0.5_0.14_250)] [--json-boolean:oklch(0.5_0.16_300)]',
      '[--json-key:oklch(0.45_0.12_30)] [--json-accent:oklch(0.5_0.14_200)] [--json-muted:var(--muted-foreground)]',
      'dark:[--json-string:oklch(0.75_0.14_145)] dark:[--json-number:oklch(0.75_0.12_250)] dark:[--json-boolean:oklch(0.75_0.12_300)]',
      'dark:[--json-key:oklch(0.78_0.1_55)] dark:[--json-accent:oklch(0.75_0.1_200)]',
      '**:data-[part=branch-content]:relative',
      '**:data-[part=branch-indent-guide]:absolute **:data-[part=branch-indent-guide]:inset-s-[calc((var(--depth)-1)*1rem)] **:data-[part=branch-indent-guide]:h-full **:data-[part=branch-indent-guide]:w-px **:data-[part=branch-indent-guide]:bg-border',
      '**:data-[part=branch-indent-guide]:data-[depth=1]:inset-s-3',
      '**:data-[part=branch-control]:flex **:data-[part=branch-control]:select-none **:data-[part=branch-control]:ps-[calc((var(--depth)-1)*0.75rem)]',
      '**:data-[part=branch-control]:data-[depth=1]:ps-1',
      '**:data-[part=branch-control]:hover:bg-muted',
      '**:data-[part=branch-indicator]:me-1 **:data-[part=branch-indicator]:inline-flex **:data-[part=branch-indicator]:origin-center **:data-[part=branch-indicator]:items-center **:data-[part=branch-indicator]:justify-center',
      '**:data-[part=branch-indicator]:data-[state=open]:rotate-90',
      '**:data-[part=item]:relative **:data-[part=item]:flex **:data-[part=item]:ps-[calc(((var(--depth)-1)*0.75rem)+0.75rem)]',
      '**:data-[part=item]:data-[depth=1]:ps-6',
      '**:data-[part=item]:hover:bg-muted',
      '**:data-[part=item-text]:flex **:data-[part=item-text]:items-baseline',
      '**:data-[part=branch-text]:flex **:data-[part=branch-text]:items-baseline',
      props.class,
    )"
    data-slot="json-tree-view-root-provider"
  >
    <slot />
  </JsonTreeView.RootProvider>
</template>
