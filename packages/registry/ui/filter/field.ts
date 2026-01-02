import type { FunctionalComponent, VNode } from "vue";

export type Operator = {
    /**
     * The display name of the operator
     */
    name: string;

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
     * The default value of the operator
     * @defaultValue undefined
     */
    defaultValue?: string | string[];

    /**
     * Whether you can select multiple values
     * @defaultValue false
     */
    multiple?: boolean;

    /**
     * Whether you can use a custom value (via text input)
     * @defaultValue false
     */
    custom?: boolean;
};

export type FieldGroup = {
    group: string;
    fields: Field[];
}

export type Field = TextField | DateField;

interface BaseField {
    key: string;
    name: string;
    icon?: FunctionalComponent | (() => VNode)
    multiple?: boolean;
    operators: Operator[];
    options?: (string | number)[];
    optionDisplay?: ((option: string | number) => VNode | string);
}

interface TextField extends BaseField {
    type: 'text';
    multiple?: boolean;
    operators: Operator[];
}

interface DateField extends BaseField {
    name: string;
    type: 'date';
    min: string;
    max: string;
    multiple: boolean;
    operators: Operator[];
}

export function isFieldGroup(item: FieldGroup | Field): item is FieldGroup {
    return 'group' in item;
}

export function isField(item: FieldGroup | Field): item is Field {
    return 'key' in item;
}

/** Example fields */

const textField: TextField = {
    key: 'text-field',
    name: 'text-field',
    type: 'text',
    multiple: false, // boolean or function
    options: ['value1', 'value2'],
    operators: [
        { name: 'is', value: 'eq', default: true },
        { name: 'is not', value: 'neq' },
        { name: 'between', value: 'between' },
        { name: 'include', value: 'in', defaultValue: 'value1' },
        { name: 'not include', value: 'nin', defaultValue: 'value2' },
    ]
}

const dateField: DateField = {
    key: 'date-field',
    name: 'date-field',
    type: 'date',
    multiple: false, // boolean or function
    min: '2025-01-01',
    max: '2025-01-01',
    operators: [
        { name: 'is', value: 'eq', default: true },
        { name: 'is not', value: 'neq' },
        { name: 'between', value: 'between' },
        { name: 'before', value: 'lt', defaultValue: '2025-01-01' },
        { name: 'after', value: 'gt', defaultValue: '2025-01-01' },
    ]
}
