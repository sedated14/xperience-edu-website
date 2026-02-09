'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, MapPin, Send, Clock, Globe, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', type: '', message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          type: formData.type,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', phone: '', type: '', message: '' })
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 hero-gradient overflow-visible">
        {/* Mobile Hero Background */}
        <div className="absolute inset-0 lg:hidden">
          <img src="/images/contact-hero.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/90 to-primary-950" />
        </div>
        <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-dots-pattern" /></div>
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-500/20 backdrop-blur-sm rounded-full text-secondary-300 text-sm mb-6">
                <Mail className="w-4 h-4" />
                Get in Touch
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
                Let&apos;s Start a
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-accent-400 pb-2">Conversation</span>
              </h1>
              <p className="text-lg text-white/80 mt-6 max-w-2xl mx-auto lg:mx-0">
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
        
        {/* Mobile Overlapping Hero Image */}
        <div className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img src="/images/contact-hero.jpg" alt="Friendly consultation" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="section bg-neutral-50 pt-36 sm:pt-40 lg:pt-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Message Sent!</h3>
                    <p className="text-neutral-600">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)} 
                      className="btn-secondary mt-6"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm">
                      {error}
                    </div>
                  )}
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
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-secondary btn-lg w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Send Message
                      </>
                    )}
                  </button>
                </form>
                )}
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
