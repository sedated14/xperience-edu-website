'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  Globe, 
  CheckCircle2,
  Sparkles,
  ArrowRight,
  GraduationCap,
  MessageSquare
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', 
    email: '', 
    phone: '', 
    type: '', 
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // ============================================
    // IMPORTANT: Replace 'YOUR_FORM_ID' with your actual Formspree form ID
    // Get one free at https://formspree.io
    // ============================================
    const FORMSPREE_ID = 'xpqjzwbg'

    try {
      // If Formspree ID is not configured, simulate success for testing
      if (FORMSPREE_ID === 'YOUR_FORM_ID') {
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log('Form submitted (TEST MODE):', formData)
        setIsSubmitted(true)
        setFormData({ name: '', email: '', phone: '', type: '', message: '' })
        return
      }

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'General Contact Inquiry',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          type: formData.type,
          message: formData.message,
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', phone: '', type: '', message: '' })
        // Scroll to top of form to show thank you message
        document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Styled input classes
  const inputClasses = (fieldName: string) => `
    w-full px-4 py-3.5 bg-white border-2 rounded-xl transition-all duration-300 outline-none
    ${focusedField === fieldName 
      ? 'border-secondary-500 shadow-lg shadow-secondary-500/20 scale-[1.01]' 
      : 'border-neutral-200 hover:border-neutral-300'
    }
  `

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 hero-gradient overflow-hidden">
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
                <MessageSquare className="w-4 h-4" />
                We&apos;re Here to Help
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
                Get in
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-accent-400 pb-2">Touch</span>
              </h1>
              <p className="text-lg text-white/80 mt-6 max-w-2xl mx-auto lg:mx-0">
                Have questions about our programs? Need more information? Our team responds within 24 hours.
              </p>
              <a 
                href="#form" 
                className="inline-flex items-center gap-2 mt-8 btn-secondary btn-lg group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send a Message
              </a>
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
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-elevated animate-bounce-slow">
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
                <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-elevated animate-bounce-slow animation-delay-500">
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

      {/* Mobile Overlapping Hero Image */}
      <div className="lg:hidden relative z-20 flex justify-center -mt-8 -mb-24">
        <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <img src="/images/contact-hero.jpg" alt="Friendly consultation" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* CONTACT FORM + INFO */}
      <section id="form" className="section bg-gradient-to-b from-neutral-50 to-white pt-32 sm:pt-36 lg:pt-16 scroll-mt-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-neutral-100">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">Message Sent!</h3>
                    <p className="text-neutral-600 max-w-md mx-auto">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    
                    {/* Upsell Card */}
                    <div className="mt-8 p-6 bg-gradient-to-br from-secondary-50 to-accent-50 rounded-2xl border border-secondary-200">
                      <div className="flex items-center justify-center gap-2 text-secondary-600 mb-3">
                        <Sparkles className="w-5 h-5" />
                        <span className="font-semibold">Ready to take the next step?</span>
                      </div>
                      <p className="text-neutral-600 text-sm mb-4">
                        Want to fast-track your application? Complete your Student Assessment Profile now and we&apos;ll match you with the perfect program.
                      </p>
                      <Link 
                        href="/student-assessment#form" 
                        className="inline-flex items-center gap-2 btn-secondary"
                      >
                        <GraduationCap className="w-5 h-5" />
                        Complete Student Assessment
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    <button 
                      onClick={() => setIsSubmitted(false)} 
                      className="btn-ghost mt-6"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-2">Send Us a Message</h2>
                    <p className="text-neutral-600">
                      Have a question or need more information? Fill out the form below and we&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm border border-red-200">
                        {error}
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">Full Name *</label>
                        <input
                          type="text" 
                          required
                          className={inputClasses('name')}
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">Email *</label>
                        <input
                          type="email" 
                          required
                          className={inputClasses('email')}
                          placeholder="you@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          className={inputClasses('phone')}
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">I am a... *</label>
                        <select
                          required
                          className={inputClasses('type')}
                          value={formData.type}
                          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                          onFocus={() => setFocusedField('type')}
                          onBlur={() => setFocusedField(null)}
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
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">Message *</label>
                      <textarea
                        required 
                        rows={5}
                        className={`${inputClasses('message')} resize-none`}
                        placeholder="Tell us about your interest, goals, or questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="group relative overflow-hidden btn bg-gradient-to-r from-secondary-600 to-secondary-500 text-white hover:from-secondary-700 hover:to-secondary-600 btn-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-secondary-500/30 hover:shadow-2xl hover:shadow-secondary-500/40 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
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
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                            Send Message
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </button>
                  </form>
                </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-neutral-100">
                <h3 className="font-bold text-neutral-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:Info@XperienceEdu.com" className="flex items-center gap-3 text-neutral-600 hover:text-secondary-600 transition-colors group">
                    <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-200 transition-colors">
                      <Mail className="w-5 h-5 text-secondary-600" />
                    </div>
                    Info@XperienceEdu.com
                  </a>
                  <div className="flex items-center gap-3 text-neutral-600">
                    <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-secondary-600" />
                    </div>
                    Las Vegas, Nevada, USA
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-xl border border-neutral-100">
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

              {/* Ready to Apply Card */}
              <div className="bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-3xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-6 h-6" />
                  <h3 className="font-bold text-lg">Ready to Apply?</h3>
                </div>
                <p className="text-white/90 text-sm mb-4">
                  Skip the back-and-forth. Complete your Student Assessment Profile and we&apos;ll match you with the perfect program faster.
                </p>
                <Link 
                  href="/student-assessment#form" 
                  className="inline-flex items-center gap-2 btn bg-white text-secondary-700 hover:bg-neutral-100 w-full justify-center"
                >
                  Start Assessment <ArrowRight className="w-4 h-4" />
                </Link>
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

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </>
  )
}
