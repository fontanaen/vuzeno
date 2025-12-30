<script setup lang="ts">
import { useMouseInElement, watchThrottled, whenever } from '@vueuse/core';
import ImageSource from './ImageSource.vue';
import { injectImageZoomProviderContext } from './ImageZoomProvider.vue';
import { computed, ref } from 'vue';

defineProps<{
    src: string
    alt?: string
}>()

const { scale, onZoomIn, onZoomOut, zoomOnClick, zoomDirection, zoomContainerRef, followCursor, zoomTranslate: translate, resetOnClickOutside, useZoomImageSourceRef } = injectImageZoomProviderContext()

useZoomImageSourceRef('imageSourceRef')

const { elementX: x, elementY: y, elementWidth: width, elementHeight: height, isOutside } = useMouseInElement(zoomContainerRef, { handleOutside: false })

const isZooming = ref(false)

const cursor = computed(() => {
  if (zoomOnClick.value) {
    return zoomDirection.value === 'in' ? 'cursor-zoom-in' : 'cursor-zoom-out'
  }

  return 'cursor-default'
})

function calculateTranslate({ width, height, scale, mouseX, mouseY }: { width: number, height: number, scale: number, mouseX: number, mouseY: number }) {
  if (scale === 1) {
     return { x: 0, y: 0, z: 0 }
  }

  // Calculate scaled dimensions
  const scaledWidth = width * scale
  const scaledHeight = height * scale
 
  // Calculate the translation needed to keep mouse point fixed
  // With transform-origin at 0,0, scaling moves points away from origin
  // To keep mouse point fixed, we translate by: -mouseX * (scale - 1)
  const left = -mouseX * (scale - 1)
  const top = -mouseY * (scale - 1)

  // Clamp translation to prevent overflow (image going outside container)
  // left must be between (width - scaledWidth) and 0
  // When scale > 1: width - scaledWidth is negative, so we clamp between that and 0
  const leftOffset = Math.max(Math.min(left, 0), width - scaledWidth)
  const topOffset = Math.max(Math.min(top, 0), height - scaledHeight)

  return { x: leftOffset, y: topOffset, z: 0 }
}

function handleClick() {
    if (!zoomOnClick.value) {
        return
    }

    if (zoomDirection.value === 'in') {
        onZoomIn()
    } else {
        onZoomOut()
    }
}

whenever(() => isOutside.value && resetOnClickOutside.value, () => {
    scale.value = 1
})

watchThrottled(scale, () => {
  isZooming.value = true
  setTimeout(() => {
    isZooming.value = false
  }, 100)
}, { throttle: 100 })

watchThrottled([x, y, scale], () => {
  if (followCursor.value === false) {
    translate.value = {
      x: width.value * (1 - scale.value) / 2,
      y: height.value * (1 - scale.value) / 2,
      z: 0,
    }
    return
  }

  translate.value = calculateTranslate({ width: width.value, height: height.value, scale: scale.value, mouseX: x.value, mouseY: y.value })
}, { throttle: () => followCursor.value ? 10 : 0 })
</script>

<template>
    <ImageSource
      ref="imageSourceRef"
      :data-zooming="isZooming" 
      :class="cursor" 
      :src="src" 
      :alt="alt"
      :style="{ transformOrigin: '0 0', transform: `translate3d(${translate.x}px, ${translate.y}px, ${translate.z}px) scale(${scale})` }"
      class="data-[zooming=true]:transition-transform data-[zooming=true]:duration-100 data-[zooming=true]:ease-in-out" 
      @click="handleClick" 
    />
</template>