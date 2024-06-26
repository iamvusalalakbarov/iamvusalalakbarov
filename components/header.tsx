import IAmVusalAlakbarov from "./iamvusalalakbarov";
import Nav from "./nav";
import CVButton from "@/components/cv-button";
import ModeToggle from "@/components/mode-toggle";
import LanguageToggle from "@/components/language-toggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-16 px-2 md:px-6 lg:px-12 border-b-2 bg-background sticky inset-0 z-10">
      <IAmVusalAlakbarov />
      <Nav />
      <div className="flex justify-center items-center gap-x-2">
        <CVButton />
        <ModeToggle />
        <LanguageToggle />
      </div>
    </header>
  );
}
