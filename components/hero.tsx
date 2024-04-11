import Section from "./section";
import TechStack from "./tech-stack";

export default function Hero() {
  return (
    <Section className="flex flex-col justify-center items-center h-[calc(100svh-64px)]">
      <div>
        <div className="flex flex-col justify-center items-center text-center md:text-left md:block mb-16">
          <span className="text-lg">Welcome to my portfolio, 👋</span>
          <p className="font-bold text-6xl">
            I am <span className="text-blue-700">Vusal Alakbarov</span>.
          </p>
          <p className="max-w-2xl">
            A passionate front-end developer focused to write clean and
            efficient code, especially in React, based in Baku, Azerbaijan. 📍
          </p>
        </div>

        <TechStack />
      </div>
    </Section>
  );
}
