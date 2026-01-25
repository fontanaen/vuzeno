<script setup lang="ts">
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@vuetella/ui/components/table";

const props = defineProps<{
  data: {
    name: string;
    type: string;
    description: string;
  }[];
}>();
</script>
    
<template>
    <div class="w-full border rounded-md overflow-hidden prose-table:mt-0! prose-table:mb-0! mb-4 bg-background">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead class="pb-0">Event</TableHead>
                    <TableHead class="pb-0">Type</TableHead>
                    <TableHead class="pb-0">Description</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                <TableRow v-for="prop in data" :key="prop.name">
                    <TableCell>
                        <span class="bg-amber-500/20 text-amber-500 px-2 py-1 rounded-md font-medium">{{ prop.name }}</span>
                    </TableCell>
                    <TableCell>
                        <span class="bg-blue-500/20 text-blue-500 px-2 py-1 rounded-md font-medium">{{ prop.type }}</span>
                    </TableCell>
                    <TableCell>{{ prop.description }}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
</template>