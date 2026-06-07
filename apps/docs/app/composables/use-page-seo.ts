import { siteConfig } from "~/lib/site-config";

export function usePageSeo() {
  const route = useRoute();
  const path = route.path.replace(/\/$/, "") || "/";
  const canonicalUrl = `${siteConfig.url}${path}`;

  useHead({
    link: [{ rel: "canonical", href: canonicalUrl }],
  });

  useSeoMeta({
    ogUrl: canonicalUrl,
  });

  return { canonicalUrl };
}
