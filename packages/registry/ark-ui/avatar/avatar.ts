import AvatarContext from "./AvatarContext.vue";
import AvatarFallback from "./AvatarFallback.vue";
import AvatarGroup from "./AvatarGroup.vue";
import AvatarImage from "./AvatarImage.vue";
import AvatarRoot from "./AvatarRoot.vue";
import AvatarRootProvider from "./AvatarRootProvider.vue";

export const Avatar = {
  Context: AvatarContext,
  Fallback: AvatarFallback,
  Image: AvatarImage,
  Root: AvatarRoot,
  RootProvider: AvatarRootProvider,
  Group: AvatarGroup,
} as const;
