---
title: PhoneField
description: A composable phone input component with country selection, auto-formatting, and validation
name: phone-field
---

<script setup lang="ts">
import PhoneFieldDemo from "../../../.vitepress/components/demo/PhoneFieldDemo.vue"
</script>

# Phone Field

A fully-featured phone number input component built on top of `libphonenumber-js`. It provides automatic formatting as you type, a searchable country selector, and built-in validation utilities.

<ComponentPreview :component="PhoneFieldDemo">

```vue:line-numbers
<script setup lang="ts">
import { PhoneField, PhoneFieldCountrySelect, PhoneFieldInput, PhoneFieldIndicator } from "@/components/ui/phone-field"
import { ref } from "vue";

const phone = ref<string>("");
const countryCode = ref<string>("FR");
</script>

<template>
    <PhoneField v-model="phone" v-model:country-code="countryCode" :preferred-countries="['FR', 'US']" reset-on-country-change>
        <PhoneFieldCountrySelect flag-type="cdn" />
        <PhoneFieldInput placeholder="Enter your phone number">
            <PhoneFieldIndicator />
        </PhoneFieldInput>
    </PhoneField>
</template>
```

</ComponentPreview>


## Features

- **Auto-formatting** — Phone numbers are formatted in real-time as the user types
- **Country selector** — Searchable dropdown with flag display
- **Multiple formats** — International, national, or E.164 output
- **Country filtering** — Preferred, available, and ignored country lists
- **Localization** — Country names displayed in any locale
- **Validation utilities** — Ready-to-use validation functions
- **Composable** — Flexible slot-based architecture

## Installation

Install from the Vuetella registry with the shadcn-vue CLI (requires an existing shadcn-vue project with `components.json`):

<InstallationTabs exec value="shadcn-vue@latest add https://vuetella.dev/r/phone-field.json" />

## Dependencies

This component requires `libphonenumber-js` as a peer dependency. Install it if the CLI didn't add it:

<InstallationTabs value="libphonenumber-js" />

## Formats

The `format` prop controls how the phone number is displayed:

| Format | Example (France) | Description |
|--------|------------------|-------------|
| `international` | +33 6 12 34 56 78 | Includes country calling code with formatting |
| `national` | 06 12 34 56 78 | Local format without country code |
| `e164` | +33612345678 | Standard E.164 format (no spaces) |

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

```ts
import { validatePhoneNumber } from "@vuetella/registry/ui/phone-field"

// In your form field validator
validate: (value) => {
  const result = validatePhoneNumber(value)
  if (!result.success) {
    return "Invalid phone number"
  }
  return undefined
}
```


