import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./lib/navigation";

export default createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
});

export const config = {
  matcher: ["/", "/(az|tr|en)/:path*"],
};
