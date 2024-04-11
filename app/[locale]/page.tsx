import { useTranslations } from "next-intl";
import Header from "@/components/header";

export default function Index() {
  const t = useTranslations("Index");

  return (
    <main>
      <div>{t("title")}</div>
    </main>
  );
}
