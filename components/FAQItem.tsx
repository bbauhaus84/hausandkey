import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen((prev) => !prev)}
      className="group w-full rounded-[2rem] border border-coastal-200 bg-white p-6 text-left shadow-soft transition hover:border-accent/40"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-base font-semibold text-coastal-900">{question}</p>
          <p className="mt-2 text-sm leading-7 text-coastal-600">{answer}</p>
        </div>
        <ChevronDown className={`h-5 w-5 transition ${open ? 'rotate-180 text-accent' : 'text-slate-400'}`} />
      </div>
    </button>
  );
}
