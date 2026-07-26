<script setup lang="ts">
import { CircleAlertIcon, CircleCheckIcon, CircleDotDashedIcon, CircleDotIcon, OctagonAlertIcon, OctagonIcon } from "@lucide/vue";
import { Badge } from "@vuzeno/registry/ui/badge";
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <Badge variant="default">
        <CircleDotIcon />
        Default
      </Badge>
      <Badge variant="secondary">
        <CircleDotDashedIcon />
        Secondary
      </Badge>
      <Badge variant="destructive">
        <OctagonAlertIcon />
        Destructive
      </Badge>
      <Badge variant="success">
        <CircleCheckIcon />
        Success
      </Badge>
      <Badge variant="warning">
        <CircleAlertIcon />
        Warning
      </Badge>
      <Badge variant="outline">
        <CircleDotDashedIcon />
        Outline
      </Badge>
    </div>
  </div>
</template>
