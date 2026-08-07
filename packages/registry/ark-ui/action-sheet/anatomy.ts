import { createAnatomy } from "@zag-js/anatomy";

export const anatomy = createAnatomy("action-sheet").parts("trigger", "backdrop", "positioner", "content", "group", "item", "cancel");

export const parts = anatomy.build();
