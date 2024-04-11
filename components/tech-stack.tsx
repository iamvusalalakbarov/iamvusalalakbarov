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

export default function TechStack() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const techStack = [
    {
      name: "HTML",
      src: `https://skillicons.dev/icons?i=html&theme=${theme}`,
    },
    {
      name: "CSS",
      src: `https://skillicons.dev/icons?i=css&theme=${theme}`,
    },
    {
      name: "JavaScript",
      src: `https://skillicons.dev/icons?i=js&theme=${theme}`,
    },
    {
      name: "TypeScript",
      src: `https://skillicons.dev/icons?i=ts&theme=${theme}`,
    },
    {
      name: "React.js",
      src: `https://skillicons.dev/icons?i=react&theme=${theme}`,
    },
    {
      name: "Next.js",
      src: `https://skillicons.dev/icons?i=next&theme=${theme}`,
    },
    {
      name: "SASS",
      src: `https://skillicons.dev/icons?i=sass&theme=${theme}`,
    },
    {
      name: "Tailwind CSS",
      src: `https://skillicons.dev/icons?i=tailwind&theme=${theme}`,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <span className="p-6 md:pl-0 border-b-2 md:border-b-0 md:border-r-2 text-lg mb-4 md:mb-0 md:mr-6 leading-none">
        Tech Stack
      </span>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {techStack.map((tech, index) => (
          <TooltipProvider delayDuration={300} key={index}>
            <Tooltip>
              <TooltipTrigger className="cursor-default">
                <Image src={tech.src} alt={tech.name} width={50} height={50} />
              </TooltipTrigger>
              <TooltipContent className="dark:text-foreground">
                {tech.name}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
}
