<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Field } from "@vuzeno/registry/ui/field";
import { RatingGroup } from "@vuzeno/registry/ui/rating-group";
import { StarIcon } from "lucide-vue-next";

function onSubmit(event: Event) {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  window.alert(`Rating value: ${formData.get("review")}`);
}
</script>

<template>
  <form class="flex flex-col gap-4" @submit="onSubmit">
    <Field.Root>
      <RatingGroup.Root name="review" :default-value="3">
        <Field.Label>Label</Field.Label>
        <RatingGroup.Control>
          <RatingGroup.Context v-slot="{ items }">
            <RatingGroup.Item v-for="item in items" :key="item" :index="item">
              <RatingGroup.ItemContext v-slot="{ highlighted }">
                <RatingGroup.ItemIndicator :data-highlighted="highlighted ? '' : undefined">
                  <StarIcon data-bg="" />
                  <StarIcon data-fg="" fill="currentColor" />
                </RatingGroup.ItemIndicator>
              </RatingGroup.ItemContext>
            </RatingGroup.Item>
          </RatingGroup.Context>
        </RatingGroup.Control>
      </RatingGroup.Root>
    </Field.Root>
    <Button type="submit">Submit</Button>
  </form>
</template>
