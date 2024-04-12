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
      src: "/project-screenshots/to-do-list.png",
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
      src: "/project-screenshots/digitello.png",
      github: "https://github.com/iamvusalalakbarov/digitello",
      link: "https://digitello.vercel.app/",
      techs: ["React.js", "Next.js", "Tailwind CSS", "React Slick"],
    },
  ];

  return (
    <Section id="projects" className="">
      <Heading>{t("projects")}</Heading>
      <div className="flex flex-col gap-y-16">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </Section>
  );
}
