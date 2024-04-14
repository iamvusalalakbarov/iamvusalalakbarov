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
    <section id={id} className={`flex flex-col items-center px-2 md:px-6 lg:px-12 scroll-mt-20 mb-32 ${className}`}>
      {children}
    </section>
  );
}
