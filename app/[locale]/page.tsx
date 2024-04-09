import { useTranslations } from "next-intl";
import ModeToggle from "@/components/mode-toggle";
import LanguageToggle from "@/components/language-toggle";

export default function Index() {
  const t = useTranslations("Index");

  return (
    <>
      <header>
        <h1>{"<iamvusalalakbarov/>"}</h1>
        <nav>{/* several links */}</nav>
        <div className="flex">
          <ModeToggle />
          <LanguageToggle />
        </div>
      </header>
      <div>{t("title")}</div>
    </>
  );
}
