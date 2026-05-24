export default function Section({
  id,
  className = '',
  children
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-5xl px-6 py-16 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}
