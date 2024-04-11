export default function Section({
  className,
  children,
}: Readonly<{
  className: string;
  children: React.ReactNode;
}>) {
  return (
    <section className={`p-2 md:p-6 lg:p-12 ${className}`}>{children}</section>
  );
}
