<script setup lang="ts">
import { ChevronDownIcon, DownloadIcon, FileCode2Icon, FilePlusIcon, FileTextIcon, FolderOpenIcon, ImageIcon, MailIcon, MessageSquareIcon, PrinterIcon, RadioIcon, Share2Icon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Menu } from "@vuzeno/registry/ui/menu";
</script>

<template>
  <Menu.Root>
    <Menu.Trigger as-child>
      <Button variant="outline" size="sm">
        File
        <Menu.Indicator>
          <ChevronDownIcon />
        </Menu.Indicator>
      </Button>
    </Menu.Trigger>
    <Menu.Content>
      <Menu.Item value="new">
        <FilePlusIcon class="size-4" />
        New File
      </Menu.Item>
      <Menu.Item value="open">
        <FolderOpenIcon class="size-4" />
        Open...
      </Menu.Item>
      <Menu.Separator />
      <Menu.Root>
        <Menu.TriggerItem>
          <Share2Icon class="size-4" />
          Share
        </Menu.TriggerItem>
        <Menu.Content>
          <Menu.Item value="email">
            <MailIcon class="size-4" />
            Email
          </Menu.Item>
          <Menu.Item value="message">
            <MessageSquareIcon class="size-4" />
            Message
          </Menu.Item>
          <Menu.Item value="airdrop">
            <RadioIcon class="size-4" />
            AirDrop
          </Menu.Item>
        </Menu.Content>
      </Menu.Root>
      <Menu.Root>
        <Menu.TriggerItem>
          <DownloadIcon class="size-4" />
          Export
        </Menu.TriggerItem>
        <Menu.Content>
          <Menu.Item value="pdf">
            <FileTextIcon class="size-4" />
            PDF
          </Menu.Item>
          <Menu.Item value="png">
            <ImageIcon class="size-4" />
            PNG
          </Menu.Item>
          <Menu.Item value="svg">
            <FileCode2Icon class="size-4" />
            SVG
          </Menu.Item>
        </Menu.Content>
      </Menu.Root>
      <Menu.Separator />
      <Menu.Item value="print">
        <PrinterIcon class="size-4" />
        Print...
      </Menu.Item>
    </Menu.Content>
  </Menu.Root>
</template>
