<script setup lang="ts">
import { Collapsible } from "@vuzeno/registry/ui/collapsible";
import { ChevronRightIcon } from "lucide-vue-next";
</script>

<template>
  <Collapsible.Root>
    <Collapsible.Trigger>
      Getting Started
      <Collapsible.Indicator>
        <ChevronRightIcon />
      </Collapsible.Indicator>
    </Collapsible.Trigger>
    <Collapsible.Content>
      <Collapsible.Body>
        <p class="mb-4">Welcome to the Ark UI documentation. Here are some topics to explore:</p>

        <Collapsible.Root>
          <Collapsible.Trigger>
            Installation
            <Collapsible.Indicator>
              <ChevronRightIcon />
            </Collapsible.Indicator>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <Collapsible.Body>
              <p>Install Ark UI using your preferred package manager:</p>
              <code>npm install @ark-ui/vue</code>
            </Collapsible.Body>
          </Collapsible.Content>
        </Collapsible.Root>

        <Collapsible.Root>
          <Collapsible.Trigger>
            Styling
            <Collapsible.Indicator>
              <ChevronRightIcon />
            </Collapsible.Indicator>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <Collapsible.Body>
              <p>Ark UI components are unstyled by default. Use CSS modules, Tailwind, or any styling solution.</p>
            </Collapsible.Body>
          </Collapsible.Content>
        </Collapsible.Root>
      </Collapsible.Body>
    </Collapsible.Content>
  </Collapsible.Root>
</template>
