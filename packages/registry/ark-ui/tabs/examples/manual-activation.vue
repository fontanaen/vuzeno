<script setup lang="ts">
import { Tabs } from "@vuzeno/registry/ui/tabs";
</script>

<template>
  <Tabs.Root activation-mode="manual" default-value="account">
    <Tabs.TabList>
      <Tabs.TabTrigger value="account">Account</Tabs.TabTrigger>
      <Tabs.TabTrigger value="password">Password</Tabs.TabTrigger>
      <Tabs.TabTrigger value="billing">Billing</Tabs.TabTrigger>
      <Tabs.TabIndicator />
    </Tabs.TabList>
    <Tabs.TabContent value="account">Make changes to your account here.</Tabs.TabContent>
    <Tabs.TabContent value="password">Change your password here.</Tabs.TabContent>
    <Tabs.TabContent value="billing">Manage your billing and payment details.</Tabs.TabContent>
  </Tabs.Root>
</template>
