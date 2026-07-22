<script setup lang="ts">
import { Tabs } from "@vuzeno/registry/ui/tabs";
import { ref } from "vue";

const value = ref("account");
</script>

<template>
  <Tabs.Root v-model="value">
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
