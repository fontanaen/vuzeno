<script setup lang="ts">
import { Table } from "@vuzeno/registry/ui/table";
</script>

<template>
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.Head>Name</Table.Head>
        <Table.Head>Email</Table.Head>
        <Table.Head>Role</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Empty :colspan="3">No results.</Table.Empty>
    </Table.Body>
  </Table.Root>
</template>
