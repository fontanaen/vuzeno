<script setup lang="ts">
import { CheckIcon, SearchIcon, SendIcon, XIcon } from "@lucide/vue";
import type { AutocompleteInputValueChangeDetails } from "@vuzeno/registry/ui/autocomplete";
import { Autocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";
import { Avatar } from "@vuzeno/registry/ui/avatar";
import { Button } from "@vuzeno/registry/ui/button";
import { Kbd } from "@vuzeno/registry/ui/kbd";
import { createListCollection, Select } from "@vuzeno/registry/ui/select";
import { computed, onBeforeUnmount, ref } from "vue";

type Person = {
  name: string;
  email: string;
  team: string;
  initials: string;
  avatar: string;
};

function avatarUrl(seed: string) {
  return `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(seed)}`;
}

const people: Person[] = [
  { name: "Ada Lovelace", email: "ada@vuzeno.dev", team: "Engineering", initials: "AL", avatar: avatarUrl("Ada Lovelace") },
  { name: "Linus Torvalds", email: "linus@vuzeno.dev", team: "Engineering", initials: "LT", avatar: avatarUrl("Linus Torvalds") },
  { name: "Margaret Hamilton", email: "margaret@vuzeno.dev", team: "Engineering", initials: "MH", avatar: avatarUrl("Margaret Hamilton") },
  { name: "Grace Hopper", email: "grace@vuzeno.dev", team: "Design", initials: "GH", avatar: avatarUrl("Grace Hopper") },
  { name: "Susan Kare", email: "susan@vuzeno.dev", team: "Design", initials: "SK", avatar: avatarUrl("Susan Kare") },
  { name: "Katherine Johnson", email: "katherine@vuzeno.dev", team: "Operations", initials: "KJ", avatar: avatarUrl("Katherine Johnson") },
];

const roles = createListCollection({
  items: [
    { label: "Can view", value: "viewer" },
    { label: "Can edit", value: "editor" },
    { label: "Admin", value: "admin" },
  ],
});

const invitees = ref<string[]>(["grace@vuzeno.dev"]);
const rolesByEmail = ref<Record<string, string>>({
  "grace@vuzeno.dev": "editor",
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
  <div class="flex flex-col gap-3">
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

        <Autocomplete.Input placeholder="Search teammates" />

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
              <Avatar.Image :src="person.avatar" :alt="person.name" />
              <Avatar.Fallback>{{ person.initials }}</Avatar.Fallback>
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
          <Avatar.Image :src="person.avatar" :alt="person.name" />
          <Avatar.Fallback>{{ person.initials }}</Avatar.Fallback>
        </Avatar.Root>

        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-medium text-foreground">{{ person.name }}</p>
          <p class="truncate text-xs text-muted-foreground">{{ person.email }}</p>
        </div>

        <div class="w-32 shrink-0">
          <Select.Root
            :model-value="roleFor(person.email)"
            :collection="roles"
            @update:model-value="setRole(person.email, $event)"
          >
            <Select.Trigger size="sm">
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
