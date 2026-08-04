import { normalizeProps, useMachine } from "@zag-js/vue";
import { type ComputedRef, computed, type MaybeRefOrGetter, toValue, useId } from "vue";
import { connect } from "./connect";
import { machine } from "./machine";
import type { TocApi, TocProps } from "./types";

export type UseTocProps = Omit<TocProps, "id"> & {
  id?: string | undefined;
};

export type UseTocReturn = ComputedRef<TocApi>;

export function useToc(props: MaybeRefOrGetter<UseTocProps> = {}): UseTocReturn {
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
