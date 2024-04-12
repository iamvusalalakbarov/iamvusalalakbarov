export default function Heading({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h1 className="font-bold text-3xl text-center text-primary mb-8">{children}</h1>
  );
}
