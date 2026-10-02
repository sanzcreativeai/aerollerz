'use client';

export default function ReelsShowcase() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Watch Our Reels
          </h2>
          <p className="text-xl text-gray-400">
            Short clips from our best moments and events
          </p>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="aspect-[9/16] bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-full h-full flex items-center justify-center text-white text-xl font-bold">
                Reel {i + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/aerollerz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:scale-105 transition-all font-semibold"
          >
            Watch on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
