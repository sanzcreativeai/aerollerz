'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-cyan-900 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Animated background blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulseGlow"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulseGlow animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulseGlow animation-delay-4000"></div>
      </div>

      {/* Logo container */}
      <div className="relative z-10 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            Aerollerz
          </h1>
          <p className="text-xl md:text-2xl text-cyan-200 font-light tracking-wide mb-12">
            Media & Entertainment
          </p>

          {/* Loading dots */}
          <div className="flex justify-center gap-3">
            <div
              className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 animate-dotBounce"
              style={{ animationDelay: '0s' }}
            ></div>
            <div
              className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 animate-dotBounce"
              style={{ animationDelay: '0.2s' }}
            ></div>
            <div
              className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 animate-dotBounce"
              style={{ animationDelay: '0.4s' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-5"></div>
    </div>
  );
}
