<script setup lang="ts">
import { ButtonGroupText } from '@vuetella/ui/components/button-group';
import { Label } from '@vuetella/ui/components/label';
</script>

<template>
    <ButtonGroupText class="h-auto px-3 bg-background" as-child>
        <Label>
            <slot />
        </Label>
    </ButtonGroupText>
</template>