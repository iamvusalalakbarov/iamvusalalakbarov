import { useTranslations } from "next-intl";
import Heading from "./heading";
import Section from "./section";
import Project from "./project";

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
          <Project project={project} key={index} />
        ))}
      </div>
    </Section>
  );
}
