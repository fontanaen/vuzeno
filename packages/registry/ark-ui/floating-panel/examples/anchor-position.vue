<script setup lang="ts">
import type { FloatingPanelAnchorPositionDetails } from "@vuzeno/registry/ui/floating-panel";
import { FloatingPanel } from "@vuzeno/registry/ui/floating-panel";
import { ArrowDownLeft, GripVertical, Maximize2, Minus, XIcon } from "lucide-vue-next";

function getAnchorPosition({ triggerRect }: FloatingPanelAnchorPositionDetails) {
  if (!triggerRect) {
    return { x: 0, y: 0 };
  }
  return {
    x: triggerRect.x + triggerRect.width / 2,
    y: triggerRect.y + triggerRect.height / 2,
  };
}
</script>

<template>
  <FloatingPanel.Root :get-anchor-position="getAnchorPosition">
    <FloatingPanel.Trigger>Toggle Panel</FloatingPanel.Trigger>
    <Teleport to="body">
      <FloatingPanel.Positioner>
        <FloatingPanel.Content>
          <FloatingPanel.DragTrigger>
            <FloatingPanel.Header>
              <FloatingPanel.Title>
                <GripVertical />
                Floating Panel
              </FloatingPanel.Title>
              <FloatingPanel.Control>
                <FloatingPanel.StageTrigger stage="minimized">
                  <Minus />
                </FloatingPanel.StageTrigger>
                <FloatingPanel.StageTrigger stage="maximized">
                  <Maximize2 />
                </FloatingPanel.StageTrigger>
                <FloatingPanel.StageTrigger stage="default">
                  <ArrowDownLeft />
                </FloatingPanel.StageTrigger>
                <FloatingPanel.CloseTrigger>
                  <XIcon />
                </FloatingPanel.CloseTrigger>
              </FloatingPanel.Control>
            </FloatingPanel.Header>
          </FloatingPanel.DragTrigger>
          <FloatingPanel.Body>
            <p>Some content</p>
          </FloatingPanel.Body>

          <FloatingPanel.ResizeTrigger axis="n" />
          <FloatingPanel.ResizeTrigger axis="e" />
          <FloatingPanel.ResizeTrigger axis="w" />
          <FloatingPanel.ResizeTrigger axis="s" />
          <FloatingPanel.ResizeTrigger axis="ne" />
          <FloatingPanel.ResizeTrigger axis="se" />
          <FloatingPanel.ResizeTrigger axis="sw" />
          <FloatingPanel.ResizeTrigger axis="nw" />
        </FloatingPanel.Content>
      </FloatingPanel.Positioner>
    </Teleport>
  </FloatingPanel.Root>
</template>
