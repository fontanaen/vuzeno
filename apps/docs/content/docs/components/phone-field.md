---
title: PhoneField
description: Vue phone number input with country selector, libphonenumber validation, and E.164 output.
tag: new
---

::component-preview
---
component: phone-field
name: basic
---
::

## Features

- **Auto-formatting** — Phone numbers are formatted in real-time as the user types
- **Country selector** — Searchable dropdown with flag display
- **Multiple formats** — International, national, or E.164 output
- **Country filtering** — Preferred, available, and ignored country lists
- **Localization** — Country names displayed in any locale
- **Validation utilities** — Ready-to-use validation functions
- **Composable** — Flexible slot-based architecture

## Installation

Install from the Vuzeno registry:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/phone-field.json
exec: true
---
::

## Usage

```vue
<script setup lang="ts">
import { PhoneField } from "@vuzeno/registry/ui/phone-field";
import { ref } from "vue";

const phone = ref("");
const countryCode = ref("FR");
</script>

<template>
  <PhoneField.Root v-model="phone" v-model:country-code="countryCode" :preferred-countries="['FR', 'US']" reset-on-country-change>
    <PhoneField.CountrySelect search-placeholder="Search country" flag-type="cdn" />
    <PhoneField.Input placeholder="Enter your phone number" />
  </PhoneField.Root>
</template>
```

## Composition

```
PhoneField.Root
├── PhoneField.CountrySelect
├── PhoneField.Input
└── PhoneField.Indicator
```

## Dependencies

This component is built on top of `libphonenumber-js`, for manual installation:

::installation-tabs
---
command: libphonenumber-js
exec: false
---
::

## Examples

### With indicator

::component-preview
---
component: phone-field
name: with-indicator
---
::

### Sizes

::component-preview
---
component: phone-field
name: sizes
---
::

### Formats

The `format` prop controls how the phone number is displayed:

::component-preview
---
component: phone-field
name: formats
---
::

> **Note:** The `modelValue` always stores the full E.164 number regardless of display format.

## Country Filtering

Control which countries appear in the selector:

| Prop | Purpose |
|------|---------|
| `preferredCountries` | Shown at the top of the list |
| `availableCountries` | Restrict to only these countries |
| `ignoredCountries` | Hide specific countries |

Countries in `preferredCountries` appear first, followed by remaining `availableCountries`. Any country in `ignoredCountries` is excluded.

## Localization

Country names are formatted using `Intl.DisplayNames`. Set the `locale` prop to display names in any language:

| Locale | Value |
|------|---------|
| `en` | United States, France, Germany |
| `fr` | États-Unis, France, Allemagne |
| `de` | Vereinigte Staaten, Frankreich, Deutschland |

## Validation

### Validation Utilities

Three validation functions are exported for different use cases:

#### `validatePhoneNumber(phone, country?)`

Returns a detailed result object:

```ts
type PhoneValidationResult =
  | { success: true }
  | { success: false; error: PhoneValidationError }

type PhoneValidationError =
  | "TOO_SHORT"
  | "TOO_LONG"
  | "INVALID_COUNTRY"
  | "INVALID_NUMBER"
  | "INVALID_FORMAT"
```

#### `isValidPhoneNumber(phone)`

Simple boolean check. Returns `true` if the phone number is valid.

#### `isValidPhoneNumberForCountry(phone, country)`

Boolean check for a specific country. Useful when validating national format numbers.

### Integration with TanStack Form

The validation utilities can be used with `@tanstack/vue-form` by calling them inside a field validator:

```vue{9-14} showLineNumbers
<script>
import { PhoneField, validatePhoneNumber } from "@/components/ui/phone-field"
</script>

<template>
  <form.Field
    name="phone"
    :validators="{
      onChange: ({ value }) => {
        const result = validatePhoneNumber(value)
        if (!result.success) {
          return 'Invalid phone number'
        }
      }
    }"
    v-slot="{ field }"
  >
    <Field>
      <FieldLabel>Phone number</FieldLabel>
      <PhoneField.Root
        :model-value="field.state.value"
        default-country-code="FR"
        @update:model-value="field.handleChange"
      >
        <PhoneField.CountrySelect flag-type="cdn" />
        <PhoneField.Input placeholder="Enter your phone number">
          <PhoneField.Indicator />
        </PhoneField.Input>
      </PhoneField.Root>

      <FieldError :errors="field.state.errors" />
    </Field>
  </form.Field>
</template>
```
