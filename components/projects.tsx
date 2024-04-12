import Image from "next/image";
import Heading from "./heading";
import Section from "./section";
import { useTranslations } from "next-intl";
import { Badge } from "./ui/badge";

export default function Projects() {
  const t = useTranslations("Projects");
  const projects = [
    {
      name: "To Do List",
      description: t("to-do-list"),
      src: "https://api.screenshotone.com/take?access_key=3w23Ub_BXwzbZA&url=https%3A%2F%2Fto-do-list-blue-seven-44.vercel.app%2F&full_page=false&viewport_width=1920&viewport_height=1080&device_scale_factor=1&format=jpg&image_quality=80&block_ads=true&block_cookie_banners=true&block_banners_by_heuristics=false&block_trackers=true&delay=0&timeout=60",
      github: "https://github.com/iamvusalalakbarov/to-do-list",
      link: "https://to-do-list-blue-seven-44.vercel.app/",
      techs: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "PostgreSQL",
      ],
    },
    {
      name: "Digitello",
      description: t("digitello"),
      src: "https://api.screenshotone.com/take?access_key=3w23Ub_BXwzbZA&url=https%3A%2F%2Fdigitello.vercel.app%2F&full_page=false&viewport_width=1920&viewport_height=1080&device_scale_factor=1&format=jpg&image_quality=80&block_ads=true&block_cookie_banners=true&block_banners_by_heuristics=false&block_trackers=true&delay=0&timeout=60",
      github: "https://github.com/iamvusalalakbarov/digitello",
      link: "https://digitello.vercel.app/",
      techs: ["React.js", "Next.js", "Tailwind CSS", "React Slick"],
    },
  ];

  return (
    <Section className="">
      <Heading>{t("projects")}</Heading>
      <div className="flex flex-col gap-y-16 container">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-x-12">
            <div className="relative">
              <a href={project.link} target="_blank">
                <Image
                  src={project.src}
                  alt={project.name}
                  width={488}
                  height={275}
                  unoptimized
                  priority
                  className="rounded-lg border-2 border-blue-700 dark:border-opacity-50 hover:opacity-75 transition-opacity"
                />
              </a>
              <div className="flex gap-x-2 absolute top-[104%] left-1">
                <a href={project.github} target="_blank">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 496 512"
                    className="size-6 hover:text-primary transition-all"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </a>
                <a href={project.link} target="_blank">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="size-6 hover:text-primary hover:rotate-45 transition-all"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col py-1 mt-12 md:mt-0">
              <h2 className="font-bold text-xl text-primary mb-2">
                {project.name}
              </h2>
              <p className="max-w-md text-sm">{project.description}</p>
              <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-auto">
                {project.techs.map((tech, badge_index) => (
                  <Badge
                    variant="secondary"
                    className="font-normal"
                    key={badge_index}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
