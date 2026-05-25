import Image from 'next/image';

const properties = [
  { label: 'Cozy Coastal Retreat', src: '/property-1.svg' },
  { label: 'Modern City Loft', src: '/property-2.svg' },
  { label: 'Countryside Guesthouse', src: '/property-3.svg' },
];

export function PropertyShowcase() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {properties.map((item) => (
        <div key={item.label} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1">
          <div className="relative h-52 bg-slate-100">
            <Image src={item.src} alt={item.label} fill className="object-cover" />
          </div>
          <div className="p-5">
            <p className="font-semibold text-slate-900">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
