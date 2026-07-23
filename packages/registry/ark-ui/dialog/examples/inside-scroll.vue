<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";

const contentSections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing and using this service, you accept and agree to be bound by the terms and provisions of this agreement.",
  },
  {
    title: "2. Use License",
    body: "Permission is granted to temporarily use this service for personal, non-commercial purposes only. This is the grant of a license, not a transfer of title.",
  },
  {
    title: "3. User Responsibilities",
    body: "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.",
  },
  {
    title: "4. Privacy Policy",
    body: "Your use of this service is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.",
  },
  {
    title: "5. Limitations",
    body: "In no event shall we be liable for any damages arising out of the use or inability to use the materials on this service.",
  },
  {
    title: "6. Revisions",
    body: "We may revise these terms of service at any time without notice. By using this service you are agreeing to be bound by the then current version of these terms.",
  },
  {
    title: "7. Governing Law",
    body: "These terms and conditions are governed by and construed in accordance with applicable laws and you irrevocably submit to the exclusive jurisdiction of the courts.",
  },
];
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger as-child>
      <Button variant="outline" size="sm">Open Dialog</Button>
    </Dialog.Trigger>
    <Dialog.Content class="max-h-[min(32rem,calc(100vh-4rem))]">
      <Dialog.CloseTrigger as-child>
        <Button
          variant="ghost"
          size="icon-xs"
          class="absolute top-3 right-3 size-6"
        >
          <XIcon />
        </Button>
      </Dialog.CloseTrigger>
      <Dialog.Title>Terms of Service</Dialog.Title>
      <Dialog.Description
        >Please review our terms before continuing.</Dialog.Description
      >
      <Dialog.ScrollContainer>
        <Dialog.ScrollSection v-for="item in contentSections" :key="item.title">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </Dialog.ScrollSection>
      </Dialog.ScrollContainer>
      <Dialog.Actions>
        <Dialog.CloseTrigger as-child>
          <Button variant="outline" size="sm">Decline</Button>
        </Dialog.CloseTrigger>
        <Dialog.CloseTrigger as-child>
          <Button size="sm">Accept</Button>
        </Dialog.CloseTrigger>
      </Dialog.Actions>
    </Dialog.Content>
  </Dialog.Root>
</template>
