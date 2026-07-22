<script setup lang="ts">
import { Breadcrumb } from "@vuzeno/registry/ui/breadcrumb";
import { SlashIcon } from "lucide-vue-next";
</script>

<template>
  <Breadcrumb.Root>
    <Breadcrumb.List>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/">
          Home
        </Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator>
        <SlashIcon />
      </Breadcrumb.Separator>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/components">
          Components
        </Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator>
        <SlashIcon />
      </Breadcrumb.Separator>
      <Breadcrumb.Item>
        <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb.Root>
</template>
