import { siteConfig } from "../../app/lib/site-config";

export const API_CATALOG_PATH = "/.well-known/api-catalog";

export const API_CATALOG_CONTENT_TYPE = 'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"';

export function getApiCatalogDocument() {
  return {
    linkset: [
      {
        anchor: `${siteConfig.url}/r`,
        "service-desc": [
          {
            href: `${siteConfig.url}/openapi/registry.json`,
            type: "application/openapi+json",
          },
        ],
        "service-doc": [
          {
            href: `${siteConfig.url}/docs/getting-started`,
            type: "text/html",
          },
        ],
        status: [
          {
            href: `${siteConfig.url}/api/health`,
            type: "application/json",
          },
        ],
      },
    ],
  };
}

export function setApiCatalogHeaders(event: Parameters<typeof setHeader>[0]) {
  setHeader(event, "Content-Type", API_CATALOG_CONTENT_TYPE);
  setHeader(event, "Cache-Control", "public, max-age=3600");
  setHeader(event, "Link", `<${API_CATALOG_PATH}>; rel="api-catalog"`);
}
