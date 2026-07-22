<script setup lang="ts">
import { Tabs, useTabs } from "@vuzeno/registry/ui/tabs";

const tabs = useTabs({ defaultValue: "account" });
</script>

<template>
  <div class="flex flex-col gap-4">
    <output class="text-sm text-muted-foreground">
      selected: {{ tabs.value }}
    </output>

    <Tabs.RootProvider :value="tabs">
      <Tabs.TabList>
        <Tabs.TabTrigger value="account">Account</Tabs.TabTrigger>
        <Tabs.TabTrigger value="password">Password</Tabs.TabTrigger>
        <Tabs.TabTrigger value="billing">Billing</Tabs.TabTrigger>
        <Tabs.TabIndicator />
      </Tabs.TabList>
      <Tabs.TabContent value="account">Make changes to your account here.</Tabs.TabContent>
      <Tabs.TabContent value="password">Change your password here.</Tabs.TabContent>
      <Tabs.TabContent value="billing">Manage your billing and payment details.</Tabs.TabContent>
    </Tabs.RootProvider>
  </div>
</template>
