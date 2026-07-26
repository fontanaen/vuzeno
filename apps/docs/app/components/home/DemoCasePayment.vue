<script setup lang="ts">
import { CheckIcon, CreditCardIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Field } from "@vuzeno/registry/ui/field";
import { Input } from "@vuzeno/registry/ui/input";
import { InputGroup } from "@vuzeno/registry/ui/input-group";
import { RadioGroup } from "@vuzeno/registry/ui/radio-group";
import { Switch } from "@vuzeno/registry/ui/switch";
import { computed, ref, watch } from "vue";
import { Icons } from "~/lib/icons";

const providers = [
  { value: "apple", label: "Apple Pay", detail: "Pay with Touch ID or Face ID", icon: Icons.apple },
  { value: "google", label: "Google Pay", detail: "Use cards saved to Google", icon: Icons.google },
  { value: "card", label: "Credit card", detail: "Visa, Mastercard, Amex", icon: CreditCardIcon },
] as const;

const provider = ref("card");
const cardNumber = ref("");
const expiry = ref("");
const cvc = ref("");
const saveCard = ref(true);
const paid = ref(false);

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

function inputValue(event: Event) {
  return (event.target as HTMLInputElement).value;
}

function onCardNumberInput(event: Event) {
  const digits = digitsOnly(inputValue(event)).slice(0, 16);
  cardNumber.value = digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
}

function onExpiryInput(event: Event) {
  const digits = digitsOnly(inputValue(event)).slice(0, 4);
  expiry.value = digits.length <= 2 ? digits : `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function onCvcInput(event: Event) {
  cvc.value = digitsOnly(inputValue(event)).slice(0, 4);
}

function pay() {
  paid.value = true;
}

function reset() {
  paid.value = false;
}

watch(provider, () => {
  paid.value = false;
});

const selectedProvider = computed(() => providers.find((item) => item.value === provider.value));

const canPay = computed(() => {
  if (provider.value !== "card") {
    return true;
  }

  return digitsOnly(cardNumber.value).length >= 15 && expiry.value.length === 5 && cvc.value.length >= 3;
});

const payLabel = computed(() => {
  if (provider.value === "apple") {
    return "Pay with Apple Pay";
  }

  if (provider.value === "google") {
    return "Pay with Google Pay";
  }

  return "Pay $48.00";
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <RadioGroup.Root v-model="provider" class="gap-2">
      <RadioGroup.Item
        v-for="item in providers"
        :key="item.value"
        :value="item.value"
        class="w-full justify-start gap-3 rounded-lg border border-border px-3 py-2.5 transition-colors duration-150 data-[state=checked]:border-primary/40 data-[state=checked]:bg-muted/50"
      >
        <span class="pointer-events-none flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/60 text-foreground">
          <component :is="item.icon" class="size-4" />
        </span>

        <div class="pointer-events-none min-w-0 flex-1 text-left">
          <RadioGroup.ItemText class="text-sm font-medium text-foreground">
            {{ item.label }}
          </RadioGroup.ItemText>
          <p class="truncate text-xs text-muted-foreground">{{ item.detail }}</p>
        </div>

        <RadioGroup.ItemControl />
      </RadioGroup.Item>
    </RadioGroup.Root>

    <div
      v-if="provider === 'card'"
      class="flex flex-col gap-3 animate-in fade-in-0 slide-in-from-bottom-1 duration-200"
    >
      <Field.Root class="max-w-none gap-1.5">
        <Field.Label>Card number</Field.Label>
        <InputGroup.Root class="w-full">
          <InputGroup.Input
            :model-value="cardNumber"
            inputmode="numeric"
            autocomplete="cc-number"
            placeholder="ACCT-000015"
            @input="onCardNumberInput"
          />
          <InputGroup.Addon>
            <CreditCardIcon />
          </InputGroup.Addon>
        </InputGroup.Root>
      </Field.Root>

      <div class="grid grid-cols-2 gap-3">
        <Field.Root class="max-w-none gap-1.5">
          <Field.Label>Expiry</Field.Label>
          <Input
            :model-value="expiry"
            inputmode="numeric"
            autocomplete="cc-exp"
            placeholder="MM/YY"
            @input="onExpiryInput"
          />
        </Field.Root>

        <Field.Root class="max-w-none gap-1.5">
          <Field.Label>CVC</Field.Label>
          <Input
            :model-value="cvc"
            inputmode="numeric"
            autocomplete="cc-csc"
            placeholder="123"
            @input="onCvcInput"
          />
        </Field.Root>
      </div>

      <Switch.Root v-model:checked="saveCard" class="justify-between">
        <div class="min-w-0">
          <Switch.Label class="text-sm font-medium text-foreground">Save this card</Switch.Label>
          <p class="text-xs text-muted-foreground">Checkout faster next time</p>
        </div>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Root>
    </div>

    <div
      v-if="paid"
      class="flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-sm animate-in fade-in-0 slide-in-from-bottom-1 duration-200"
    >
      <CheckIcon class="size-4 shrink-0 text-primary" />
      <span class="min-w-0 flex-1 truncate text-foreground">
        Paid with {{ selectedProvider?.label }}{{ provider === "card" && saveCard ? " · card saved" : "" }}
      </span>
      <Button variant="ghost" size="sm" @click="reset">
        Reset
      </Button>
    </div>

    <Button v-else :disabled="!canPay" @click="pay">
      <component :is="selectedProvider?.icon" v-if="provider !== 'card'" class="size-4" />
      {{ payLabel }}
    </Button>
  </div>
</template>
