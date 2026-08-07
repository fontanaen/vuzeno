<script setup lang="ts">
import { QrCode } from "@vuzeno/registry/ui/qr-code";
import { RadioGroup } from "@vuzeno/registry/ui/radio-group";
import { ref } from "vue";

type ErrorLevel = "L" | "M" | "Q" | "H";

const errorLevel = ref<ErrorLevel>("L");
const levels: ErrorLevel[] = ["L", "M", "Q", "H"];
</script>

<template>
  <div class="flex flex-col gap-4">
    <QrCode.Root default-value="http://ark-ui.com" :encoding="{ ecc: errorLevel }">
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
    </QrCode.Root>

    <RadioGroup.Root
      default-value="L"
      orientation="horizontal"
      @value-change="(details) => (errorLevel = details.value as ErrorLevel)"
    >
      <div class="flex gap-3">
        <RadioGroup.Item v-for="level in levels" :key="level" :value="level">
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{{ level }}</RadioGroup.ItemText>
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      </div>
    </RadioGroup.Root>
  </div>
</template>
