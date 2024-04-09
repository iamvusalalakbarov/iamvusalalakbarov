import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["az", "tr", "en"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(az|tr|en)/:path*"],
};
