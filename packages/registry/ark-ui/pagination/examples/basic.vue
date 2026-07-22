<script setup lang="ts">
import { Pagination } from "@vuzeno/registry/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
</script>

<template>
  <Pagination.Root :count="5000" :page-size="10" :sibling-count="2">
    <div class="flex items-center gap-1">
      <Pagination.PrevTrigger>
        <ChevronLeft />
      </Pagination.PrevTrigger>
      <Pagination.Context v-slot="pagination">
        <template v-for="(page, index) in pagination.pages" :key="index">
          <Pagination.Item v-if="page.type === 'page'" v-bind="page">
            {{ page.value }}
          </Pagination.Item>
          <Pagination.Ellipsis v-else :index="index">&#8230;</Pagination.Ellipsis>
        </template>
      </Pagination.Context>
      <Pagination.NextTrigger>
        <ChevronRight />
      </Pagination.NextTrigger>
    </div>
  </Pagination.Root>
</template>
