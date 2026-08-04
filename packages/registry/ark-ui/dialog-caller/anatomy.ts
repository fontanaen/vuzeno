import { createAnatomy } from "@zag-js/anatomy";

export const anatomy = createAnatomy("dialog-caller").parts("host", "entry", "shell");

export const parts = anatomy.build();
