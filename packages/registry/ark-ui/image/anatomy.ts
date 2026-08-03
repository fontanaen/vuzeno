import { createAnatomy } from "@zag-js/anatomy";

export const anatomy = createAnatomy("image").parts("root", "source", "loading", "error", "fallback");

export const parts = anatomy.build();
