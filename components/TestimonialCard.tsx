interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
      <p className="text-lg leading-8 text-slate-700">“{quote}”</p>
      <div className="mt-8 border-t border-slate-100 pt-5">
        <p className="font-semibold text-slate-900">{name}</p>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </div>
  );
}
