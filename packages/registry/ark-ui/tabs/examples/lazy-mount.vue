<script setup lang="ts">
import { Tabs } from "@vuzeno/registry/ui/tabs";
</script>

<template>
  <Tabs.Root lazy-mount unmount-on-exit default-value="account">
    <Tabs.TabList class="border-none">
      <Tabs.TabTriggerIndicator value="account">Account</Tabs.TabTriggerIndicator>
      <Tabs.TabTriggerIndicator value="password">Password</Tabs.TabTriggerIndicator>
      <Tabs.TabTriggerIndicator value="billing">Billing</Tabs.TabTriggerIndicator>
    </Tabs.TabList>
    <Tabs.TabContent value="account">Make changes to your account here.</Tabs.TabContent>
    <Tabs.TabContent value="password">Change your password here.</Tabs.TabContent>
    <Tabs.TabContent value="billing">Manage your billing and payment details.</Tabs.TabContent>
  </Tabs.Root>
</template>
