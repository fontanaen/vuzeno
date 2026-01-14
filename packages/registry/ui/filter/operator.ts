export type Operator<T> = {
  /**
   * The display name of the operator
   */
  label: string;

  /**
   * The value of the operator
   */
  value: string;

  /**
   * Whether the operator is the default operator
   * @defaultValue false
   */
  default?: boolean;

  /**
   * The default value given to the filter value when the operator is selected
   * @defaultValue null|[]
   */
  defaultValue?: T | T[];

  /**
   * The type of input to use for the operator
   * the field type will be used if no input type is provided
   */
  inputType?: (typeof OperatorInputType)[keyof typeof OperatorInputType];
};

export const OperatorInputType = {
  SELECT: "select",
  TEXT: "text",
  BOOLEAN: "boolean",
  DATE: "date",
  DATE_RANGE: "date-range",
  MULTI_SELECT: "multi-select",
  NUMBER: "number",
  NUMBER_RANGE: "number-range",
  NONE: "none",
} as const;

export const OperatorDefaultValue: Record<(typeof OperatorInputType)[keyof typeof OperatorInputType], unknown | unknown[]> = {
  [OperatorInputType.SELECT]: null,
  [OperatorInputType.TEXT]: null,
  [OperatorInputType.BOOLEAN]: false,
  [OperatorInputType.DATE]: null,
  [OperatorInputType.DATE_RANGE]: null,
  [OperatorInputType.MULTI_SELECT]: [],
  [OperatorInputType.NUMBER]: null,
  [OperatorInputType.NUMBER_RANGE]: null,
  [OperatorInputType.NONE]: null,
} as const;
