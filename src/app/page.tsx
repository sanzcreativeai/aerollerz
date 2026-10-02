'use client';

import Link from 'next/link';
import Image from 'next/image';
import { business, services, portfolio, faqs } from '@/lib/site-data';
import InstagramEventsShowcase from '@/components/InstagramEventsShowcase';
import ReelsShowcase from '@/components/ReelsShowcase';
import TrustedByCarousel from '@/components/TrustedByCarousel';
import { useState } from 'react';

export default function Home() {
  const [openFAQId, setOpenFAQId] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulseGlow"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulseGlow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulseGlow" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center py-20">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter leading-tight">
              Creating Unforgettable Events Since 2002
            </h1>
            <p className="text-xl md:text-2xl text-cyan-200 font-light mb-8 max-w-3xl mx-auto">
              {business.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${business.whatsapp.replace(/\D/g, '')}?text=Hi%20Aerollerz%2C%20I%20would%20like%20to%20discuss%20my%20event.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-green-400 to-green-500 text-white hover:shadow-lg hover:scale-105 transition-all font-semibold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.271c-1.477.784-2.748 1.925-3.642 3.318-1.537 2.329-1.663 5.038-.275 7.322 1.185 1.993 3.132 3.495 5.393 4.203 1.247.41 2.573.577 3.916.577 1.343 0 2.669-.167 3.916-.577 2.261-.708 4.208-2.21 5.393-4.203 1.388-2.284 1.262-4.993-.275-7.322-.894-1.393-2.165-2.534-3.642-3.318a9.87 9.87 0 00-4.869-1.271c-.493 0-.983.046-1.466.137z" />
                </svg>
                Start Planning
              </a>
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all font-semibold border border-white/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Events Showcase - FEATURED AT TOP */}
      <InstagramEventsShowcase />

      {/* Trusted By Carousel Section */}
      <TrustedByCarousel />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={business.founderPhoto}
                alt={business.founder}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-text-primary mb-4">About Us</h2>
              <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                {business.founderBio}
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-purple/10">
                      <svg className="h-6 w-6 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Innovative</h3>
                    <p className="text-text-secondary text-sm">Creative solutions for every event</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-purple/10">
                      <svg className="h-6 w-6 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Professional</h3>
                    <p className="text-text-secondary text-sm">20+ years of excellence</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-purple/10">
                      <svg className="h-6 w-6 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Client-Focused</h3>
                    <p className="text-text-secondary text-sm">Your vision, our passion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Our Services</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Complete event management solutions for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group p-6 rounded-xl bg-white hover:shadow-lg transition-shadow duration-300 border border-line-soft hover:border-accent-purple"
              >
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-purple transition mb-2">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {service.shortDescription}
                </p>
                <div className="inline-flex items-center gap-2 text-accent-purple text-sm font-medium group-hover:gap-3 transition">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent-purple text-white hover:opacity-90 transition font-semibold"
            >
              View All {services.length} Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Reels Showcase */}
      <ReelsShowcase />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Our Portfolio</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Showcase of our most successful event productions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-xl overflow-hidden bg-bg-secondary shadow-md hover:shadow-lg transition-shadow duration-300 h-64"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-bg-secondary">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-text-secondary">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-line-soft rounded-lg overflow-hidden hover:border-accent-purple transition"
              >
                <button
                  onClick={() => setOpenFAQId(openFAQId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 hover:bg-bg-secondary/50 transition"
                >
                  <h3 className="text-lg font-semibold text-text-primary text-left">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-accent-purple flex-shrink-0 transition-transform ${
                      openFAQId === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                {openFAQId === faq.id && (
                  <div className="px-6 pb-6 text-text-secondary">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-800 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Next Unforgettable Event?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let Aerollerz bring your vision to life with world-class event production
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${business.whatsapp.replace(/\D/g, '')}?text=Hi%20Aerollerz%2C%20I%20would%20like%20to%20discuss%20my%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-green-500 text-white hover:bg-green-600 transition font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.271c-1.477.784-2.748 1.925-3.642 3.318-1.537 2.329-1.663 5.038-.275 7.322 1.185 1.993 3.132 3.495 5.393 4.203 1.247.41 2.573.577 3.916.577 1.343 0 2.669-.167 3.916-.577 2.261-.708 4.208-2.21 5.393-4.203 1.388-2.284 1.262-4.993-.275-7.322-.894-1.393-2.165-2.534-3.642-3.318a9.87 9.87 0 00-4.869-1.271c-.493 0-.983.046-1.466.137z" />
              </svg>
              WhatsApp
            </a>
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-purple-900 hover:opacity-90 transition font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
