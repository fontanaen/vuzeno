export default defineEventHandler((event) => {
  setApiCatalogHeaders(event);
  return getApiCatalogDocument();
});
