<script setup lang="ts">
import { CircleCheckIcon, CircleXIcon, ClockIcon, CreditCardIcon, DollarSignIcon, FileIcon, TagIcon } from "@lucide/vue";
import { Badge } from "@vuzeno/registry/ui/badge";
import type { Filter, FilterValue } from "@vuzeno/registry/ui/filters";
import { Field, Filters, Operator } from "@vuzeno/registry/ui/filters";
import { Table } from "@vuzeno/registry/ui/table";
import { computed, type Ref, ref } from "vue";

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

type InvoiceStatus = keyof typeof statuses;

type Invoice = {
  invoice: string;
  status: InvoiceStatus;
  method: string;
  amount: number;
};

const invoices: Invoice[] = [
  { invoice: "INV001", status: "paid", method: "Credit Card", amount: 250 },
  { invoice: "INV002", status: "pending", method: "PayPal", amount: 150 },
  { invoice: "INV003", status: "unpaid", method: "Bank Transfer", amount: 350 },
  { invoice: "INV004", status: "paid", method: "Credit Card", amount: 450 },
  { invoice: "INV005", status: "paid", method: "PayPal", amount: 550 },
  { invoice: "INV006", status: "pending", method: "Bank Transfer", amount: 120 },
  { invoice: "INV007", status: "unpaid", method: "Credit Card", amount: 890 },
  { invoice: "INV008", status: "paid", method: "PayPal", amount: 75 },
];

const statusItems = Object.values(statuses).map((status) => ({
  label: status.label,
  value: status.value,
}));

const methodItems = [
  { label: "Credit Card", value: "Credit Card" },
  { label: "PayPal", value: "PayPal" },
  { label: "Bank Transfer", value: "Bank Transfer" },
] as const;

const fields = ref([
  Field.TextField({
    key: "invoice",
    label: "Invoice",
    icon: FileIcon,
    operators: [Operator.Contain({ label: "contains" }), Operator.Eq({ label: "is" })],
  }),
  Field.TextField({
    key: "status",
    label: "Status",
    icon: TagIcon,
    operators: [
      Operator.In({
        label: "any of",
        options: { items: statusItems },
        default: true,
      }),
      Operator.Eq({
        label: "is",
        inputType: "select",
        options: { items: statusItems },
      }),
    ],
  }),
  Field.TextField({
    key: "method",
    label: "Method",
    icon: CreditCardIcon,
    operators: [
      Operator.In({
        label: "any of",
        options: { items: methodItems },
        default: true,
      }),
      Operator.Eq({
        label: "is",
        inputType: "select",
        options: { items: methodItems },
      }),
    ],
  }),
  Field.NumberField({
    key: "amount",
    label: "Amount",
    icon: DollarSignIcon,
    min: 0,
    max: 1000,
    step: 25,
    numberFormat: { style: "currency", currency: "USD", maximumFractionDigits: 0 },
    operators: [Operator.Lt({ label: "less than", default: true, defaultValue: 500 }), Operator.Gt({ label: "greater than" }), Operator.Btw({ label: "between" }), Operator.Eq({ label: "is" })],
  }),
]);

const filters: Ref<Filter[]> = ref([{ field: "status", operator: "in", value: ["paid", "pending"] }]);

function hasFilterValue(value: FilterValue): boolean {
  if (value === null || value === undefined) {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length > 0;
  }

  if (typeof value === "string") {
    return value.trim().length > 0;
  }

  return true;
}

function matchesFilter(invoice: Invoice, filter: Filter): boolean {
  if (!hasFilterValue(filter.value)) {
    return true;
  }

  const fieldValue = invoice[filter.field as keyof Invoice];

  if (filter.operator === "contains") {
    return String(fieldValue).toLowerCase().includes(String(filter.value).toLowerCase());
  }

  if (filter.operator === "eq") {
    return fieldValue === filter.value;
  }

  if (filter.operator === "in" && Array.isArray(filter.value)) {
    return filter.value.includes(fieldValue as never);
  }

  if (typeof fieldValue !== "number") {
    return true;
  }

  if (filter.operator === "lt" && typeof filter.value === "number") {
    return fieldValue < filter.value;
  }

  if (filter.operator === "gt" && typeof filter.value === "number") {
    return fieldValue > filter.value;
  }

  if (filter.operator === "btw" && Array.isArray(filter.value) && filter.value.length === 2) {
    const [min, max] = filter.value;
    return typeof min === "number" && typeof max === "number" && fieldValue >= min && fieldValue <= max;
  }

  return true;
}

function formatAmount(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

const filteredInvoices = computed(() => {
  return invoices.filter((invoice) => {
    return filters.value.every((filter) => matchesFilter(invoice, filter));
  });
});

const totalAmount = computed(() => {
  return filteredInvoices.value.reduce((sum, invoice) => sum + invoice.amount, 0);
});
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <Filters.Provider v-model:filters="filters" :fields="fields" variant="outline" size="sm">
      <Filters.Menu>
        <Filters.MenuTrigger />
        <Filters.MenuContent />
      </Filters.Menu>

      <Filters.Group>
        <Filters.Item
          v-for="filter in filters"
          :key="`${filter.field}:${filter.operator}`"
          :filter="filter"
        />
      </Filters.Group>

      <Filters.Clear />
    </Filters.Provider>

    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head class="w-25">
            Invoice
          </Table.Head>
          <Table.Head>
            Status
          </Table.Head>
          <Table.Head>
            Method
          </Table.Head>
          <Table.Head class="justify-end">
            Amount
          </Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Empty v-if="filteredInvoices.length === 0" :colspan="4">
          No invoices match these filters.
        </Table.Empty>
        <Table.Row v-for="invoice in filteredInvoices" :key="invoice.invoice">
          <Table.Cell class="font-medium">{{ invoice.invoice }}</Table.Cell>
          <Table.Cell>
            <Badge :variant="statuses[invoice.status].variant">
              <component :is="statuses[invoice.status].icon" />
              {{ statuses[invoice.status].label }}
            </Badge>
          </Table.Cell>
          <Table.Cell>{{ invoice.method }}</Table.Cell>
          <Table.Cell class="text-right">{{ formatAmount(invoice.amount) }}</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer v-if="filteredInvoices.length > 0">
        <Table.Row>
          <Table.Cell colspan="3">Total</Table.Cell>
          <Table.Cell class="text-right">{{ formatAmount(totalAmount) }}</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table.Root>
  </div>
</template>
