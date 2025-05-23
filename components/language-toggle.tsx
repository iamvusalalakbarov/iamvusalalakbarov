"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "@/lib/navigation";
import { Az, Tr, Gb } from "react-flags-select";
import clsx from "clsx";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";

export default function LanguageToggle() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const currentLocale = useLocale();

  useEffect(() => {
    setMounted(true);
  }, []);

  function changeLanguage(value: "az" | "tr" | "en") {
    const locale: "az" | "tr" | "en" = value;
    router.push("/", { locale });
  }

  if (!mounted) {
    return <Skeleton className="size-9" />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Az
            className={clsx("size-[1.2rem]", {
              hidden: currentLocale !== "az",
            })}
          />
          <Tr
            className={clsx("size-[1.2rem]", {
              hidden: currentLocale !== "tr",
            })}
          />
          <Gb
            className={clsx("size-[1.2rem]", {
              hidden: currentLocale !== "en",
            })}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage("az")}>
          Azərbaycan Dili
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("tr")}>
          Türkçe
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
