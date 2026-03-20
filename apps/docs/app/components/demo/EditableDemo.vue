<script setup lang="ts">
import { Editable, EditableArea, EditableCancelTrigger, EditableInput, EditablePreview, EditableSubmitTrigger } from "@vuzeno/registry/ui/editable";
import { Avatar, AvatarFallback } from "@vuzeno/ui/components/avatar";
import { Badge } from "@vuzeno/ui/components/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@vuzeno/ui/components/breadcrumb";
import { Item, ItemContent, ItemDescription, ItemFooter, ItemTitle } from "@vuzeno/ui/components/item";
import { Popover, PopoverContent } from "@vuzeno/ui/components/popover";
import { BoxIcon, CircleDashedIcon, PencilIcon, SignalHighIcon } from "lucide-vue-next";
import { PopoverAnchor } from "reka-ui";
import { ref } from "vue";

const projectName = ref("Project 1");
const issueTitle = ref("Feature Request");
const storyPoints = ref(0.5);
</script>

<template>
  <div class="flex flex-col gap-4">
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            Home
          </BreadcrumbLink>
          <BreadcrumbSeparator />
          <BreadcrumbLink>
            Projects
          </BreadcrumbLink>
          <BreadcrumbSeparator />
          <Editable v-model="projectName" activation-mode="dblclick" submit-mode="none" class="flex items-center gap-1 h-8" v-slot="{ isEditing }">
            <EditableArea>
              <EditablePreview class="w-full h-auto peer">
                <BreadcrumbLink>
                  Project 1
                </BreadcrumbLink>
              </EditablePreview>
              <EditableInput class="w-full h-auto" />
              <PencilIcon v-if="!isEditing" class="peer-hover:opacity-100 opacity-0 transition-opacity duration-200 ease-in-out absolute top-1/2 -right-2 -translate-y-1/2 translate-x-full size-3.5" />
            </EditableArea>
          </Editable>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

    <Item variant="muted" class="w-80">
      <ItemContent>
        <div class="flex items-center gap-2 justify-between">
          <ItemDescription class="text-xs">
            ISS-11
          </ItemDescription>
          <Avatar size="sm" class="bg-primary text-black size-5">
            <AvatarFallback class="text-[10px]">
              VZ
            </AvatarFallback>
          </Avatar>
        </div>
        <ItemTitle class="w-full">
          <CircleDashedIcon class="size-3.5 flex-none" />
          <Editable class="w-full" v-model="issueTitle" activation-mode="dblclick" placeholder="Enter issue title" v-slot="{ isEditing }">
            <EditableArea class="flex items-center gap-1">
              <EditablePreview class="peer hover:underline hover:underline-offset-4 text-ellipsis line-clamp-1 w-fit" />
              <EditableInput class="w-full" />

              <PencilIcon
                v-if="!isEditing"
                class="peer-hover:opacity-100 opacity-0 transition-opacity duration-200 ease-in-out size-3.5"
              />
            </EditableArea>
          </Editable>
        </ItemTitle>
      </ItemContent>

      <ItemFooter class="flex items-center gap-2 justify-start">
        <SignalHighIcon class="size-5 text-foreground" />

        <Badge variant="outline">
          <BoxIcon class="size-3" />
          Vuzeno
        </Badge>

        <Badge variant="outline">
          <div class="size-2 rounded-full bg-indigo-500" />
          Docs
        </Badge>

        <Editable v-model="storyPoints" activation-mode="dblclick" submit-mode="none" class="relative" v-slot="{ isEditing }">
          <Popover :open="isEditing">
            <EditableArea class="w-10 h-6 border-border border rounded-md text-xs text-center flex items-center justify-center">
              <PopoverAnchor />
              <EditablePreview class="text-xs! w-full h-auto" />
              <EditableInput type="number" class="text-center w-full h-auto appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
            </EditableArea>

            <PopoverContent class="p-1 h-fit w-fit" align="start" :side-offset="20">
              <EditableCancelTrigger />
              <EditableSubmitTrigger />
            </PopoverContent>
          </Popover>
        </Editable>
      </ItemFooter>
    </Item>
  </div>
</template>
