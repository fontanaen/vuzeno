import { TagsInput as ArkTagsInput } from "@ark-ui/vue/tags-input";
import TagsInputClearTrigger from "./TagsInputClearTrigger.vue";
import TagsInputControl from "./TagsInputControl.vue";
import TagsInputInput from "./TagsInputInput.vue";
import TagsInputItem from "./TagsInputItem.vue";
import TagsInputItemContext from "./TagsInputItemContext.vue";
import TagsInputItemDeleteTrigger from "./TagsInputItemDeleteTrigger.vue";
import TagsInputItemInput from "./TagsInputItemInput.vue";
import TagsInputItemPreview from "./TagsInputItemPreview.vue";
import TagsInputItemText from "./TagsInputItemText.vue";
import TagsInputLabel from "./TagsInputLabel.vue";
import TagsInputRoot from "./TagsInputRoot.vue";
import TagsInputRootProvider from "./TagsInputRootProvider.vue";

export const TagsInput = {
  ClearTrigger: TagsInputClearTrigger,
  Context: ArkTagsInput.Context,
  Control: TagsInputControl,
  Input: TagsInputInput,
  ItemContext: TagsInputItemContext,
  ItemDeleteTrigger: TagsInputItemDeleteTrigger,
  ItemInput: TagsInputItemInput,
  ItemPreview: TagsInputItemPreview,
  ItemText: TagsInputItemText,
  Item: TagsInputItem,
  Label: TagsInputLabel,
  RootProvider: TagsInputRootProvider,
  Root: TagsInputRoot,
} as const;
