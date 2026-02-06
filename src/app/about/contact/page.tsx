'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Send, Clock, Globe, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', type: '', message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to your form handler (Formspree, Netlify Forms, etc.)
    alert('Thank you! We will be in touch within 24 hours.')
  }

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-dots-pattern" /></div>
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-500/20 backdrop-blur-sm rounded-full text-secondary-300 text-sm mb-6">
                <Mail className="w-4 h-4" />
                Get in Touch
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
                Let&apos;s Start a
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-accent-400 pb-2">Conversation</span>
              </h1>
              <p className="text-lg text-white/80 mt-6 max-w-2xl">
                Have questions about our programs? Ready to apply? Our team responds within 24 hours.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/contact-hero.jpg"
                    alt="Friendly consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary-600 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">24 Hour</div>
                      <div className="text-sm text-neutral-600">Response</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">Global</div>
                      <div className="text-sm text-neutral-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                      <input
                        type="text" required
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-colors"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email *</label>
                      <input
                        type="email" required
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-colors"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-colors"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">I am a... *</label>
                      <select
                        required
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-colors"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      >
                        <option value="">Select one</option>
                        <option value="student">Student / Parent</option>
                        <option value="host-family">Prospective Host Family</option>
                        <option value="school">School Administrator</option>
                        <option value="partner">Agency Partner</option>
                        <option value="career">Job Applicant</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Message *</label>
                    <textarea
                      required rows={5}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 transition-colors resize-none"
                      placeholder="Tell us about your interest, goals, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn-secondary btn-lg w-full sm:w-auto">
                    <Send className="w-5 h-5" /> Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-soft">
                <h3 className="font-bold text-neutral-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:Info@XperienceEdu.com" className="flex items-center gap-3 text-neutral-600 hover:text-secondary-600 transition-colors">
                    <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0"><Mail className="w-5 h-5 text-secondary-600" /></div>
                    Info@XperienceEdu.com
                  </a>
                  <a href="tel:+17025550123" className="flex items-center gap-3 text-neutral-600 hover:text-secondary-600 transition-colors">
                    <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0"><Phone className="w-5 h-5 text-secondary-600" /></div>
                    +1 (702) 555-0123
                  </a>
                  <div className="flex items-center gap-3 text-neutral-600">
                    <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0"><MapPin className="w-5 h-5 text-secondary-600" /></div>
                    Las Vegas, Nevada, USA
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-soft">
                <h3 className="font-bold text-neutral-900 mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <Clock className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                    We respond within 24 hours
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <Globe className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                    Video consultations available worldwide
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                    Free consultation, no obligation
                  </div>
                </div>
              </div>

              <div className="bg-primary-950 rounded-3xl p-6 text-white">
                <h3 className="font-bold mb-3">What Happens Next?</h3>
                <div className="space-y-2 text-sm text-neutral-300">
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-400 font-bold">1.</span>
                    <span>We&apos;ll review your inquiry and respond within 24 hours</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-400 font-bold">2.</span>
                    <span>Schedule a free consultation call to discuss your goals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-400 font-bold">3.</span>
                    <span>Receive a personalized program recommendation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
