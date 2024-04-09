import { useTranslations } from "next-intl";
import { ModeToggle } from "@/components/mode-toggle";

export default function Index() {
  const t = useTranslations("Index");

  return (
    <>
      <header>
        <h1>{"<iamvusalalakbarov/>"}</h1>
        <nav>{/* several links */}</nav>
        <div>
          <ModeToggle />
          {/* i18n */}
        </div>
      </header>
      <div>{t("title")}</div>
    </>
  );
}
