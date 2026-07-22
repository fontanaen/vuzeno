<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { ButtonGroup } from "@vuzeno/registry/ui/button-group";
import { Input } from "@vuzeno/registry/ui/input";
import { createListCollection, Select } from "@vuzeno/registry/ui/select";
import { ArrowRightIcon } from "lucide-vue-next";
import { ref } from "vue";

const currency = ref(["$"]);

const currencies = createListCollection({
  items: [
    { label: "US Dollar", value: "$" },
    { label: "Euro", value: "€" },
    { label: "British Pound", value: "£" },
  ],
});
</script>

<template>
  <ButtonGroup aria-label="Send amount">
    <ButtonGroup>
      <Select.Root v-model="currency" :collection="currencies" class="w-fit max-w-none gap-0">
        <Select.Trigger class="w-fit font-mono">
          <Select.Value>
            {{ currency[0] }}
          </Select.Value>
        </Select.Trigger>

        <Select.Content class="min-w-24">
          <Select.ItemGroup>
            <Select.Item v-for="item in currencies.items" :key="item.value" :item="item">
              <Select.ItemText>
                {{ item.value }}
                <span class="ml-1 text-muted-foreground">{{ item.label }}</span>
              </Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
          </Select.ItemGroup>
        </Select.Content>
      </Select.Root>
      <Input placeholder="10.00" pattern="[0-9]*" class="min-w-24" />
    </ButtonGroup>

    <ButtonGroup>
      <Button aria-label="Send" size="icon" variant="outline">
        <ArrowRightIcon />
      </Button>
    </ButtonGroup>
  </ButtonGroup>
</template>
