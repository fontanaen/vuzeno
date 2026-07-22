<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Drawer } from "@vuzeno/registry/ui/drawer";
import { Field } from "@vuzeno/registry/ui/field";
import { Input } from "@vuzeno/registry/ui/input";
import { XIcon } from "lucide-vue-next";
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
  <Drawer.Root
    swipe-direction="end"
    @trigger-value-change="
      (event) =>
        (activeUser = users.find((user) => user.id === event.value) ?? null)
    "
  >
    <div class="flex flex-wrap gap-2">
      <Drawer.Trigger
        v-for="user in users"
        :key="user.id"
        :value="user.id"
        as-child
      >
        <Button variant="outline">Edit {{ user.name }}</Button>
      </Drawer.Trigger>
    </div>
    <Drawer.Content>
      <Drawer.Grabber>
        <Drawer.GrabberIndicator />
      </Drawer.Grabber>
      <Drawer.Title>Edit User</Drawer.Title>
      <div v-if="activeUser" class="flex flex-col gap-4">
        <Field.Root class="flex flex-col gap-1.5">
          <Field.Label for="drawer-user-name">Name</Field.Label>
          <Field.Input id="drawer-user-name" :model-value="activeUser.name" />
        </Field.Root>
        <Field.Root class="flex flex-col gap-1.5">
          <Field.Label for="drawer-user-email">Email</Field.Label>
          <Field.Input id="drawer-user-email" :model-value="activeUser.email" />
        </Field.Root>
        <div class="flex gap-2">
          <Drawer.CloseTrigger as-child>
            <Button variant="outline">Cancel</Button>
          </Drawer.CloseTrigger>
          <Drawer.CloseTrigger as-child>
            <Button>Save Changes</Button>
          </Drawer.CloseTrigger>
        </div>
      </div>
      <Drawer.CloseTrigger>
        <XIcon />
      </Drawer.CloseTrigger>
    </Drawer.Content>
  </Drawer.Root>
</template>
