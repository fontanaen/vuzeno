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


## Dependencies

This component requires `libphonenumber-js` as a peer dependency:

<InstallationTabs value="libphonenumber-js" />


## Components

### PhoneField

The root component that provides context to all child components.

<PropsTable 
    :data="[    
        { name: 'modelValue', type: 'string', default: null, description: 'The phone number value' },
        { name: 'countryCode', type: 'string', default: null, description: 'The selected country code' },
        { name: 'defaultCountryCode', type: 'string', default: null, description: 'Default country code when none is provided' },
        { name: 'format', type: 'international | national | e164', default: 'international', description: 'Display format of the phone number' },
        { name: 'size', type: 'sm | default | lg', default: 'default', description: 'Size variant' },
        { name: 'resetOnCountryChange', type: 'boolean', default: 'false', description: 'Clear phone number when country changes' },
        { name: 'preferredCountries', type: 'string[]', default: null, description: 'Countries to display first in the list' },
        { name: 'availableCountries', type: 'string[]', default: null, description: 'Restrict to only these countries' },
        { name: 'ignoredCountries', type: 'string[]', default: `['AC', 'TA']`, description: 'Countries to hide from the list' },
        { name: 'locale', type: 'string', default: 'en', description: 'Locale for country name formatting' }
    ]"
/>

### PhoneFieldCountrySelect

A searchable country dropdown with flag display.

<PropsTable 
    :data="[
        { name: 'searchPlaceholder', type: 'string', default: null, description: 'Placeholder text for the search input' },
        { name: 'flagType', type: 'cdn | unicode', default: 'cdn', description: 'How to display the flag' }
    ]"
/>

### PhoneFieldInput

The phone number input field with auto-formatting.

<PropsTable 
    :data="[
        { name: 'placeholder', type: 'string', default: null, description: 'Input placeholder text' },
        { name: 'disabled', type: 'boolean', default: null, description: 'Disable the input' },
        { name: 'class', type: 'string', default: null, description: 'Additional CSS classes' }
    ]"
/>

### PhoneFieldCountryFlag

Displays a country flag.

<PropsTable 
    :data="[
        { name: 'countryCode', type: 'CountryCode', default: null, description: 'The country code to display' },
        { name: 'type', type: 'cdn | unicode', default: 'cdn', description: 'Flag display type' },
        { name: 'alt', type: 'string', default: null, description: 'Alt text for the flag image' }
    ]"
/>

### PhoneFieldIndicator

Displays a checkmark icon when the phone number is valid. No props required — it reads from the parent context.

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

## Examples

### Basic phone input with country selector

A simple phone field with country dropdown and input.

### Phone input with validation indicator

Include the `PhoneFieldIndicator` to show a checkmark when the number is valid.

### Custom country list

Use `preferredCountries` to prioritize common choices, and `ignoredCountries` to hide irrelevant options.

### Different formats

Compare international vs national formatting for different user experiences.

### Form integration with validation

Use `validatePhoneNumber` with TanStack Form or other form libraries for complete form validation.

### Localized country names

Set the `locale` prop to display country names in the user's language.

## Accessibility

<!-- @todo: Document accessibility features -->

## API Reference

### Exports

<ExportsTable 
    :data="[
        { name: 'PhoneField', description: 'Root provider component' },
        { name: 'PhoneFieldCountrySelect', description: 'Country selector dropdown' },
        { name: 'PhoneFieldInput', description: 'Phone input field' },
        { name: 'PhoneFieldCountryFlag', description: 'Flag display' },
        { name: 'PhoneFieldIndicator', description: 'Validation indicator' },
        { name: 'CountryCode', description: 'Re-exported from libphonenumber-js' },
        { name: 'validatePhoneNumber', description: 'Detailed validation' },
        { name: 'isValidPhoneNumber', description: 'Simple boolean validation' },
        { name: 'isValidPhoneNumberForCountry', description: 'Country-specific validation' },
        { name: 'phoneFieldSizeVariants', description: 'Size variant CSS classes' }
    ]"
/>
