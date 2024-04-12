import Section from "./section";
import Heading from "./heading";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <Section id="contact" className="">
      <Heading>{t("contact")}</Heading>
      <div className="flex flex-col md:flex-row justify-center items-start gap-x-12 gap-y-8">
        <a
          href="mailto:vusal11010@gmail.com"
          className="flex gap-x-3 hover:opacity-50 transition-opacity"
        >
          <div className="flex justify-center items-center p-3 rounded-full bg-primary">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="size-4 text-white"
            >
              <path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"></path>
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-medium text-sm text-primary">Email</span>
            <span className="block text-xs">iamvusalalakbarov@gmail.com</span>
          </div>
        </a>

        <a
          href="tel:+994993651951"
          className="flex gap-x-3 hover:opacity-50 transition-opacity"
        >
          <div className="flex justify-center items-center p-3 rounded-full bg-primary">
            <svg
              fill="currentColor"
              viewBox="0 0 512 512"
              className="size-4 text-white"
            >
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-medium text-sm text-primary">
              {t("phone")}
            </span>
            <span className="block text-xs">+994 99 365 19 51</span>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/iamvusalalakbarov"
          target="_blank"
          className="flex gap-x-3 hover:opacity-50 transition-opacity"
        >
          <div className="flex justify-center items-center p-3 rounded-full bg-primary">
            <svg
              fill="currentColor"
              viewBox="0 0 448 512"
              className="size-4 text-white"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-medium text-sm text-primary">LinkedIn</span>
            <span className="block text-xs">
              linkedin.com/in/iamvusalalakbarov
            </span>
          </div>
        </a>
      </div>
    </Section>
  );
}
