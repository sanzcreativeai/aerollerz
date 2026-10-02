'use client';

import Image from 'next/image';
import { instagramEvents, business } from '@/lib/site-data';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function InstagramEventsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('.gallery-item');
    if (!items) return;

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            end: 'top 10%',
            scrub: false,
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Featured Events
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore our latest event productions and successful client experiences
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {instagramEvents.map((event) => (
            <div
              key={event.id}
              className="gallery-item group relative rounded-xl overflow-hidden bg-bg-secondary shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-bg-secondary">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-text-primary group-hover:text-accent-purple transition">
                    {event.title}
                  </h3>
                </div>
                <div className="inline-block">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple">
                    {event.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-50 to-cyan-50 rounded-2xl p-12 text-center border border-line-soft">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Ready to Create Your Next Unforgettable Event?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Let Aerollerz bring your vision to life with world-class event production
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${business.whatsapp.replace(/\D/g, '')}?text=Hi%20Aerollerz%2C%20I%20would%20like%20to%20discuss%20my%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.271c-1.477.784-2.748 1.925-3.642 3.318-1.537 2.329-1.663 5.038-.275 7.322 1.185 1.993 3.132 3.495 5.393 4.203 1.247.41 2.573.577 3.916.577 1.343 0 2.669-.167 3.916-.577 2.261-.708 4.208-2.21 5.393-4.203 1.388-2.284 1.262-4.993-.275-7.322-.894-1.393-2.165-2.534-3.642-3.318a9.87 9.87 0 00-4.869-1.271c-.493 0-.983.046-1.466.137z" />
              </svg>
              WhatsApp
            </a>
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent-purple text-white hover:opacity-90 transition font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
