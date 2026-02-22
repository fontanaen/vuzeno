---
title: PhoneField
description: A composable phone input component with country selection, auto-formatting, and validation
name: phone-field
---

# Phone Field

A fully-featured phone number input component built on top of `libphonenumber-js`. It provides automatic formatting as you type, a searchable country selector, and built-in validation utilities.

<ComponentPreview name="phone-field/BasicDemo" />

## Features

- **Auto-formatting** — Phone numbers are formatted in real-time as the user types
- **Country selector** — Searchable dropdown with flag display
- **Multiple formats** — International, national, or E.164 output
- **Country filtering** — Preferred, available, and ignored country lists
- **Localization** — Country names displayed in any locale
- **Validation utilities** — Ready-to-use validation functions
- **Composable** — Flexible slot-based architecture

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

<InstallationTabs exec value="shadcn-vue@latest add https://vuzeno.com/r/phone-field.json" />

## Dependencies

This component requires `libphonenumber-js` as a peer dependency:

<InstallationTabs value="libphonenumber-js" />

## Examples

### With indicator

<ComponentPreview name="phone-field/WithIndicatorDemo" />

### Sizes

<ComponentPreview name="phone-field/SizesDemo" />

### Formats

The `format` prop controls how the phone number is displayed:

<ComponentPreview name="phone-field/FormatsDemo" />

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

- `"en"` → United States, France, Germany
- `"fr"` → États-Unis, France, Allemagne
- `"de"` → Vereinigte Staaten, Frankreich, Deutschland

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

```vue{9-14}
<script>
import { validatePhoneNumber } from "@/components/ui/phone-field"
</script>

<template>
  <form.Field 
    name="phone"
    :validators="
      onChange: ({ value }) => {
        const result = validatePhoneNumber(value)
        if (!result.success) {
          return "Invalid phone number"
        }
      }
    "
    v-slot="{ field }"
  >
    <Field>
      <FieldLabel>Phone number</FieldLabel>
      <PhoneField
        :model-value="field.state.value" 
        default-country-code="FR"
        @update:model-value="field.handleChange"
      >
        <PhoneFieldCountrySelect flag-type="cdn" />
        <PhoneFieldInput placeholder="Enter your phone number">
          <PhoneFieldIndicator />
        </PhoneFieldInput>
      </PhoneField>

      <FieldError :errors="field.state.errors" />
    </Field>
  </form.Field>
</template>
```


