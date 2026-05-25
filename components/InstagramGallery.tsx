import Image from 'next/image';

const gallery = [
  { alt: 'Sunlit living room', src: '/gallery-1.svg' },
  { alt: 'Luxury bedroom', src: '/gallery-2.svg' },
  { alt: 'Curated guest welcome', src: '/gallery-3.svg' },
  { alt: 'City view balcony', src: '/gallery-4.svg' },
];

export function InstagramGallery() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {gallery.map((image) => (
        <div key={image.alt} className="relative overflow-hidden rounded-3xl bg-slate-100 shadow-soft">
          <Image src={image.src} alt={image.alt} width={500} height={500} className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  );
}
