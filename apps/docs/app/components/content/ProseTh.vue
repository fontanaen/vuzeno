<script setup lang="ts">
</script>

<template>
  <!-- Visual styles live in ProseTable.vue — keep only alignment here. -->
  <th class="text-left font-medium [&[align=center]]:text-center [&[align=right]]:text-right">
    <slot />
  </th>
</template>
