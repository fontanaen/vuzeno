<script setup lang="ts">
import { Image, ImageFallback, ImageSource } from "@vuzeno/registry/ui/image";
</script>
    
<template>
    <Image>
        <ImageSource src="https://picsum.photos/id/229/600/400" alt="..." />
        <ImageFallback>
            <!-- Loading/error content -->
        </ImageFallback>
    </Image>
</template>