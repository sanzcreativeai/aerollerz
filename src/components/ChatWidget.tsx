'use client';

import { useState } from 'react';
import { business } from '@/lib/site-data';
import { services } from '@/lib/site-data';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState('greeting');
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
  });

  const handleServiceSelect = (serviceSlug: string) => {
    setSelectedService(serviceSlug);
    setStep('details');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const selectedSvc = services.find(s => s.slug === selectedService);
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Service Interested: ${selectedSvc?.title || selectedService}

Details:
${formData.details}
    `.trim();

    window.location.href = `mailto:${business.email}?subject=Event Inquiry - ${selectedSvc?.title}&body=${encodeURIComponent(emailBody)}`;
    setIsOpen(false);
    resetChat();
  };

  const resetChat = () => {
    setStep('greeting');
    setSelectedService('');
    setFormData({ name: '', email: '', phone: '', details: '' });
  };

  return (
    <>
      {/* Chat Widget Trigger Button (hidden, used by FloatingActions) */}
      <button
        id="chat-widget-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className="sr-only"
      />

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 bg-white rounded-2xl shadow-2xl border border-line-soft overflow-hidden flex flex-col max-h-[600px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Chat with Aerollerz</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:opacity-80"
            >
              ✕
            </button>
          </div>

          {/* Chat Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {step === 'greeting' && (
              <>
                <div className="bg-bg-secondary rounded-lg p-4">
                  <p className="text-text-primary text-sm">
                    Hi! 👋 Welcome to Aerollerz. What type of event are you planning?
                  </p>
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {services.slice(0, 10).map(service => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceSelect(service.slug)}
                      className="w-full text-left px-3 py-2 rounded-lg bg-bg-secondary hover:bg-accent-purple/10 transition text-sm text-text-primary hover:text-accent-purple"
                    >
                      {service.title}
                    </button>
                  ))}
                  <details className="text-sm">
                    <summary className="px-3 py-2 rounded-lg bg-bg-secondary hover:bg-accent-purple/10 transition text-text-primary cursor-pointer">
                      More services...
                    </summary>
                    <div className="mt-2 space-y-2">
                      {services.slice(10).map(service => (
                        <button
                          key={service.id}
                          onClick={() => handleServiceSelect(service.slug)}
                          className="w-full text-left px-3 py-2 rounded-lg bg-bg-secondary hover:bg-accent-purple/10 transition text-sm text-text-primary hover:text-accent-purple"
                        >
                          {service.title}
                        </button>
                      ))}
                    </div>
                  </details>
                </div>
              </>
            )}

            {step === 'details' && (
              <>
                <div className="bg-bg-secondary rounded-lg p-4">
                  <p className="text-text-primary text-sm">
                    Great! Tell us more about your event.
                  </p>
                </div>
                <div className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-line-soft rounded-lg text-sm outline-none focus:border-accent-purple"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-line-soft rounded-lg text-sm outline-none focus:border-accent-purple"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-line-soft rounded-lg text-sm outline-none focus:border-accent-purple"
                  />
                  <textarea
                    name="details"
                    placeholder="Event details..."
                    value={formData.details}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-line-soft rounded-lg text-sm outline-none focus:border-accent-purple resize-none"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-line-soft p-4 flex gap-2">
            {step === 'details' && (
              <button
                onClick={() => setStep('greeting')}
                className="flex-1 px-3 py-2 rounded-lg border border-line-soft text-text-primary hover:bg-bg-secondary transition text-sm font-medium"
              >
                Back
              </button>
            )}
            {step === 'details' && (
              <button
                onClick={handleSubmit}
                className="flex-1 px-3 py-2 rounded-lg bg-accent-purple text-white hover:opacity-90 transition text-sm font-medium"
              >
                Send
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
