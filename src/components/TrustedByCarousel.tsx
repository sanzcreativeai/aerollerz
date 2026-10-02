'use client';

import Image from 'next/image';
import { brands } from '@/lib/site-data';

export default function TrustedByCarousel() {
  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-2">
            Trusted By
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-white">
            Chennai's Most Ambitious Brands
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden">
          {/* Fade gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10" />

          {/* Carousel */}
          <div className="flex animate-scroll gap-12 py-8">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ minWidth: '200px' }}
              >
                <div className="relative w-full h-24 flex items-center justify-center p-4 rounded-lg hover:bg-white/5 transition-colors duration-300">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="200px"
                    priority={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Names Below (Optional - visible on larger screens) */}
        <div className="hidden lg:grid grid-cols-4 gap-6 mt-12 text-center">
          {brands.map((brand) => (
            <div key={brand.id} className="text-gray-300 text-sm font-medium">
              {brand.name}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Animation Style */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
