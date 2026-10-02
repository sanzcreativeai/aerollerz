'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-line-soft shadow-sm'
          : 'bg-white'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-accent-purple">Aerollerz</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-text-primary hover:text-accent-purple transition">
              Home
            </Link>
            <Link href="/services" className="text-text-primary hover:text-accent-purple transition">
              Services
            </Link>
            <Link href="/#portfolio" className="text-text-primary hover:text-accent-purple transition">
              Portfolio
            </Link>
            <Link href="/#faq" className="text-text-primary hover:text-accent-purple transition">
              FAQ
            </Link>
            <a
              href="https://instagram.com/aerollerz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary hover:text-accent-purple transition"
            >
              Instagram
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-8 h-8 flex flex-col gap-1.5 justify-center"
          >
            <div className={`w-full h-0.5 bg-text-primary transition ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-full h-0.5 bg-text-primary transition ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-full h-0.5 bg-text-primary transition ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-line-soft pt-4 flex flex-col gap-4">
            <Link href="/" className="text-text-primary hover:text-accent-purple transition">
              Home
            </Link>
            <Link href="/services" className="text-text-primary hover:text-accent-purple transition">
              Services
            </Link>
            <Link href="/#portfolio" className="text-text-primary hover:text-accent-purple transition">
              Portfolio
            </Link>
            <Link href="/#faq" className="text-text-primary hover:text-accent-purple transition">
              FAQ
            </Link>
            <a
              href="https://instagram.com/aerollerz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary hover:text-accent-purple transition"
            >
              Instagram
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
