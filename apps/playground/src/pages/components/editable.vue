<script setup lang="ts">
import { Editable, EditableArea, EditableEditTrigger, EditableInput, EditablePreview, EditableSubmitTrigger } from "@vuzeno/registry/ui/editable";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@vuzeno/ui/components/breadcrumb";
import { ref } from "vue";

definePage({
  name: "components.editable",
});

const value = ref("Project 1");
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
          <Editable v-model="value" activation-mode="dblclick" submit-mode="none" class="flex items-center gap-2 group w-fit">
            <EditableArea>
              <EditablePreview class="group-hover:underline">
                <BreadcrumbLink>
                  Project 1
                </BreadcrumbLink>
              </EditablePreview>
              <EditableInput />
            </EditableArea>

            <EditableSubmitTrigger />
            <EditableEditTrigger class="group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 opacity-0 transition-all duration-200" />
          </Editable>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    
  </div>
</template>