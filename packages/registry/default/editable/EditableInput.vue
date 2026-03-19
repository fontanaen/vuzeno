<script setup lang="ts">
import { whenever } from "@vueuse/core";
import { Input } from "@vuzeno/ui/components/input";
import { cn } from "@vuzeno/ui/lib/utils";
import { injectEditableRootContext } from "reka-ui";
import { computed, type HTMLAttributes, nextTick, onMounted, useTemplateRef } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();

const inputRef = useTemplateRef<HTMLInputElement>("inputRef");

const ctx = injectEditableRootContext();

const disabled = computed(() => ctx.disabled.value);
const placeholder = computed(() => ctx.placeholder.value?.edit);

onMounted(() => {
  ctx.inputRef.value = inputRef.value as HTMLInputElement;
  if (ctx.startWithEditMode.value) {
    ctx.inputRef.value?.focus({ preventScroll: true });
    if (ctx.selectOnFocus.value) ctx.inputRef.value?.select();
  }
});

whenever(
  () => ctx.isEditing.value,
  () => {
    nextTick(() => {
      ctx.inputRef.value?.focus({ preventScroll: true });
      if (ctx.selectOnFocus.value) ctx.inputRef.value?.select();
    });
  },
);

function handleSubmitKeyDown(event: KeyboardEvent) {
  if ((ctx.submitMode.value === "enter" || ctx.submitMode.value === "both") && event.key === kbd.ENTER && !event.shiftKey && !event.metaKey && !event.isComposing) ctx.submit();
}
</script>

<template>
  <Input 
    ref="inputRef"
    v-if="ctx.isEditing.value" 
    :model-value="ctx.modelValue.value ?? undefined"
    :placeholder="placeholder"
    :disabled="disabled"
    :maxlength="ctx.maxLength.value"
    :readonly="ctx.readonly.value"
    aria-label="editable input"
    :class="cn('w-fit', props.class)" 
    :style="ctx.autoResize.value ? { all: 'unset', gridArea: '1 / 1 / auto / auto', visibility: !ctx.isEditing.value ? 'hidden' : undefined } : undefined"
    @input="ctx.inputValue.value = $event.target.value"
    @keydown.enter.space="handleSubmitKeyDown"
    @keydown.esc="ctx.cancel"
  />
</template>