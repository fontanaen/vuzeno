<script setup lang="ts">
import { Pagination } from "@vuzeno/registry/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

const users = [
  { id: 1, name: "Emma Wilson", email: "emma@example.com" },
  { id: 2, name: "Liam Johnson", email: "liam@example.com" },
  { id: 3, name: "Olivia Brown", email: "olivia@example.com" },
  { id: 4, name: "Noah Davis", email: "noah@example.com" },
  { id: 5, name: "Ava Martinez", email: "ava@example.com" },
  { id: 6, name: "Ethan Garcia", email: "ethan@example.com" },
  { id: 7, name: "Sophia Rodriguez", email: "sophia@example.com" },
  { id: 8, name: "Mason Lee", email: "mason@example.com" },
  { id: 9, name: "Isabella Walker", email: "isabella@example.com" },
  { id: 10, name: "James Hall", email: "james@example.com" },
  { id: 11, name: "Mia Allen", email: "mia@example.com" },
  { id: 12, name: "Benjamin Young", email: "benjamin@example.com" },
  { id: 13, name: "Charlotte King", email: "charlotte@example.com" },
  { id: 14, name: "William Wright", email: "william@example.com" },
  { id: 15, name: "Amelia Scott", email: "amelia@example.com" },
  { id: 16, name: "Henry Green", email: "henry@example.com" },
  { id: 17, name: "Harper Adams", email: "harper@example.com" },
  { id: 18, name: "Sebastian Baker", email: "sebastian@example.com" },
  { id: 19, name: "Evelyn Nelson", email: "evelyn@example.com" },
  { id: 20, name: "Jack Carter", email: "jack@example.com" },
];
</script>

<template>
  <Pagination.Root :count="users.length" :page-size="5">
    <Pagination.Context v-slot="pagination">
      <div class="flex w-full flex-col gap-2">
        <div
          v-for="user in pagination.slice(users)"
          :key="user.id"
          class="flex w-full items-center justify-between rounded-md border border-border bg-muted px-4 py-3 text-sm text-foreground"
        >
          <span class="font-medium text-foreground">{{ user.name }}</span>
          <span class="text-[0.8125rem] text-muted-foreground">{{ user.email }}</span>
        </div>
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
    </Pagination.Context>
  </Pagination.Root>
</template>
