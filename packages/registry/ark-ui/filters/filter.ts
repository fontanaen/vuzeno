import type { CalendarDate } from "@internationalized/date";

export type Filter = {
  /**
   * The field key to filter by
   */
  field: string;
  /**
   * The operator value to use for the filter
   */
  operator: string;
  /**
   * The filter value
   */
  value: FilterValue;
  /**
   * Whether to visually hide the filter
   * @defaultValue false
   */
  hidden?: true;
};

export type FilterValue = string | string[] | number | number[] | boolean | CalendarDate | CalendarDate[] | FilterRangeValue<CalendarDate> | null;

export type FilterRangeValue<T> = {
  start: T;
  end: T;
};

export function isFilterRangeValue(value: FilterValue): value is FilterRangeValue<CalendarDate> {
  return typeof value === "object" && value !== null && "start" in value && "end" in value;
}
