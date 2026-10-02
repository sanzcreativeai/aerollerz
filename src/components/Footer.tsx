'use client';

import Link from 'next/link';
import { business } from '@/lib/site-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-line-soft">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-4">{business.shortName}</h3>
            <p className="text-text-secondary text-sm">{business.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-text-secondary hover:text-accent-purple transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-text-secondary hover:text-accent-purple transition text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-text-secondary hover:text-accent-purple transition text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-text-secondary hover:text-accent-purple transition text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-text-secondary hover:text-accent-purple transition text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-text-secondary hover:text-accent-purple transition text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/copyright" className="text-text-secondary hover:text-accent-purple transition text-sm">
                  Copyright
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Contact</h4>
            <p className="text-text-secondary text-sm mb-2">
              <a href={`tel:${business.phone}`} className="hover:text-accent-purple transition">
                {business.phoneDisplay}
              </a>
            </p>
            <p className="text-text-secondary text-sm mb-2">
              <a href={`mailto:${business.email}`} className="hover:text-accent-purple transition">
                {business.email}
              </a>
            </p>
            <p className="text-text-secondary text-sm">{business.address.city}, India</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-line-soft my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary">
          <p>&copy; {currentYear} {business.name}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href={`https://instagram.com/${business.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-purple transition"
            >
              Instagram
            </a>
            <a
              href={`https://wa.me/${business.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-purple transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
