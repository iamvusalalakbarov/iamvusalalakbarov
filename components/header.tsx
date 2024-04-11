import IAmVusalAlakbarov from "./iamvusalalakbarov";
import Nav from "./nav";
import ModeToggle from "@/components/mode-toggle";
import LanguageToggle from "@/components/language-toggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-16 px-2 md:px-6 lg:px-12 border-b-2 relative">
      <IAmVusalAlakbarov />
      <Nav />
      <div className="flex justify-center items-center gap-x-2">
        <ModeToggle />
        <LanguageToggle />
      </div>
    </header>
  );
}
