<script setup lang="ts">
import { ChevronLeft, ChevronRight } from "@lucide/vue";
import { Pagination } from "@vuzeno/registry/ui/pagination";
</script>

<template>
  <Pagination.Root :count="100" :page-size="10">
    <Pagination.Context v-slot="pagination">
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

      <div class="flex flex-col gap-2">
        <p class="text-sm text-foreground">
          Showing {{ pagination.pageRange.start + 1 }}-{{ pagination.pageRange.end }} of {{ pagination.count }} results
        </p>
        <p class="text-sm text-foreground">
          Page {{ pagination.page }} of {{ pagination.totalPages }}
        </p>
      </div>
    </Pagination.Context>
  </Pagination.Root>
</template>
