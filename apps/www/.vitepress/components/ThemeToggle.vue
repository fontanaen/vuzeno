<script setup lang="ts">
import { Button } from "@vuetella/ui/components/button";
import { useToggle } from "@vueuse/core";
import { MoonStarIcon, SunIcon } from "lucide-vue-next";
import { SwitchRoot, SwitchThumb } from "reka-ui";
import { useData } from "vitepress";
import { ref } from "vue";

const { isDark } = useData();

const toggleTheme = useToggle(isDark);
</script>
  
<template>
  <Button class="rounded-full" variant="secondary" size="icon-sm" @click="toggleTheme()">
    <MoonStarIcon v-if="isDark" />
    <SunIcon v-else />
  </Button>
</template>