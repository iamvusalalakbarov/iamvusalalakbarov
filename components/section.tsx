export default function Section({
  className,
  children,
}: Readonly<{
  className: string;
  children: React.ReactNode;
}>) {
  return (
    <section className={`px-2 md:px-6 lg:px-12 mb-32 ${className}`}>{children}</section>
  );
}
