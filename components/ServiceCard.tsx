import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-accent/30">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sand text-slate-700">{icon}</div>
      <h3 className="mb-3 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
      <div className="mt-6 flex items-center text-sm font-semibold text-accent transition group-hover:translate-x-1">
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </div>
  );
}
