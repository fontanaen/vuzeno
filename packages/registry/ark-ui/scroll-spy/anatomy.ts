import { createAnatomy } from "@zag-js/anatomy";

export const anatomy = createAnatomy("scroll-spy").parts("root", "viewport", "item", "target");

export const parts = anatomy.build();
