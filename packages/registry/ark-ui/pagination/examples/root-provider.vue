<script setup lang="ts">
import { ChevronLeft, ChevronRight } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Pagination, usePagination } from "@vuzeno/registry/ui/pagination";

const pagination = usePagination({ count: 5000, pageSize: 10, siblingCount: 2 });
</script>

<template>
  <div class="flex flex-col gap-4">
    <Button variant="outline" size="sm" @click="pagination.goToNextPage()">
      Next Page
    </Button>

    <Pagination.RootProvider :value="pagination">
      <div class="flex items-center gap-1">
        <Pagination.PrevTrigger>
          <ChevronLeft />
        </Pagination.PrevTrigger>
        <Pagination.Context v-slot="ctx">
          <template v-for="(page, index) in ctx.pages" :key="index">
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
    </Pagination.RootProvider>
  </div>
</template>
