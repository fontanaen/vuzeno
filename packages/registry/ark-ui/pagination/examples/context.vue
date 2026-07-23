<script setup lang="ts">
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Pagination } from "@vuzeno/registry/ui/pagination";
</script>

<template>
  <Pagination.Root :count="100" :page-size="10">
    <Pagination.Context v-slot="pagination">
      <div class="flex items-center gap-1">
        <Button variant="outline" size="sm" @click="pagination.goToFirstPage()">
          <ChevronsLeft />
        </Button>
        <Button variant="outline" size="sm" @click="pagination.goToPrevPage()">
          <ChevronLeft />
        </Button>
        <p class="min-w-[120px] text-center text-sm text-foreground">
          Page {{ pagination.page }} of {{ pagination.totalPages }}
        </p>
        <Button variant="outline" size="sm" @click="pagination.goToNextPage()">
          <ChevronRight />
        </Button>
        <Button variant="outline" size="sm" @click="pagination.goToLastPage()">
          <ChevronsRight />
        </Button>
      </div>
    </Pagination.Context>
  </Pagination.Root>
</template>
