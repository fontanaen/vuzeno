<script setup lang="ts">
</script>

<template>
  <Body
    class="group/body overscroll-none antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]"
  >
    <slot />
  </Body>
</template>