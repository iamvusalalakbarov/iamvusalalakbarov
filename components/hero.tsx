import Section from "./section";
import TechStack from "./tech-stack";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <Section className="flex flex-col justify-center items-center h-[calc(100svh-64px)]">
      <div className="flex flex-col justify-center items-center text-center md:text-left md:block mb-16">
        <span className="text-lg">{t("welcome")} 👋</span>
        <p className="font-bold text-6xl">
          {t("i-am")} <span className="text-blue-700">{t("name")}</span>.
        </p>
        <p className="max-w-2xl">{t("paragraph")} 📍</p>
      </div>

      <TechStack />
    </Section>
  );
}
