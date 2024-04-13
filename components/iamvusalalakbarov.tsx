import Link from "next/link";

export default function IAmVusalAlakbarov() {
  return (
    <Link href="/">
      <code className="font-bold text-lg">
        <span>{"<"}</span>
        <span>I</span>
        <span>Am</span>
        <span>Vusal</span>
        <span>Alakbarov</span>
        <span>{"/>"}</span>
      </code>
    </Link>
  );
}
