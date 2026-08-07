<script setup lang="ts">
import { CheckIcon, SearchIcon, SendIcon, XIcon } from "@lucide/vue";
import type { AutocompleteInputValueChangeDetails } from "@vuzeno/registry/ui/autocomplete";
import { Autocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";
import { Avatar } from "@vuzeno/registry/ui/avatar";
import { Badge } from "@vuzeno/registry/ui/badge";
import { Button } from "@vuzeno/registry/ui/button";
import { Kbd } from "@vuzeno/registry/ui/kbd";
import { createListCollection, Select } from "@vuzeno/registry/ui/select";
import { computed, onBeforeUnmount, ref } from "vue";

type Person = {
  name: string;
  email: string;
  team: string;
  gradient: string;
};

const people: Person[] = [
  { name: "shadcn", email: "shadcn@gmail.com", team: "Design", gradient: "from-neutral-800 to-neutral-400" },
  { name: "OrcDev", email: "orcdev@gmail.com", team: "Engineering", gradient: "from-emerald-600 to-lime-300" },
  { name: "Zeno", email: "zeno@gmail.com", team: "Engineering", gradient: "from-sky-500 to-cyan-200" },
  { name: "Emil Kowalski", email: "emil@gmail.com", team: "Design", gradient: "from-violet-500 to-fuchsia-200" },
  { name: "Michael Thiessen", email: "michael@gmail.com", team: "Education", gradient: "from-amber-500 to-yellow-200" },
];

const roles = createListCollection({
  items: [
    { label: "Can view", value: "viewer" },
    { label: "Can edit", value: "editor" },
    { label: "Admin", value: "admin" },
  ],
});

const invitees = ref<string[]>(["zeno@gmail.com"]);
const rolesByEmail = ref<Record<string, string>>({
  "zeno@vuzeno.dev": "editor",
});
const sentCount = ref(0);
const sentReset = ref<ReturnType<typeof setTimeout>>();

function containsFilter(itemString: string, filterText: string) {
  return itemString.toLowerCase().includes(filterText.toLowerCase());
}

const { collection, filter } = useListCollection({
  initialItems: people,
  itemToString: (person) => person.name,
  itemToValue: (person) => person.email,
  groupBy: (person) => person.team,
  filter: containsFilter,
});

function handleInputChange(details: AutocompleteInputValueChangeDetails) {
  filter(details.inputValue);
}

function roleFor(email: string) {
  return [rolesByEmail.value[email] ?? "editor"];
}

function setRole(email: string, value: string[]) {
  rolesByEmail.value = {
    ...rolesByEmail.value,
    [email]: value[0] ?? "editor",
  };
}

function removeInvitee(email: string) {
  invitees.value = invitees.value.filter((invitee) => invitee !== email);
  ensureRoles(invitees.value);
}

function ensureRoles(emails: string[]) {
  const next = { ...rolesByEmail.value };

  for (const email of emails) {
    if (!next[email]) {
      next[email] = "editor";
    }
  }

  for (const email of Object.keys(next)) {
    if (!emails.includes(email)) {
      delete next[email];
    }
  }

  rolesByEmail.value = next;
}

function sendInvites() {
  sentCount.value = invitees.value.length;
  invitees.value = [];
  rolesByEmail.value = {};

  clearTimeout(sentReset.value);
  sentReset.value = setTimeout(() => {
    sentCount.value = 0;
  }, 4000);
}

const selectedPeople = computed(() => people.filter((person) => invitees.value.includes(person.email)));

onBeforeUnmount(() => {
  clearTimeout(sentReset.value);
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <Autocomplete.Root
      v-model="invitees"
      :collection="collection"
      multiple
      @input-value-change="handleInputChange"
      @update:model-value="ensureRoles"
    >
      <Autocomplete.Control>
        <Autocomplete.Indicators align="inline-start">
          <SearchIcon />
        </Autocomplete.Indicators>

        <Autocomplete.Input placeholder="Search teammates" size="sm" />

        <Autocomplete.Indicators align="inline-end">
          <Kbd.Group>
            <Kbd.Item>⌘</Kbd.Item>
            <Kbd.Item>K</Kbd.Item>
          </Kbd.Group>
        </Autocomplete.Indicators>
      </Autocomplete.Control>

      <Autocomplete.Content>
        <Autocomplete.Empty>Nobody here goes by that name.</Autocomplete.Empty>

        <Autocomplete.ItemGroup v-for="[team, members] in collection.group()" :key="team">
          <Autocomplete.ItemGroupLabel>{{ team }}</Autocomplete.ItemGroupLabel>

          <Autocomplete.Item v-for="person in members" :key="person.email" :item="person">
            <Avatar.Root size="sm">
              <Avatar.Fallback
                class="size-full bg-linear-to-tr"
                :class="person.gradient"
                :aria-label="person.name"
              />
            </Avatar.Root>

            <Autocomplete.ItemText>
              <Autocomplete.ItemTitle>{{ person.name }}</Autocomplete.ItemTitle>
              <Autocomplete.ItemSubtitle>{{ person.email }}</Autocomplete.ItemSubtitle>
            </Autocomplete.ItemText>

            <Autocomplete.ItemIndicator>
              <CheckIcon />
            </Autocomplete.ItemIndicator>
          </Autocomplete.Item>
        </Autocomplete.ItemGroup>
      </Autocomplete.Content>
    </Autocomplete.Root>

    <ul v-if="selectedPeople.length" class="divide-y divide-border overflow-hidden rounded-lg border border-input">
      <li
        v-for="person in selectedPeople"
        :key="person.email"
        class="flex items-center gap-3 bg-background dark:bg-input/30 px-3 py-2 animate-in fade-in-0 slide-in-from-top-1 duration-200"
      >
        <Avatar.Root size="sm">
          <Avatar.Fallback
            class="size-full bg-linear-to-tr"
            :class="person.gradient"
            :aria-label="person.name"
          />
        </Avatar.Root>

        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-medium text-foreground">{{ person.name }}</p>
          <p class="truncate text-xs text-muted-foreground">{{ person.email }}</p>
        </div>

        <Badge variant="secondary">
          {{ person.team }}
        </Badge>

        <div class="w-26 shrink-0">
          <Select.Root
            :model-value="roleFor(person.email)"
            :collection="roles"
            @update:model-value="setRole(person.email, $event)"
          >
            <Select.Trigger size="sm" class="h-7 text-xs px-2">
              <Select.Value placeholder="Access" />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Content>
              <Select.Item v-for="item in roles.items" :key="item.value" :item="item">
                <Select.ItemText>{{ item.label }}</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <Button
          variant="ghost"
          size="icon-sm"
          :aria-label="`Remove ${person.name}`"
          @click="removeInvitee(person.email)"
        >
          <XIcon />
        </Button>
      </li>
    </ul>

    <p
      v-else-if="sentCount"
      class="flex items-center gap-2 rounded-lg border border-dashed border-border px-3 py-4 text-sm text-foreground animate-in fade-in-0 duration-200"
    >
      <CheckIcon class="size-4 text-primary" />
      {{ sentCount }} {{ sentCount === 1 ? "invite" : "invites" }} sent.
    </p>

    <p v-else class="rounded-lg border border-dashed border-border px-3 py-4 text-sm text-muted-foreground">
      Nobody selected yet. Picked teammates land here before you send.
    </p>

    <Button size="sm" :disabled="!invitees.length" @click="sendInvites">
      <SendIcon />
      Send {{ invitees.length || "" }} {{ invitees.length === 1 ? "invite" : "invites" }}
    </Button>
  </div>
</template>
