'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  GraduationCap, 
  Building2, 
  Share2, 
  Briefcase,
  Globe,
  Users,
  Award,
  CheckCircle2,
  Play,
  Shield
} from 'lucide-react'

// Rotating text component
function RotatingText({ words, className }: { words: string[], className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
        setIsAnimating(false)
      }, 500) // Half of transition time
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <span className={`block ${className}`}>
      <span 
        className={`inline-block transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 via-secondary-300 to-accent-400 pb-2 ${
          isAnimating 
            ? 'opacity-0 translate-y-4' 
            : 'opacity-100 translate-y-0'
        }`}
        style={{ lineHeight: '1.1' }}
      >
        {words[currentIndex]}
      </span>
    </span>
  )
}

export default function HomePage() {
  return (
    <>
      {/* HERO — Dark charcoal matching logo */}
      <section className="relative min-h-screen flex items-center hero-gradient overflow-visible">
        {/* Mobile Hero Image Background */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src="/images/hero-students.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/90 to-primary-950" />
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-dots-pattern" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl floating-delayed" />

        <div className="container-wide relative z-10 py-32 pb-40 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6 animate-fade-down">
                <Globe className="w-4 h-4" />
                Connecting Students to Their American Dream
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight font-display animate-fade-up overflow-visible">
                Your Gateway to
                <span className="block overflow-visible">
                  <RotatingText 
                    words={['F1 Visa Programs', 'J1 Exchange Programs', 'Summer Programs', 'Short-Term Programs', 'US High School Education']} 
                  />
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mt-2 max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-200">
                F1 Visa, J1 Exchange, Short-Term, and Summer Programs. 
                Start your international education journey with a trusted partner.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8 animate-fade-up animation-delay-400">
                <Link href="/students" className="btn-secondary btn-lg group">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/about" className="btn-ghost btn-lg">
                  <Play className="w-5 h-5" />
                  Watch Our Story
                </Link>
              </div>
              <div className="hidden lg:block mt-12 pt-8 border-t border-white/10 animate-fade-up animation-delay-600">
                <p className="text-white/60 text-sm mb-4">Part of a Growing Global Network</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100K+</div>
                    <div className="text-sm text-white/60">Int&apos;l Students in US Yearly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-sm text-white/60">Years Team Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">200+</div>
                    <div className="text-sm text-white/60">School Options</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block animate-fade-in animation-delay-400">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* REPLACE: Add your hero image to public/images/hero-students.jpg */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/hero-students.jpg"
                    alt="International students on an American campus"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-elevated animate-fade-up animation-delay-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary-600 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">100K+</div>
                      <div className="text-sm text-neutral-600">Students in US Yearly</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-elevated animate-fade-up animation-delay-1000">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">Proven</div>
                      <div className="text-sm text-neutral-600">Partner Networks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
        
        {/* Mobile Overlapping Hero Image */}
        <div className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="/images/hero-students.jpg"
              alt="International students on an American campus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FIVE PILLARS BENTO GRID */}
      <section className="section bg-neutral-50 pt-44 sm:pt-48 lg:pt-16">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">Our Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 font-display">Your Journey Starts Here</h2>
            <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">Whether you&apos;re a student or partner — we have a path designed just for you.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {/* Students — Blue hover */}
            <Link href="/students" className="col-span-1 sm:col-span-2 lg:col-span-1 lg:row-span-2 group relative overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-600 to-secondary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-secondary-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-4 transition-colors"><GraduationCap className="w-7 h-7 text-secondary-600 group-hover:text-white transition-colors" /></div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-white transition-colors">Students</h3>
                <p className="text-neutral-600 group-hover:text-white/80 mt-2 transition-colors">F1 Visa, J1 Exchange, Short-Term &amp; Summer programs for international students</p>
                <div className="mt-4 flex items-center text-secondary-600 group-hover:text-white font-medium transition-colors">Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" /></div>
              </div>
            </Link>
            {/* Partners — Blue hover */}
            <Link href="/partners" className="group relative overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-500 to-secondary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-secondary-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-4 transition-colors"><Share2 className="w-7 h-7 text-secondary-600 group-hover:text-white transition-colors" /></div>
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-white transition-colors">Partners</h3>
                <p className="text-neutral-600 group-hover:text-white/80 mt-2 transition-colors">Join our global network of education agencies</p>
                <div className="mt-4 flex items-center text-secondary-600 group-hover:text-white font-medium transition-colors">Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" /></div>
              </div>
            </Link>
            {/* Careers — Charcoal hover */}
            <Link href="/careers" className="group relative overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-4 transition-colors"><Briefcase className="w-7 h-7 text-primary-700 group-hover:text-white transition-colors" /></div>
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-white transition-colors">Careers</h3>
                <p className="text-neutral-600 group-hover:text-white/80 mt-2 transition-colors">Work with us as an independent agent</p>
                <div className="mt-4 flex items-center text-primary-700 group-hover:text-white font-medium transition-colors">Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" /></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US — Industry credibility */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">Our Advantage</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">Backed by Experience & Trusted Networks</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group bg-neutral-50 rounded-2xl p-6 hover:bg-secondary-50 transition-colors">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-600 transition-colors">
                <Award className="w-8 h-8 text-secondary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-neutral-900">15+ Years Combined</h3>
              <p className="text-neutral-600 text-sm mt-2">Team Experience in F-1 & J-1 Student Placement</p>
            </div>
            <div className="text-center group bg-neutral-50 rounded-2xl p-6 hover:bg-secondary-50 transition-colors">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-600 transition-colors">
                <Users className="w-8 h-8 text-secondary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-neutral-900">100,000+ Students</h3>
              <p className="text-neutral-600 text-sm mt-2">International High School Students in the U.S. Each Year</p>
            </div>
            <div className="text-center group bg-neutral-50 rounded-2xl p-6 hover:bg-secondary-50 transition-colors">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-600 transition-colors">
                <Shield className="w-8 h-8 text-secondary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-neutral-900">Proven Sponsors</h3>
              <p className="text-neutral-600 text-sm mt-2">Working with Networks Serving Thousands Annually</p>
            </div>
            <div className="text-center group bg-neutral-50 rounded-2xl p-6 hover:bg-secondary-50 transition-colors">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-600 transition-colors">
                <Building2 className="w-8 h-8 text-secondary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-neutral-900">200+ School Options</h3>
              <p className="text-neutral-600 text-sm mt-2">School Network Across the United States</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — Dark section */}
      <section className="section bg-primary-950 text-white overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-secondary-500/20 text-secondary-400 rounded-full text-sm font-medium mb-4">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">Excellence in International <span className="text-secondary-400">Education</span></h2>
              <p className="text-lg text-neutral-400 mt-4">Our seasoned team brings deep roots in F-1 and J-1 student placement. We work with proven sponsors and networks to help students achieve their dreams of studying in America.</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" /><span className="text-neutral-300">Personalized school matching</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" /><span className="text-neutral-300">Comprehensive visa support</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" /><span className="text-neutral-300">Dedicated program coordinators</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" /><span className="text-neutral-300">Local area support</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" /><span className="text-neutral-300">Pre-departure orientation</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" /><span className="text-neutral-300">Ongoing academic monitoring</span></div>
              </div>
              <div className="mt-8"><Link href="/about" className="btn-secondary btn-lg">Learn More About Us <ArrowRight className="w-5 h-5" /></Link></div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/hnmZSYmtlPA"
                  title="Xperience Education"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Animated charcoal/blue gradient */}
      <section className="section animated-gradient">
        <div className="container-wide text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display max-w-3xl mx-auto">Ready to Start Your International Education Journey?</h2>
          <p className="text-lg sm:text-xl text-white/80 mt-4 max-w-2xl mx-auto">Take the first step toward your American education experience. Our team is ready to guide you every step of the way.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/about/contact" className="btn bg-white text-primary-900 hover:bg-neutral-100 btn-lg">Apply Now <ArrowRight className="w-5 h-5" /></Link>
            <Link href="/about/contact" className="btn-ghost btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
