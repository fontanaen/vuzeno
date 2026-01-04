import type { FunctionalComponent, VNode } from "vue";
import type { Operator } from "./operator";

export type FieldOption<T> = {
    label: string;
    value: T;
}

export type FieldGroup = {
    group: string;
    fields: Field[];
}

export type Field<V = any, T = any> = {
    /**
     * The field key (will be used as the filter field key)
     */
    key: string;

    /**
     * The field display name
     */
    name: string;

    /**
     * The field type (will be used to determine the input type)
     */
    type: 'text' | 'date' | 'number' | 'boolean';

    /**
     * The field icon (will be used to display the field in the filter menu and filter items)
     */
    icon?: FunctionalComponent | (() => VNode)

    /**
     * Whether the field is multiple (will be used to determine if the field can have multiple values)
     */
    multiple?: boolean;

    /**
     * The field operators (will be used to determine the operators that can be used for the field)
     */
    operators: Operator<V>[];

    /**
     * The minimum value for the field
     */
    min?: T;

    /**
     * The maximum value for the field
     */
    max?: T;

    /**
     * The step value for the field
     */
    step?: number;

    /**
     * The number format for the field
     */
    numberFormat?: Intl.NumberFormatOptions;

    /**
     * The field options (will be used to determine the options that can be used for the field)
     */
    options?: {
        items?: FieldOption<V>[];
        searchable?: boolean;
        minSelections?: number;
        maxSelections?: number;
        optionDisplay?: ((option: FieldOption<V>) => VNode | string);
    }
}

export function isFieldGroup(item: FieldGroup | Field): item is FieldGroup {
    return 'group' in item;
}

export function isField(item: FieldGroup | Field): item is Field {
    return 'key' in item;
}