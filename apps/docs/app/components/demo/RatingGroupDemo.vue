<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { RatingGroup } from "@vuzeno/registry/ui/rating-group";
import { StarIcon } from "lucide-vue-next";
</script>

<template>
  <Field.Root>
    <RatingGroup.Root :default-value="3">
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
</template>
