<script setup lang="ts">
import { Pagination, usePagination } from "@vuzeno/registry/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

const pagination = usePagination({
  type: "link",
  count: 100,
  pageSize: 10,
  siblingCount: 2,
  getPageUrl: ({ page }) => `/page=${page}`,
});
</script>

<template>
  <Pagination.RootProvider :value="pagination">
    <div class="flex items-center gap-1">
      <Pagination.PrevTrigger as-child>
        <a v-bind="pagination.getPrevTriggerProps()">
          <ChevronLeft />
        </a>
      </Pagination.PrevTrigger>
      <template v-for="(page, index) in pagination.pages" :key="index">
        <Pagination.Item v-if="page.type === 'page'" v-bind="page" as-child>
          <a v-bind="pagination.getItemProps(page)">
            {{ page.value }}
          </a>
        </Pagination.Item>
        <Pagination.Ellipsis v-else :index="index" as-child>
          <span v-bind="pagination.getEllipsisProps({ index })">&#8230;</span>
        </Pagination.Ellipsis>
      </template>
      <Pagination.NextTrigger as-child>
        <a v-bind="pagination.getNextTriggerProps()">
          <ChevronRight />
        </a>
      </Pagination.NextTrigger>
    </div>
  </Pagination.RootProvider>
</template>
