<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@vuetella/ui/components/dialog";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@vuetella/ui/components/input-group";
import { Kbd } from "@vuetella/ui/components/kbd";
import { useMagicKeys } from "@vueuse/core";
import { SearchIcon } from "lucide-vue-next";
import { ref, watchEffect } from "vue";

const { cmd, k } = useMagicKeys();

const open = ref(false);

watchEffect(() => {
  if (cmd.value && k.value) {
    open.value = true;
  }
});
</script>
    
<template>
    <Dialog v-model:open="open">
        <DialogTrigger class="cursor-pointer">
            <InputGroup>
                <InputGroupAddon align="inline-start" class="cursor-pointer">
                    <SearchIcon />
                    <div class="text-xs mr-2">Search for components</div>
                </InputGroupAddon>
                <InputGroupAddon align="inline-end" class="cursor-pointer">
                    <Kbd>⌘+k</Kbd>
                </InputGroupAddon>
            </InputGroup>
        </DialogTrigger>
        <DialogContent class="p-4">
            <InputGroup>
                <InputGroupAddon align="inline-start">
                    <SearchIcon />
                </InputGroupAddon>
                <InputGroupInput placeholder="Search for a component" />
            </InputGroup>
        </DialogContent>
    </Dialog>
</template>