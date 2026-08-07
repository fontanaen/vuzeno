<script lang="ts">
export type PasswordFieldProps = {
  /**
   * The model value of the password field.
   */
  modelValue?: string;
  /**
   * Whether the password field is disabled.
   */
  disabled?: boolean;
  /**
   * The type of the password field.
   */
  type?: PasswordFieldType;
  /**
   * The default type of the password field.
   */
  defaultType?: PasswordFieldType;
  /**
   * Whether to reset the type of the password field when clicking outside of the field.
   */
  resetOnClickOutside?: boolean;

  class?: HTMLAttributes["class"];
};

export type PasswordFieldEmits = {
  (e: "update:modelValue", payload: string): void;
  (e: "update:type", payload: PasswordFieldType): void;
};

export type PasswordFieldType = "text" | "password";

export type PasswordFieldContext<P extends PasswordFieldProps> = {
  modelValue: Ref<P["modelValue"]>;
  type: Ref<NonNullable<P["type"]>>;
  defaultType: Ref<NonNullable<P["defaultType"]>>;
  disabled: Ref<NonNullable<P["disabled"]>>;
  toggleType: () => void;
};

export const [injectPasswordFieldContext, providePasswordFieldContext] = createContext<PasswordFieldContext<PasswordFieldProps>>("PasswordFieldContext");
</script>

<script setup lang="ts">
import { onClickOutside, useToggle } from "@vueuse/core";
import { InputGroup } from "@vuzeno/ui/components/input-group";
import { createContext } from "reka-ui";
import { toRefs, useTemplateRef, watch, type HTMLAttributes, type Ref } from "vue";

const props = withDefaults(defineProps<PasswordFieldProps>(), {
  defaultType: "password",
  disabled: false,
  resetOnClickOutside: true,
});

const emits = defineEmits<PasswordFieldEmits>();
const modelValue = defineModel<PasswordFieldProps["modelValue"]>();

const [_type, toggleType] = useToggle<string, string, PasswordFieldType>(props.type ?? props.defaultType, {
  truthyValue: 'password',
  falsyValue: 'text'
})

const { defaultType, disabled } = toRefs(props);

const target = useTemplateRef('target')

onClickOutside(target, () => {
  if (props.resetOnClickOutside) {
    toggleType('password');
  }
})

watch(_type, (value) => {
  if (value) {
    emits('update:type', value);
  }
})

providePasswordFieldContext({
  modelValue, 
  type: _type, 
  defaultType, 
  disabled, 
  toggleType,
});
</script>

<template>
  <InputGroup ref="target" :class="props.class">
    <slot />
  </InputGroup>
</template>