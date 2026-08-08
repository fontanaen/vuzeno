export default defineEventHandler((event) => {
  setApiCatalogHeaders(event);
  // Same representation as GET; Nitro omits the body for HEAD.
  return getApiCatalogDocument();
});
