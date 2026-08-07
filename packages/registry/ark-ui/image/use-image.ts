import { normalizeProps, useMachine } from "@zag-js/vue";
import { type ComputedRef, computed, type MaybeRefOrGetter, toValue, useId } from "vue";
import { connect } from "./connect";
import { machine } from "./machine";
import type { ImageApi, ImageProps } from "./types";

export type UseImageProps = Omit<ImageProps, "id"> & {
  id?: string | undefined;
};

export type UseImageReturn = ComputedRef<ImageApi>;

export function useImage(props: MaybeRefOrGetter<UseImageProps> = {}): UseImageReturn {
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
