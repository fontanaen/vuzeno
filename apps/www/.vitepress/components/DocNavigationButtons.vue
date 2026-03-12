<script setup lang="ts">
import { Button } from "@vuzeno/ui/components/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-vue-next";
import { usePrevNext } from "../composables/use-prev-next";

const control = usePrevNext();
</script>

<template>
  <div class="flex gap-2">
    <Button as="a" :href="control.prev?.link" :disabled="!control.prev" variant="secondary" size="icon-sm" class="size-7">
      <ArrowLeftIcon />
    </Button>
    <Button as="a" :href="control.next?.link" :disabled="!control.next" variant="secondary" size="icon-sm" class="size-7">
      <ArrowRightIcon />
    </Button>
  </div>
</template>