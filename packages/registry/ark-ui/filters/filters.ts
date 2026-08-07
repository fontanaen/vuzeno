import FiltersClear from "./FiltersClear.vue";
import FiltersGroup from "./FiltersGroup.vue";
import FiltersInputDate from "./FiltersInputDate.vue";
import FiltersInputDateRange from "./FiltersInputDateRange.vue";
import FiltersInputMultiSelect from "./FiltersInputMultiSelect.vue";
import FiltersInputNumber from "./FiltersInputNumber.vue";
import FiltersInputNumberRange from "./FiltersInputNumberRange.vue";
import FiltersInputSelect from "./FiltersInputSelect.vue";
import FiltersInputSwitch from "./FiltersInputSwitch.vue";
import FiltersInputText from "./FiltersInputText.vue";
import FiltersItem from "./FiltersItem.vue";
import FiltersItemField from "./FiltersItemField.vue";
import FiltersItemOperator from "./FiltersItemOperator.vue";
import FiltersItemValue from "./FiltersItemValue.vue";
import FiltersMenu from "./FiltersMenu.vue";
import FiltersMenuContent from "./FiltersMenuContent.vue";
import FiltersMenuItem from "./FiltersMenuItem.vue";
import FiltersMenuSub from "./FiltersMenuSub.vue";
import FiltersMenuTrigger from "./FiltersMenuTrigger.vue";
import FiltersProvider from "./FiltersProvider.vue";

export const Filters = {
  Provider: FiltersProvider,
  Group: FiltersGroup,
  Clear: FiltersClear,
  Item: FiltersItem,
  ItemField: FiltersItemField,
  ItemOperator: FiltersItemOperator,
  ItemValue: FiltersItemValue,
  Menu: FiltersMenu,
  MenuTrigger: FiltersMenuTrigger,
  MenuContent: FiltersMenuContent,
  MenuItem: FiltersMenuItem,
  MenuSub: FiltersMenuSub,
  InputDate: FiltersInputDate,
  InputDateRange: FiltersInputDateRange,
  InputMultiSelect: FiltersInputMultiSelect,
  InputNumber: FiltersInputNumber,
  InputNumberRange: FiltersInputNumberRange,
  InputSelect: FiltersInputSelect,
  InputSwitch: FiltersInputSwitch,
  InputText: FiltersInputText,
} as const;
