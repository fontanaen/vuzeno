import type { VNode } from "vue";
import type { FilterRangeValue } from "./filter";

export const OperatorInputType = {
  INPUT: "input",
  RANGE: "range",
  SELECT: "select",
  MULTI_SELECT: "multi-select",
  SWITCH: "switch",
  NONE: "none",
} as const;

export type OperatorInputTypeValue = (typeof OperatorInputType)[keyof typeof OperatorInputType];

export type OperatorOption<TOption = unknown> = {
  label: string;
  value: TOption;
};

export type OperatorOptions<TValue = unknown, TOption = TValue> = {
  items: OperatorOption<TOption>[];
  searchable?: boolean;
  maxSelections?: number;
  renderOption?: (item: OperatorOption<TOption>) => VNode | string;
  renderValue?: (value: TValue) => VNode | string;
  emptyLabel?: string;
  searchPlaceholder?: string;
};

export type Operator<TValue = unknown, TOption = TValue> = {
  /**
   * The display name of the operator
   */
  label: string;

  /**
   * The unique value of the operator (e.g. "eq", "in", "btw")
   */
  value: string;

  /**
   * The type of input to render for the operator's value
   */
  inputType: OperatorInputTypeValue;

  /**
   * Whether the operator is the default operator for its field
   * @defaultValue false
   */
  default?: boolean;

  /**
   * The default value applied to the filter when the operator is selected
   */
  defaultValue?: TValue;

  /**
   * Options for select / multi-select inputs
   */
  options?: OperatorOptions<TValue, TOption>;
};

type OperatorBaseArgs<TValue> = {
  label: string;
  default?: boolean;
  defaultValue?: TValue;
  inputType?: OperatorInputTypeValue;
};

type OperatorWithOptionalOptions<TValue, TOption = TValue> = OperatorBaseArgs<TValue> & {
  options?: OperatorOptions<TValue, TOption>;
};

type OperatorWithRequiredOptions<TValue, TOption = TValue> = OperatorBaseArgs<TValue> & {
  options: OperatorOptions<TValue, TOption>;
};

export const OperatorDefaultValue: Record<OperatorInputTypeValue, unknown> = {
  [OperatorInputType.INPUT]: null,
  [OperatorInputType.RANGE]: null,
  [OperatorInputType.SELECT]: null,
  [OperatorInputType.MULTI_SELECT]: [],
  [OperatorInputType.SWITCH]: false,
  [OperatorInputType.NONE]: null,
} as const;

export const Operator = {
  Eq: <T = unknown>(args: OperatorWithOptionalOptions<T>): Operator<T> => ({
    value: "eq",
    inputType: OperatorInputType.INPUT,
    ...args,
  }),
  Neq: <T = unknown>(args: OperatorWithOptionalOptions<T>): Operator<T> => ({
    value: "neq",
    inputType: OperatorInputType.INPUT,
    ...args,
  }),
  Contain: <T = unknown>(args: OperatorBaseArgs<T>): Operator<T> => ({
    value: "contains",
    inputType: OperatorInputType.INPUT,
    ...args,
  }),
  NotContain: <T = unknown>(args: OperatorBaseArgs<T>): Operator<T> => ({
    value: "not_contains",
    inputType: OperatorInputType.INPUT,
    ...args,
  }),
  In: <T = unknown>(args: OperatorWithRequiredOptions<T[], T>): Operator<T[], T> => ({
    value: "in",
    inputType: OperatorInputType.MULTI_SELECT,
    ...args,
  }),
  Nin: <T = unknown>(args: OperatorWithRequiredOptions<T[], T>): Operator<T[], T> => ({
    value: "nin",
    inputType: OperatorInputType.MULTI_SELECT,
    ...args,
  }),
  Btw: <T = unknown>(args: OperatorBaseArgs<T[] | FilterRangeValue<T>>): Operator<T[] | FilterRangeValue<T>, T> => ({
    value: "btw",
    inputType: OperatorInputType.RANGE,
    ...args,
  }),
  Null: <T = unknown>(args: OperatorBaseArgs<null>): Operator<null, T> => ({
    value: "is_null",
    inputType: OperatorInputType.NONE,
    ...args,
  }),
  NotNull: <T = unknown>(args: OperatorBaseArgs<null>): Operator<null, T> => ({
    value: "not_null",
    inputType: OperatorInputType.NONE,
    ...args,
  }),
  Gt: <T = unknown>(args: OperatorBaseArgs<T>): Operator<T> => ({
    value: "gt",
    inputType: OperatorInputType.INPUT,
    ...args,
  }),
  Lt: <T = unknown>(args: OperatorBaseArgs<T>): Operator<T> => ({
    value: "lt",
    inputType: OperatorInputType.INPUT,
    ...args,
  }),
};

export function getOperatorDefaultValue<TValue>(operator: Operator<TValue, unknown>): TValue {
  return (operator.defaultValue ?? OperatorDefaultValue[operator.inputType]) as TValue;
}
