import InputGroupAddon from "./InputGroupAddon.vue";
import InputGroupButton from "./InputGroupButton.vue";
import InputGroupInput from "./InputGroupInput.vue";
import InputGroupRoot from "./InputGroupRoot.vue";
import InputGroupText from "./InputGroupText.vue";
import InputGroupTextarea from "./InputGroupTextarea.vue";

export const InputGroup = {
  Root: InputGroupRoot,
  Input: InputGroupInput,
  Textarea: InputGroupTextarea,
  Addon: InputGroupAddon,
  Button: InputGroupButton,
  Text: InputGroupText,
} as const;
