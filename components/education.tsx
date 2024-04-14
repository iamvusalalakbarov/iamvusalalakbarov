import Section from "./section";
import Heading from "./heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";

export default function Education() {
  const t = useTranslations("Education");

  const studies = [
    {
      value: t("asoiu.value"),
      name: t("asoiu.name"),
      period: "09/2016 - 06/2018",
      department: t("asoiu.department"),
      location: t("asoiu.location"),
      description: t("asoiu.description"),
    },
    {
      value: "Akdeniz",
      name: t("au.name"),
      period: "09/2018 - 01/2024",
      department: t("au.department"),
      location: t("au.location"),
      description: t("au.description"),
    },
    {
      value: "Self-study",
      name: t("ss.name"),
      period: t("ss.period"),
      description: t("ss.description"),
    },
  ];

  return (
    <Section id="education" className="">
      <Heading>{t("education")}</Heading>
      <Tabs
        defaultValue={studies[0].value}
        className="flex flex-col items-center md:items-start gap-y-1 max-w-[640px]"
      >
        <TabsList>
          {studies.map((study, index) => (
            <TabsTrigger value={study.value} key={index}>
              {study.value}
            </TabsTrigger>
          ))}
        </TabsList>
        {studies.map((study, index) => (
          <TabsContent value={study.value} key={index} className="h-60">
            <h3 className="font-medium md:text-lg text-primary">
              {study.name}
            </h3>
            {study.department && (
              <div className="text-sm">{study.department}</div>
            )}
            <div className="flex justify-between items-center text-xs opacity-80 dark:opacity-50 mb-2">
              <span>{study.period}</span>
              {study.location && <span>{study.location}</span>}
            </div>
            <p className="text-sm">{study.description}</p>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}
