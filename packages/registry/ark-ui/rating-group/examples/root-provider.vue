<script setup lang="ts">
import { StarIcon } from "@lucide/vue";
import { Field } from "@vuzeno/registry/ui/field";
import { RatingGroup, useRatingGroup } from "@vuzeno/registry/ui/rating-group";

const ratingGroup = useRatingGroup({ defaultValue: 3 });
</script>

<template>
  <div class="flex flex-col gap-4">
    <output class="text-sm text-muted-foreground">
      value: {{ ratingGroup.value }}
    </output>
    <Field.Root>
      <RatingGroup.RootProvider :value="ratingGroup">
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
      </RatingGroup.RootProvider>
    </Field.Root>
  </div>
</template>
