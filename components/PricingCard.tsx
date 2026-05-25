interface PricingCardProps {
  tier: string;
  price: string;
  description: string;
  features: string[];
}

export function PricingCard({ tier, price, description, features }: PricingCardProps) {
  return (
    <div className="rounded-[2rem] border border-coastal-200 bg-white p-8 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">{tier}</p>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-4xl font-semibold text-coastal-900">{price}</span>
        <span className="text-sm text-slate-500">/month*</span>
      </div>
      <p className="mt-4 text-coastal-600">{description}</p>
      <ul className="mt-6 space-y-3 text-coastal-600">
        {features.map((feature) => (
          <li key={feature} className="leading-7">• {feature}</li>
        ))}
      </ul>
      <button className="mt-8 w-full rounded-3xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a66d48]">
        Schedule a Call
      </button>
    </div>
  );
}
