<script setup lang="ts">
import { type DateValue, getLocalTimeZone, today } from "@internationalized/date";
import { CalendarIcon, CheckIcon, GlobeIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { DatePicker } from "@vuzeno/registry/ui/date-picker";
import { SegmentGroup } from "@vuzeno/registry/ui/segment-group";
import { computed, ref, watch } from "vue";

const FIRST_SLOT_MINUTES = 9 * 60;
const SLOT_COUNT = 6;

const timeZone = getLocalTimeZone();

const dates = ref<DateValue[]>([today(timeZone).add({ days: 2 })]);
const duration = ref("30");
const slot = ref<string | null>("10:30 AM");
const booked = ref(false);

function formatSlot(minutesFromMidnight: number) {
  const hours = Math.floor(minutesFromMidnight / 60);
  const minutes = minutesFromMidnight % 60;
  const meridiem = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 === 0 ? 12 : hours % 12;

  return `${displayHours}:${String(minutes).padStart(2, "0")} ${meridiem}`;
}

function selectSlot(value: string) {
  slot.value = value;
  booked.value = false;
}

const slots = computed(() => {
  const step = Number(duration.value);

  return Array.from({ length: SLOT_COUNT }, (_, index) => formatSlot(FIRST_SLOT_MINUTES + index * step));
});

const dayLabel = computed(() => {
  const date = dates.value[0];

  if (!date) {
    return "Pick a day";
  }

  return date.toDate(timeZone).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
});

watch([duration, dates], () => {
  slot.value = null;
  booked.value = false;
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <SegmentGroup.Root v-model="duration">
      <SegmentGroup.Indicator />
      <SegmentGroup.Item v-for="length in ['15', '30', '45']" :key="length" :value="length">
        <SegmentGroup.ItemText>{{ length }} min</SegmentGroup.ItemText>
      </SegmentGroup.Item>
    </SegmentGroup.Root>

    <DatePicker.Root v-model="dates" :min="today(timeZone)" lazy-mount unmount-on-exit>
      <DatePicker.Control class="flex w-full items-center gap-2">
        <DatePicker.Input placeholder="Pick a day" class="w-full" />
        <DatePicker.Trigger as-child>
          <Button size="icon" variant="outline" aria-label="Open calendar">
            <CalendarIcon />
          </Button>
        </DatePicker.Trigger>
      </DatePicker.Control>
      <DatePicker.Content>
        <DatePicker.Calendar />
      </DatePicker.Content>
    </DatePicker.Root>

    <div class="space-y-2">
      <div class="flex items-baseline justify-between gap-2">
        <p class="text-sm font-medium text-foreground">{{ dayLabel }}</p>
        <p class="text-xs text-muted-foreground">{{ slots.length }} slots open</p>
      </div>

      <div class="grid grid-cols-3 gap-2">
        <Button
          v-for="time in slots"
          :key="time"
          size="sm"
          :variant="time === slot ? 'default' : 'outline'"
          :aria-pressed="time === slot"
          @click="selectSlot(time)"
        >
          {{ time }}
        </Button>
      </div>
    </div>

    <p class="flex items-center gap-1.5 text-xs text-muted-foreground">
      <GlobeIcon class="size-3.5" />
      Times shown in {{ timeZone }}
    </p>

    <div
      v-if="booked"
      class="flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-sm animate-in fade-in-0 slide-in-from-bottom-1 duration-200"
    >
      <CheckIcon class="size-4 shrink-0 text-primary" />
      <span class="min-w-0 flex-1 truncate text-foreground">
        Booked {{ dayLabel }} at {{ slot }}
      </span>
      <Button variant="ghost" size="sm" @click="booked = false">
        Change
      </Button>
    </div>

    <Button v-else :disabled="!slot" @click="booked = true">
      {{ slot ? `Confirm ${duration} min at ${slot}` : "Pick a time to continue" }}
    </Button>
  </div>
</template>