import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
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
    </>
  );
}
