<script setup lang="ts">
import { ArrowRightIcon, ShieldCheckIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { PhoneField } from "@vuzeno/registry/ui/phone-field";
import { PinInput } from "@vuzeno/registry/ui/pin-input";
import { Steps } from "@vuzeno/registry/ui/steps";
import { computed, ref } from "vue";

const CODE_LENGTH = 6;

const stepTitles = ["Number", "Code"];

const step = ref(0);
const phone = ref("");
const countryCode = ref("US");
const code = ref<string[]>([]);

function sendCode() {
  code.value = [];
  step.value = 1;
}

function completeVerification() {
  step.value = 2;
}

function startOver() {
  code.value = [];
  step.value = 0;
}

const canSendCode = computed(() => phone.value.replace(/\D/g, "").length >= 6);
</script>

<template>
  <Steps.Root v-model:step="step" :count="stepTitles.length" linear>
    <Steps.List class="px-12">
      <Steps.Item v-for="(title, index) in stepTitles" :key="title" :index="index">
        <Steps.Trigger>
          <Steps.Indicator>{{ index + 1 }}</Steps.Indicator>
          <span>{{ title }}</span>
        </Steps.Trigger>
        <Steps.Separator />
      </Steps.Item>
    </Steps.List>

    <Steps.Content :index="0" class="flex flex-col gap-3">
      <PhoneField.Root
        v-model="phone"
        v-model:country-code="countryCode"
        :preferred-countries="['US', 'FR', 'GB', 'DE']"
        reset-on-country-change
      >
        <PhoneField.CountrySelect search-placeholder="Search country" flag-type="cdn" />
        <PhoneField.Input placeholder="Enter your phone number">
          <PhoneField.Indicator />
        </PhoneField.Input>
      </PhoneField.Root>

      <Button class="w-72" :disabled="!canSendCode" @click="sendCode">
        Send code
        <ArrowRightIcon />
      </Button>

      <p class="text-xs text-muted-foreground">
        Formatting, country detection, and validation come with the component.
      </p>
    </Steps.Content>

    <Steps.Content :index="1" class="flex flex-col gap-3">
      <p class="text-sm text-muted-foreground">
        We texted a {{ CODE_LENGTH }}-digit code to
        <span class="font-medium text-foreground">{{ phone }}</span>.
      </p>

      <PinInput.Root
        v-model="code"
        :count="CODE_LENGTH"
        otp
        blur-on-complete
        @value-complete="completeVerification"
      >
        <PinInput.Control>
          <PinInput.Input v-for="index in CODE_LENGTH" :key="index" :index="index - 1" />
        </PinInput.Control>
        <PinInput.HiddenInput />
      </PinInput.Root>

      <div class="flex items-center gap-1">
        <Button variant="ghost" size="sm" @click="startOver">
          Change number
        </Button>
        <Button variant="ghost" size="sm" @click="code = []">
          Resend code
        </Button>
      </div>
    </Steps.Content>

    <div
      v-if="step === 2"
      class="flex items-center gap-3 rounded-lg border border-border bg-muted/40 px-3 py-3 animate-in fade-in-0 slide-in-from-bottom-1 duration-200"
    >
      <ShieldCheckIcon class="size-5 shrink-0 text-primary" />
      <div class="min-w-0 flex-1">
        <p class="text-sm font-medium text-foreground">Number verified</p>
        <p class="truncate text-xs text-muted-foreground">{{ phone }} is ready for two-factor sign-in.</p>
      </div>
      <Button variant="ghost" size="sm" @click="startOver">
        Reset
      </Button>
    </div>
  </Steps.Root>
</template>
