<script setup lang="ts">
import { Pagination } from "@vuzeno/registry/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
</script>

<template>
  <Pagination.Root :count="100" :default-page-size="10">
    <Pagination.Context v-slot="pagination">
      <div class="flex items-center gap-2">
        <label class="text-sm text-foreground">Items per page:</label>
        <select
          class="h-9 rounded-md border border-border bg-transparent px-2 font-[inherit] text-sm text-foreground focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-primary"
          :value="pagination.pageSize"
          @change="(event) => pagination.setPageSize(Number((event.currentTarget as HTMLSelectElement).value))"
        >
          <option :value="5">5</option>
          <option :value="10">10</option>
          <option :value="20">20</option>
          <option :value="50">50</option>
        </select>
      </div>

      <div class="flex items-center gap-1">
        <Pagination.PrevTrigger>
          <ChevronLeft />
        </Pagination.PrevTrigger>

        <template v-for="(page, index) in pagination.pages" :key="index">
          <Pagination.Item v-if="page.type === 'page'" v-bind="page">
            {{ page.value }}
          </Pagination.Item>
          <Pagination.Ellipsis v-else :index="index">&#8230;</Pagination.Ellipsis>
        </template>

        <Pagination.NextTrigger>
          <ChevronRight />
        </Pagination.NextTrigger>
      </div>

      <p class="text-sm text-foreground">
        Page {{ pagination.page }} of {{ pagination.totalPages }}
      </p>
    </Pagination.Context>
  </Pagination.Root>
</template>
