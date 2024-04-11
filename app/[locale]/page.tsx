import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col justify-center items-center h-[calc(100dvh-64px)]">
        <div>
          <div className="mb-16">
            <span className="text-lg">Welcome to my portfolio, 👋</span>
            <p className="font-bold text-6xl">
              I am <span className="text-blue-700">Vusal Alakbarov</span>.
            </p>
            <p className="max-w-xl">
              A passionate front-end developer focused to write clean and
              efficient code, especially in React, based in Baku, Azerbaijan. 📍
            </p>
          </div>

          <TechStack />
        </div>
      </section>
    </main>
  );
}
