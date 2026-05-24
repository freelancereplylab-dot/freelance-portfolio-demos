type Props = {
  name: string;
  price: string;
  desc: string;
};

export default function MenuCard({ name, price, desc }: Props) {
  return (
    <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <span className="font-mono text-brand-600">{price}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-brand-900/70">{desc}</p>
    </div>
  );
}
