import type { CalendarDate } from "@internationalized/date";
import type { FunctionalComponent, VNode } from "vue";
import type { Operator } from "./operator";

interface BaseFieldArgs<T> {
  /**
   * The unique field key (used as `filter.field`)
   */
  key: string;

  /**
   * The field display label
   */
  label: string;

  /**
   * The icon shown in the menu and on filter chips
   */
  icon?: FunctionalComponent | (() => VNode);

  /**
   * The operators available for this field
   *
   * Operators may carry a filter value type that differs from the field's
   * option value (e.g. `Operator.In` produces an array filter value while its
   * options remain scalar). The constraint only pins down the option type and
   * leaves the operator's value type free, so each factory's precise return
   * type stays available at the call site (where `renderValue` is declared).
   */
  operators: Operator<any, T>[];
}

export abstract class BaseField<T = any> {
  key: string;
  label: string;
  icon?: FunctionalComponent | (() => VNode);
  operators: Operator<any, T>[];

  constructor(args: BaseFieldArgs<T>) {
    this.key = args.key;
    this.label = args.label;
    this.icon = args.icon;
    this.operators = args.operators;
  }
}

interface TextFieldArgs extends BaseFieldArgs<string> {
  minLength?: number;
  maxLength?: number;
}

export class TextField extends BaseField<string> {
  minLength?: number;
  maxLength?: number;

  constructor(args: TextFieldArgs) {
    super(args);
    this.minLength = args.minLength;
    this.maxLength = args.maxLength;
  }
}

interface NumberFieldArgs extends BaseFieldArgs<number> {
  min?: number;
  max?: number;
  step?: number;
  numberFormat?: Intl.NumberFormatOptions;
}

export class NumberField extends BaseField<number> {
  min?: number;
  max?: number;
  step?: number;
  numberFormat?: Intl.NumberFormatOptions;

  constructor(args: NumberFieldArgs) {
    super(args);
    this.min = args.min;
    this.max = args.max;
    this.step = args.step;
    this.numberFormat = args.numberFormat;
  }
}

interface DateFieldArgs extends BaseFieldArgs<CalendarDate> {
  min?: CalendarDate;
  max?: CalendarDate;
}

export class DateField extends BaseField<CalendarDate> {
  min?: CalendarDate;
  max?: CalendarDate;

  constructor(args: DateFieldArgs) {
    super(args);
    this.min = args.min;
    this.max = args.max;
  }
}

interface BooleanFieldArgs extends BaseFieldArgs<boolean> {
  trueValue?: string | boolean | number;
  falseValue?: string | boolean | number;
}

export class BooleanField extends BaseField<boolean> {
  trueValue?: string | boolean | number;
  falseValue?: string | boolean | number;

  constructor(args: BooleanFieldArgs) {
    super(args);
    this.trueValue = args.trueValue;
    this.falseValue = args.falseValue;
  }
}

type FieldGroupArgs = {
  label: string;
  fields: BaseField[];
};

export class FieldGroup {
  label: string;
  fields: BaseField[];

  constructor(args: FieldGroupArgs) {
    this.label = args.label;
    this.fields = args.fields;
  }
}

type FieldSubmenuArgs = {
  label: string;
  icon?: FunctionalComponent | (() => VNode);
  fields: FilterFieldItem[];
};

export class FieldSubmenu {
  label: string;
  icon?: FunctionalComponent | (() => VNode);
  fields: FilterFieldItem[];

  constructor(args: FieldSubmenuArgs) {
    this.label = args.label;
    this.icon = args.icon;
    this.fields = args.fields;
  }
}

export type FilterFieldItem = BaseField | FieldGroup | FieldSubmenu;

export const Field = {
  TextField: (args: TextFieldArgs): TextField => new TextField(args),
  NumberField: (args: NumberFieldArgs): NumberField => new NumberField(args),
  DateField: (args: DateFieldArgs): DateField => new DateField(args),
  BooleanField: (args: BooleanFieldArgs): BooleanField => new BooleanField(args),
  Group: (args: FieldGroupArgs): FieldGroup => new FieldGroup(args),
  Submenu: (args: FieldSubmenuArgs): FieldSubmenu => new FieldSubmenu(args),
} as const;

export function isField(item: FilterFieldItem): item is BaseField {
  return item instanceof BaseField;
}

export function isFieldGroup(item: FilterFieldItem): item is FieldGroup {
  return item instanceof FieldGroup;
}

export function isFieldSubmenu(item: FilterFieldItem): item is FieldSubmenu {
  return item instanceof FieldSubmenu;
}
