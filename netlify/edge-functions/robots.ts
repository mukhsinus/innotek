/**
 * Demo on *.netlify.app must not be crawled.
 * Production host (innotek.uz) falls through to public/robots.txt (Allow + Sitemap).
 */
export default async (request: Request, context: { next: () => Promise<Response> }) => {
  const host = new URL(request.url).hostname.toLowerCase();
  if (host.endsWith(".netlify.app")) {
    return new Response("User-agent: *\nDisallow: /\n", {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
  return context.next();
};

export const config = {
  path: "/robots.txt",
};
