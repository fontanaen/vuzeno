import parsePhoneNumber, { AsYouType, type CountryCode, type PhoneNumber } from "libphonenumber-js";

export type PhoneFormat = "international" | "national" | "e164";

export function sanitizePhoneInput(value: string): string {
  const hasPlus = value.startsWith("+");
  const digits = value.replace(/[^0-9]/g, "");
  return hasPlus ? `+${digits}` : digits;
}

export function parsePhone(value: string, countryCode: CountryCode): PhoneNumber | null {
  return parsePhoneNumber(value, { defaultCountry: countryCode, extract: false }) ?? null;
}

export function formatPhoneNumber(phone: PhoneNumber | null, format: PhoneFormat): string | null {
  if (!phone) return null;

  const formatter = new AsYouType(phone.country);

  if (format === "international") {
    return formatter.input(phone.formatInternational());
  }

  if (format === "national") {
    return formatter.input(phone.formatNational());
  }

  return formatter.input(phone.number);
}

export function countDigitsBefore(value: string, position: number): number {
  let count = 0;
  for (let i = 0; i < position && i < value.length; i++) {
    if (/\d/.test(value[i] ?? "")) {
      count++;
    }
  }
  return count;
}

export function countPrefixDigitsAdded(sanitized: string, formatted: string): number {
  const sanitizedDigits = sanitized.replace(/[^0-9]/g, "");
  const formattedDigits = formatted.replace(/[^0-9]/g, "");

  if (formattedDigits.length <= sanitizedDigits.length) {
    return 0;
  }

  if (formattedDigits.endsWith(sanitizedDigits)) {
    return formattedDigits.length - sanitizedDigits.length;
  }

  return 0;
}

export function findPositionAfterNthDigit(value: string, n: number): number {
  let count = 0;
  for (let i = 0; i < value.length; i++) {
    if (/\d/.test(value[i] ?? "")) {
      count++;
      if (count === n) {
        return i + 1;
      }
    }
  }
  return value.length;
}

export function isFormattingCharacter(char: string): boolean {
  return /[\s()-]/.test(char);
}

export function findPreviousDigitIndex(value: string, position: number): number {
  for (let i = position - 1; i >= 0; i--) {
    if (/\d/.test(value[i] ?? "")) {
      return i;
    }
  }
  return -1;
}

export function removeDigitAtIndex(value: string, digitIndex: number): string {
  let digitCount = 0;
  for (let i = 0; i < value.length; i++) {
    if (/\d/.test(value[i] ?? "")) {
      if (digitCount === digitIndex) {
        return value.slice(0, i) + value.slice(i + 1);
      }
      digitCount++;
    }
  }
  return value;
}

export function isValidPhoneNumber(phone: string): boolean {
  const parsed = parsePhoneNumber(phone);

  return parsed?.isValid() ?? false;
}

export function isValidPhoneNumberForCountry(phone: string, country: string): boolean {
  const parsed = parsePhoneNumber(phone, { defaultCountry: country as CountryCode });

  return parsed?.isValid() ?? false;
}
