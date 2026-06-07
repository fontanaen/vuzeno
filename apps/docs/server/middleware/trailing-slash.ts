export default defineEventHandler((event) => {
  const url = getRequestURL(event);
  const { pathname } = url;

  if (pathname !== "/" && pathname.endsWith("/")) {
    url.pathname = pathname.slice(0, -1);
    return sendRedirect(event, url.toString(), 301);
  }
});
