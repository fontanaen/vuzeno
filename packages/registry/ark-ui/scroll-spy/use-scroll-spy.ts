import { normalizeProps, useMachine } from "@zag-js/vue";
import { type ComputedRef, computed, type MaybeRefOrGetter, toValue, useId } from "vue";
import { connect } from "./connect";
import { machine } from "./machine";
import type { ScrollSpyApi, ScrollSpyProps } from "./types";

export type UseScrollSpyProps = Omit<ScrollSpyProps, "id"> & {
  id?: string | undefined;
};

export type UseScrollSpyReturn = ComputedRef<ScrollSpyApi>;

export function useScrollSpy(props: MaybeRefOrGetter<UseScrollSpyProps> = {}): UseScrollSpyReturn {
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
