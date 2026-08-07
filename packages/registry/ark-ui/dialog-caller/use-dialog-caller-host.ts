import { normalizeProps, useMachine } from "@zag-js/vue";
import { type ComputedRef, computed, type MaybeRefOrGetter, onScopeDispose, toValue, useId } from "vue";
import { connect } from "./connect";
import { machine } from "./machine";
import { bindDialogCallerHostService, getDialogCallerHostService } from "./service";
import type { DialogCallerApi, DialogCallerProps } from "./types";

export type UseDialogCallerHostProps = Omit<DialogCallerProps, "id"> & {
  id?: string | undefined;
};

export type UseDialogCallerHostReturn = ComputedRef<DialogCallerApi>;

export function useDialogCallerHost(props: MaybeRefOrGetter<UseDialogCallerHostProps> = {}): UseDialogCallerHostReturn {
  const id = useId();

  const machineProps = computed(() => {
    const localProps = toValue(props);

    return {
      id: localProps.id ?? id,
      ...localProps,
    };
  });

  const service = useMachine(machine, machineProps);

  bindDialogCallerHostService(service);

  onScopeDispose(() => {
    if (getDialogCallerHostService() === service) {
      bindDialogCallerHostService(null);
    }
  });

  return computed(() => connect(service, normalizeProps));
}
