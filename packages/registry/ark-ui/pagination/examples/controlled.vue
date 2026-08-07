<script setup lang="ts">
import { ChevronLeft, ChevronRight } from "@lucide/vue";
import { Pagination } from "@vuzeno/registry/ui/pagination";
import { ref } from "vue";

const currentPage = ref(1);
</script>

<template>
  <Pagination.Root
    v-model:page="currentPage"
    :count="5000"
    :page-size="10"
    :sibling-count="2"
  >
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
