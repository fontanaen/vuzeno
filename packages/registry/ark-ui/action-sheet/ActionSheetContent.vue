<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { mergeProps } from "@zag-js/core";
import * as presence from "@zag-js/presence";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { cn } from "cnfast";
import { type ComponentPublicInstance, computed, type HTMLAttributes, ref, watch } from "vue";
import { injectActionSheetContext } from "./context";

const props = defineProps<
  {
    class?: HTMLAttributes["class"];
  } & PolymorphicProps
>();

const actionSheet = injectActionSheetContext();

const present = computed(() => actionSheet.value.open);
const dataState = computed(() => (present.value ? "open" : "closed"));

const backdropPresenceProps = computed(() => ({ present: present.value }));
const contentPresenceProps = computed(() => ({ present: present.value }));

const backdropPresenceService = useMachine(presence.machine, backdropPresenceProps);
const contentPresenceService = useMachine(presence.machine, contentPresenceProps);

const backdropPresenceApi = computed(() => presence.connect(backdropPresenceService, normalizeProps));
const contentPresenceApi = computed(() => presence.connect(contentPresenceService, normalizeProps));

const backdropNode = ref<HTMLElement | ComponentPublicInstance | null>(null);
const contentNode = ref<HTMLElement | ComponentPublicInstance | null>(null);

function resolveElement(node: HTMLElement | ComponentPublicInstance | null) {
  if (!node) {
    return null;
  }

  if (node instanceof HTMLElement) {
    return node;
  }

  const element = node.$el;
  return element instanceof HTMLElement ? element : null;
}

watch(backdropNode, (node) => {
  const element = resolveElement(node);
  if (element) {
    backdropPresenceApi.value.setNode(element);
  }
});

watch(contentNode, (node) => {
  const element = resolveElement(node);
  if (element) {
    contentPresenceApi.value.setNode(element);
  }
});

const backdropProps = computed(() =>
  mergeProps(actionSheet.value.getBackdropProps(), {
    class: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"),
    hidden: !backdropPresenceApi.value.present,
    "data-state": dataState.value,
  }),
);

const positionerProps = computed(() =>
  mergeProps(actionSheet.value.getPositionerProps(), {
    class: cn("action-sheet-positioner fixed w-screen max-w-lg mx-auto inset-x-0 bottom-0 z-50 flex items-end justify-center px-4"),
  }),
);

const contentProps = computed(() =>
  mergeProps(actionSheet.value.getContentProps(), {
    class: cn(
      "w-full duration-300 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-97 data-[state=open]:zoom-in-97 data-[state=closed]:slide-out-to-bottom-1/2 data-[state=open]:slide-in-from-bottom-1/2 sm:rounded-lg space-y-4",
      props.class,
    ),
    hidden: !contentPresenceApi.value.present,
    "data-state": dataState.value,
  }),
);
</script>

<template>
  <Teleport to="body">
    <div
      v-if="actionSheet.showOverlay && backdropPresenceApi.present"
      ref="backdropNode"
      v-bind="backdropProps"
      data-slot="action-sheet-backdrop"
    />
    <div v-if="contentPresenceApi.present" v-bind="positionerProps" data-slot="action-sheet-positioner">
      <ark.div
        ref="contentNode"
        v-bind="contentProps"
        :as-child="asChild"
        data-slot="action-sheet-content"
      >
        <slot />
      </ark.div>
    </div>
  </Teleport>
</template>

<style scoped>
.action-sheet-positioner {
  bottom: calc(env(safe-area-inset-bottom, 0px) + 10rem);
}

@supports (bottom: calc(1px * sign(1px))) {
  .action-sheet-positioner {
    bottom: calc(
      1rem + env(safe-area-inset-bottom, 0px) + 4rem * sign(env(safe-area-inset-bottom, 0px))
    );
  }
}
</style>
