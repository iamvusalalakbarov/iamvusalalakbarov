import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["az", "tr", "en"] as const;
export const localePrefix = "as-needed";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
