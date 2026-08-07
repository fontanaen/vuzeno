<script setup lang="ts">
import { CheckIcon, CreditCardIcon, InfoIcon, MailIcon, SearchIcon, StarIcon } from "@lucide/vue";
import { InputGroup } from "@vuzeno/registry/ui/input-group";
</script>

<template>
  <div class="grid w-full max-w-sm gap-6">
    <InputGroup.Root>
      <InputGroup.Input placeholder="Search..." />
      <InputGroup.Addon>
        <SearchIcon />
      </InputGroup.Addon>
    </InputGroup.Root>

    <InputGroup.Root>
      <InputGroup.Input type="email" placeholder="Enter your email" />
      <InputGroup.Addon>
        <MailIcon />
      </InputGroup.Addon>
    </InputGroup.Root>
    
    <InputGroup.Root>
      <InputGroup.Input placeholder="Card number" />
      <InputGroup.Addon>
        <CreditCardIcon />
      </InputGroup.Addon>
      <InputGroup.Addon align="inline-end">
        <CheckIcon />
      </InputGroup.Addon>
    </InputGroup.Root>

    <InputGroup.Root>
      <InputGroup.Input placeholder="Card number" />
      <InputGroup.Addon align="inline-end">
        <StarIcon />
        <InfoIcon />
      </InputGroup.Addon>
    </InputGroup.Root>
  </div>
</template>
