import CarouselAutoplayIndicator from "./CarouselAutoplayIndicator.vue";
import CarouselAutoplayTrigger from "./CarouselAutoplayTrigger.vue";
import CarouselContext from "./CarouselContext.vue";
import CarouselControl from "./CarouselControl.vue";
import CarouselIndicator from "./CarouselIndicator.vue";
import CarouselIndicatorGroup from "./CarouselIndicatorGroup.vue";
import CarouselItem from "./CarouselItem.vue";
import CarouselItemGroup from "./CarouselItemGroup.vue";
import CarouselNextTrigger from "./CarouselNextTrigger.vue";
import CarouselPrevTrigger from "./CarouselPrevTrigger.vue";
import CarouselProgressText from "./CarouselProgressText.vue";
import CarouselRoot from "./CarouselRoot.vue";
import CarouselRootProvider from "./CarouselRootProvider.vue";

export const Carousel = {
  AutoplayIndicator: CarouselAutoplayIndicator,
  ProgressText: CarouselProgressText,
  AutoplayTrigger: CarouselAutoplayTrigger,
  Context: CarouselContext,
  Control: CarouselControl,
  IndicatorGroup: CarouselIndicatorGroup,
  Indicator: CarouselIndicator,
  ItemGroup: CarouselItemGroup,
  Item: CarouselItem,
  NextTrigger: CarouselNextTrigger,
  PrevTrigger: CarouselPrevTrigger,
  RootProvider: CarouselRootProvider,
  Root: CarouselRoot,
} as const;
