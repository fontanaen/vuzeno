import { Editable as ArkEditable } from "@ark-ui/vue/editable";
import EditableArea from "./EditableArea.vue";
import EditableCancelTrigger from "./EditableCancelTrigger.vue";
import EditableControl from "./EditableControl.vue";
import EditableEditTrigger from "./EditableEditTrigger.vue";
import EditableInput from "./EditableInput.vue";
import EditablePreview from "./EditablePreview.vue";
import EditableRoot from "./EditableRoot.vue";
import EditableRootProvider from "./EditableRootProvider.vue";
import EditableSubmitTrigger from "./EditableSubmitTrigger.vue";

export const Editable = {
  Area: EditableArea,
  CancelTrigger: EditableCancelTrigger,
  Context: ArkEditable.Context,
  Control: EditableControl,
  EditTrigger: EditableEditTrigger,
  Input: EditableInput,
  Preview: EditablePreview,
  RootProvider: EditableRootProvider,
  Root: EditableRoot,
  SubmitTrigger: EditableSubmitTrigger,
} as const;
