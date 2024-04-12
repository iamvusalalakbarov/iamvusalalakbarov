import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Nav() {
  const t = useTranslations("Nav");

  const links = [
    // TODO: Create sections: Education, Projects (ready), Experience, Contact
    // Skills? Interests?
    {
      title: t("education"),
      href: "#education",
    },
    {
      title: t("projects"),
      href: "#projects",
    },
    {
      title: t("experience"),
      href: "#experience",
    },
    {
      title: t("contact"),
      href: "#contact",
    },
  ];

  return (
    <nav className="hidden lg:flex justify-center items-center gap-x-6 absolute left-1/2 -translate-x-1/2">
      {links.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className="font-medium hover:text-primary transition-colors"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
