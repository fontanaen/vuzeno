<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
import { Field } from "@vuzeno/registry/ui/field";
import { ref } from "vue";

type User = {
  id: string;
  name: string;
  email: string;
};

const users: User[] = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com" },
  { id: "2", name: "Bob Smith", email: "bob@example.com" },
  { id: "3", name: "Carol Davis", email: "carol@example.com" },
];

const activeUser = ref<User | null>(null);
</script>

<template>
  <Dialog.Root
    @trigger-value-change="
      (event) =>
        (activeUser = users.find((user) => user.id === event.value) ?? null)
    "
  >
    <div class="flex flex-wrap gap-2">
      <Dialog.Trigger
        v-for="user in users"
        :key="user.id"
        :value="user.id"
        as-child
      >
        <Button variant="secondary" size="sm">Edit {{ user.name }}</Button>
      </Dialog.Trigger>
    </div>
    <Dialog.Content>
      <Dialog.Title>Edit User</Dialog.Title>
      <Dialog.Description
        >Update the user's information below.</Dialog.Description
      >
      <template v-if="activeUser">
        <Dialog.Body>
          <Field.Root>
            <Field.Label>Name</Field.Label>
            <Field.Input :model-value="activeUser.name" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Field.Input :model-value="activeUser.email" />
          </Field.Root>
        </Dialog.Body>
        <Dialog.Actions>
          <Dialog.CloseTrigger as-child>
            <Button variant="secondary" size="sm">Cancel</Button>
          </Dialog.CloseTrigger>
          <Dialog.CloseTrigger as-child>
            <Button size="sm">Save Changes</Button>
          </Dialog.CloseTrigger>
        </Dialog.Actions>
      </template>
    </Dialog.Content>
  </Dialog.Root>
</template>
