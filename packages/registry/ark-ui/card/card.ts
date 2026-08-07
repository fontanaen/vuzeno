import CardRoot from "./Card.vue";
import CardContent from "./CardContent.vue";
import CardDescription from "./CardDescription.vue";
import CardFooter from "./CardFooter.vue";
import CardHeader from "./CardHeader.vue";
import CardTitle from "./CardTitle.vue";

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
} as const;
