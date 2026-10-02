'use client';

import { useState, useEffect, useRef } from 'react';
import { reels, business } from '@/lib/site-data';
import gsap from 'gsap';

export default function ReelsShowcase() {
  const [selectedReel, setSelectedReel] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const thumbnails = containerRef.current?.querySelectorAll('.reel-thumbnail');
    if (!thumbnails) return;

    thumbnails.forEach((thumb, index) => {
      gsap.fromTo(
        thumb,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.1,
        }
      );
    });
  }, []);

  return (
    <section className="py-20 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Our Best Reels
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Watch our professional event production videos
          </p>
        </div>

        <div ref={containerRef} className="space-y-8">
          {/* Main Video Player */}
          <div className="relative w-full bg-black rounded-2xl overflow-hidden shadow-xl">
            <video
              key={`video-${selectedReel}`}
              className="w-full h-auto aspect-video object-cover"
              controls
              autoPlay
              playsInline
            >
              <source src={reels[selectedReel].url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6">
              <h3 className="text-white text-2xl font-bold">{reels[selectedReel].title}</h3>
            </div>
          </div>

          {/* Reel Thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reels.map((reel, index) => (
              <button
                key={reel.id}
                onClick={() => setSelectedReel(index)}
                className={`reel-thumbnail relative group rounded-xl overflow-hidden transition-all duration-300 ${
                  selectedReel === index
                    ? 'ring-4 ring-accent-purple'
                    : 'hover:shadow-lg'
                }`}
              >
                {/* Thumbnail Image */}
                <div className="relative aspect-video bg-black">
                  <video
                    className="w-full h-full object-cover"
                    playsInline
                  >
                    <source src={reel.url} type="video/mp4" />
                  </video>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white transition-colors flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-black ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {selectedReel === index && (
                    <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-accent-purple animate-pulse"></div>
                  )}
                </div>

                {/* Title */}
                <div className="p-3 bg-white">
                  <p className="text-sm font-medium text-text-primary line-clamp-2">
                    {reel.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="text-center pt-8 border-t border-line-soft">
            <p className="text-text-secondary mb-4">
              Follow us on Instagram for more event highlights
            </p>
            <a
              href={`https://instagram.com/${business.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
              </svg>
              @aerollerz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
