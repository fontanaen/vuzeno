<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Card } from "@vuzeno/registry/ui/card";
import { Field } from "@vuzeno/registry/ui/field";
</script>

<template>
  <Card.Root class="w-[350px]">
    <Card.Header>
      <Card.Title>Login</Card.Title>
      <Card.Description>Enter your email below to sign in to your account.</Card.Description>
    </Card.Header>
    <Card.Content class="grid gap-4">
      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Field.Input type="email" placeholder="m@example.com" />
      </Field.Root>
      <Field.Root>
        <Field.Label>Password</Field.Label>
        <Field.Input type="password" />
      </Field.Root>

      <Button class="w-full mt-2">Sign in</Button>
    </Card.Content>
  </Card.Root>
</template>
