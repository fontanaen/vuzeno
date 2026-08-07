import { normalizeProps, useMachine } from "@zag-js/vue";
import { type ComputedRef, computed, type MaybeRefOrGetter, toValue, useId } from "vue";
import { connect } from "./connect";
import { machine } from "./machine";
import type { ActionSheetApi, ActionSheetProps } from "./types";

export type UseActionSheetProps = Omit<ActionSheetProps, "id"> & {
  id?: string | undefined;
};

export type UseActionSheetReturn = ComputedRef<ActionSheetApi>;

export function useActionSheet(props: MaybeRefOrGetter<UseActionSheetProps> = {}): UseActionSheetReturn {
  const id = useId();

  const machineProps = computed(() => {
    const localProps = toValue(props);

    return {
      id: localProps.id ?? id,
      ...localProps,
    };
  });

  const service = useMachine(machine, machineProps);

  return computed(() => connect(service, normalizeProps));
}
