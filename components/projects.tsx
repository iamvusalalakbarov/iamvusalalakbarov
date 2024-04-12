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
      src: "https://shot.screenshotapi.net/screenshot?token=75FC2AA-VH44AXY-J9BB1C7-6824WCV&url=https%3A%2F%2Fto-do-list-blue-seven-44.vercel.app%2F&fresh=true&output=image&file_type=png&wait_for_event=load",
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
      src: "https://shot.screenshotapi.net/screenshot?token=75FC2AA-VH44AXY-J9BB1C7-6824WCV&url=https%3A%2F%2Fdigitello.vercel.app%2F&fresh=true&output=image&file_type=png&wait_for_event=load",
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
