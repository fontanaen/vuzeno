import parsePhoneNumber, { type CountryCode, ParseError, parsePhoneNumberWithError } from "libphonenumber-js";

export type PhoneValidationError = "TOO_SHORT" | "TOO_LONG" | "INVALID_COUNTRY" | "INVALID_NUMBER" | "INVALID_FORMAT";

export type PhoneValidationResult =
  | {
      success: true;
    }
  | {
      success: false;
      error: PhoneValidationError;
    };

export function validatePhoneNumber(phone: string, country?: CountryCode): PhoneValidationResult {
  try {
    const result = parsePhoneNumberWithError(phone, country);

    if (!result.isValid()) {
      return { success: false, error: "INVALID_FORMAT" };
    }
  } catch (error) {
    if (error instanceof ParseError) {
      return { success: false, error: error.message as PhoneValidationError };
    }
  }

  return { success: true };
}

export function isValidPhoneNumber(phone: string): boolean {
  const parsed = parsePhoneNumber(phone);

  return parsed?.isValid() ?? false;
}

export function isValidPhoneNumberForCountry(phone: string, country: string): boolean {
  const parsed = parsePhoneNumber(phone, { defaultCountry: country as CountryCode });

  return parsed?.isValid() ?? false;
}
