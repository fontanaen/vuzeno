import { queryCollection } from "@nuxt/content/server";

function appendVaryAccept(event: Parameters<typeof setHeader>[0]) {
  const existing = getResponseHeader(event, "vary");

  if (!existing) {
    setHeader(event, "Vary", "Accept");
    return;
  }

  const tokens = String(existing)
    .split(",")
    .map((token) => token.trim().toLowerCase());

  if (!tokens.includes("accept")) {
    setHeader(event, "Vary", `${existing}, Accept`);
  }
}

export default defineEventHandler(async (event) => {
  if (event.method !== "GET" && event.method !== "HEAD") {
    return;
  }

  const path = getRequestURL(event).pathname;

  if (!path.startsWith("/docs") || path.startsWith("/raw")) {
    return;
  }

  const accept = getRequestHeader(event, "accept");

  if (!acceptsMarkdown(accept)) {
    return;
  }

  const page = await queryCollection(event, "content").path(path).first();

  if (!page?.rawbody) {
    return;
  }

  setHeader(event, "Content-Type", "text/markdown; charset=utf-8");
  setHeader(event, "Content-Signal", CONTENT_SIGNAL);
  setHeader(event, "Link", `</raw${path}.md>; rel="alternate"; type="text/markdown"`);
  appendVaryAccept(event);

  return page.rawbody;
});
