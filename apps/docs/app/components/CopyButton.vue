<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import type { ButtonVariants } from "@vuzeno/registry/ui/button";
import { Button } from "@vuzeno/registry/ui/button";
import { Tooltip } from "@vuzeno/registry/ui/tooltip";
import { cn } from "cnfast";
import { CheckIcon, CopyIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";
import { toRefs } from "vue";

const props = withDefaults(
  defineProps<{
    value?: string;
    class?: HTMLAttributes["class"];
    variant?: ButtonVariants["variant"];
    tooltip?: string;
  }>(),
  {
    value: "",
    variant: "ghost",
    tooltip: "Copy to Clipboard",
  },
);
const { value } = toRefs(props);

const { copy, copied } = useClipboard({ source: value });
</script>

<template>
  <Tooltip.Root lazy-mount unmount-on-exit>
    <Tooltip.Trigger as-child>
      <Button
        data-slot="copy-button"
        size="icon"
        :variant="variant"
        :class="cn(
          'bg-code absolute top-3 right-2 z-10 size-7 hover:opacity-100 focus-visible:opacity-100',
          props.class,
        )"
        v-bind="$attrs"
        @click="copy()"
      >
        <span class="sr-only">Copy</span>
        <CheckIcon v-if="copied" /><CopyIcon v-else />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content>
      {{ copied ? "Copied" : tooltip }}
    </Tooltip.Content>
  </Tooltip.Root>
</template>
