export default function Section({
  id,
  className,
  children,
}: Readonly<{
  id: string;
  className: string;
  children: React.ReactNode;
}>) {
  return (
    <section id={id} className={`px-2 md:px-6 lg:px-12 scroll-mt-16 mb-32 ${className}`}>
      {children}
    </section>
  );
}
