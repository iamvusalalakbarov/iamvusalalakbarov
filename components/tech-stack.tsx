"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Skeleton } from "./ui/skeleton";

export default function TechStack() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const reversedTheme = resolvedTheme === "light" ? "dark" : "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  const techStack = [
    {
      name: "HTML",
      src: `https://skillicons.dev/icons?i=html&theme=${reversedTheme}`,
    },
    {
      name: "CSS",
      src: `https://skillicons.dev/icons?i=css&theme=${reversedTheme}`,
    },
    {
      name: "JavaScript",
      src: `https://skillicons.dev/icons?i=js&theme=${reversedTheme}`,
    },
    {
      name: "TypeScript",
      src: `https://skillicons.dev/icons?i=ts&theme=${reversedTheme}`,
    },
    {
      name: "React.js",
      src: `https://skillicons.dev/icons?i=react&theme=${reversedTheme}`,
    },
    {
      name: "Next.js",
      src: `https://skillicons.dev/icons?i=next&theme=${reversedTheme}`,
    },
    {
      name: "SASS",
      src: `https://skillicons.dev/icons?i=sass&theme=${reversedTheme}`,
    },
    {
      name: "Tailwind CSS",
      src: `https://skillicons.dev/icons?i=tailwind&theme=${reversedTheme}`,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <span className="p-6 md:pl-0 border-b-2 md:border-b-0 md:border-r-2 font-semibold text-lg mb-6 md:mb-0 md:mr-6 leading-none">
        Tech Stack
      </span>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {techStack.map((tech, index) =>
          !mounted ? (
            <Skeleton className="size-[50px]" key={index} />
          ) : (
            mounted && (
              <TooltipProvider delayDuration={300} key={index}>
                <Tooltip>
                  <TooltipTrigger className="cursor-default">
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={50}
                      height={50}
                    />
                  </TooltipTrigger>
                  <TooltipContent className="dark:text-foreground">
                    {tech.name}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )
          )
        )}
      </div>
    </div>
  );
}
