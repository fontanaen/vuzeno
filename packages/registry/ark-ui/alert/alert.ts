import AlertRoot from "./Alert.vue";
import AlertDescription from "./AlertDescription.vue";
import AlertIcon from "./AlertIcon.vue";
import AlertTitle from "./AlertTitle.vue";

export const Alert = {
  Root: AlertRoot,
  Icon: AlertIcon,
  Title: AlertTitle,
  Description: AlertDescription,
} as const;
