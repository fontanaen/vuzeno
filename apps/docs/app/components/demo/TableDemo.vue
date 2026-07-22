<script setup lang="ts">
import { Badge } from "@vuzeno/registry/ui/badge";
import { Table } from "@vuzeno/registry/ui/table";
import { CircleCheckIcon, CircleDashedIcon, CircleXIcon, ClockIcon, CreditCardIcon, DollarSignIcon, FileIcon } from "lucide-vue-next";

const statuses = {
  paid: {
    label: "Paid",
    value: "paid",
    variant: "success",
    icon: CircleCheckIcon,
  },
  pending: {
    label: "Pending",
    value: "pending",
    variant: "warning",
    icon: ClockIcon,
  },
  unpaid: {
    label: "Unpaid",
    value: "unpaid",
    variant: "destructive",
    icon: CircleXIcon,
  },
} as const;

const invoices = computed(() => [
  {
    invoice: "INV001",
    status: statuses.paid,
    method: "Credit Card",
    amount: "$250.00",
  },
  {
    invoice: "INV002",
    status: statuses.pending,
    method: "PayPal",
    amount: "$150.00",
  },
  {
    invoice: "INV003",
    status: statuses.unpaid,
    method: "Bank Transfer",
    amount: "$350.00",
  },
  {
    invoice: "INV004",
    status: statuses.paid,
    method: "Credit Card",
    amount: "$450.00",
  },
  {
    invoice: "INV005",
    status: statuses.paid,
    method: "PayPal",
    amount: "$550.00",
  },
]);
</script>

<template>
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.Head class="w-[100px]">
          <FileIcon />
          Invoice
        </Table.Head>
        <Table.Head>
          <CircleDashedIcon />
          Status
        </Table.Head>
        <Table.Head>
          <CreditCardIcon />
          Method
        </Table.Head>
        <Table.Head class="justify-end">
          <DollarSignIcon />
          Amount
        </Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row v-for="invoice in invoices" :key="invoice.invoice">
        <Table.Cell class="font-medium">{{ invoice.invoice }}</Table.Cell>
        <Table.Cell>
          <Badge :variant="invoice.status.variant">
            <component :is="invoice.status.icon" />
            {{ invoice.status.label }}
          </Badge>
        </Table.Cell>
        <Table.Cell>{{ invoice.method }}</Table.Cell>
        <Table.Cell class="text-right">{{ invoice.amount }}</Table.Cell>
      </Table.Row>
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.Cell colspan="3">Total</Table.Cell>
        <Table.Cell class="text-right">$1,750.00</Table.Cell>
      </Table.Row>
    </Table.Footer>
  </Table.Root>
</template>
