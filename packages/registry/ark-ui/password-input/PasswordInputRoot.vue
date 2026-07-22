<script lang="ts">
import { createContext } from "@ark-ui/vue";
import type { Ref } from "vue";
import type { InputVariants } from "../input";

export type PasswordInputContext = {
  size: Ref<InputVariants["size"]>;
};

export const [providePasswordInputContext, injectPasswordInputContext] = createContext<PasswordInputContext>("PasswordInputContext");
</script>

<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { PasswordInput, type PasswordInputRootProps } from "@ark-ui/vue/password-input";
import { reactiveOmit, toRefs } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type InputVariantsProps } from "../input";
import { InputGroup } from "../input-group";

const props = defineProps<PasswordInputRootProps & InputVariantsProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = reactiveOmit(props, "class", "size");
const forwarded = useForwardPropsEmits(delegatedProps);
const { size } = toRefs(props);

providePasswordInputContext({ size });
</script>

<template>
  <PasswordInput.Root
    v-bind="forwarded"
    :class="cn(
      'flex w-full max-w-80 flex-col gap-1.5 text-foreground',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="password-input"
  >
    <PasswordInput.Control data-slot="password-input-control" as-child>
      <InputGroup.Root>
        <slot />
      </InputGroup.Root>
    </PasswordInput.Control>
  </PasswordInput.Root>
</template>
