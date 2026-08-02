<script setup lang="ts">
</script>

<template>
  <!-- Visual styles live in ProseTable.vue — keep only alignment here. -->
  <td class="text-left [&[align=center]]:text-center [&[align=right]]:text-right">
    <slot />
  </td>
</template>
