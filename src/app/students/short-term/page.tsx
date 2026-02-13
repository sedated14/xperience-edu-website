'use client'

import Link from 'next/link'
import { ArrowRight, Calendar, CheckCircle2, Globe, BookOpen, Users, Shield, Clock } from 'lucide-react'

export default function ShortTermPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 hero-gradient overflow-hidden">
        {/* Mobile Hero Background */}
        <div className="absolute inset-0 lg:hidden">
          <img src="/images/short-term-hero.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/90 to-primary-950" />
        </div>
        <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-dots-pattern" /></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl floating" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 text-sm mb-6">
                <Calendar className="w-4 h-4" />
                Short-Term Programs
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
                Experience America
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-accent-400 pb-2">In 2-12 Weeks</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mt-6 max-w-2xl mx-auto lg:mx-0">
                Try American school life without a long-term commitment. Perfect for students who want a preview before enrolling full-time.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                <Link href="/student-assessment" className="btn bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg hover:-translate-y-0.5 btn-lg group">Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                <Link href="#details" className="btn-ghost btn-lg">Learn More</Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/short-term-hero.jpg"
                    alt="Students in American classroom"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">2-12 Weeks</div>
                      <div className="text-sm text-neutral-600">Flexible Duration</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">Full</div>
                      <div className="text-sm text-neutral-600">Experience</div>
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
          <img src="/images/short-term-hero.jpg" alt="Students in American classroom" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* BENEFITS */}
      <section id="details" className="section bg-neutral-50 pt-32 sm:pt-36 lg:pt-16">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">Why Short-Term?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">Test the Waters First</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Clock, title: 'Flexible Duration', desc: 'Choose from 2 to 12 weeks based on your schedule', color: 'bg-purple-100 text-purple-600' },
              { icon: Globe, title: 'Cultural Preview', desc: 'Experience US life before committing to a full year', color: 'bg-secondary-100 text-secondary-600' },
              { icon: BookOpen, title: 'Academic Experience', desc: 'Attend classes alongside American students', color: 'bg-accent-100 text-accent-600' },
              { icon: Users, title: 'Make Friends', desc: 'Build lasting friendships with students from around the world', color: 'bg-purple-100 text-purple-600' },
              { icon: Shield, title: 'Full Support', desc: 'Coordinators ensure a safe and smooth experience', color: 'bg-secondary-100 text-secondary-600' },
              { icon: Calendar, title: 'Easy Visa Process', desc: 'Simplified visa requirements for short stays', color: 'bg-accent-100 text-accent-600' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 ${item.color.split(' ')[0]} rounded-xl flex items-center justify-center mb-4`}><item.icon className={`w-6 h-6 ${item.color.split(' ')[1]}`} /></div>
                <h3 className="font-bold text-neutral-900">{item.title}</h3>
                <p className="text-neutral-600 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section bg-primary-950 text-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium mb-4">All Inclusive</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display">What&apos;s <span className="text-purple-400">Included</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {['School placement', 'Host family or dorm housing', 'Airport transfers', 'Orientation program', 'Health insurance', 'Local coordinator', 'Activity planning', 'Certificate of completion', '24/7 support'].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                <CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <span className="text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section animated-gradient">
        <div className="container-wide text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display max-w-3xl mx-auto">Ready for a Short-Term Adventure?</h2>
          <p className="text-lg text-white/80 mt-4 max-w-2xl mx-auto">Flexible start dates available throughout the year. Contact us to find the perfect timing.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/student-assessment" className="btn bg-white text-primary-900 hover:bg-neutral-100 btn-lg">Get Started <ArrowRight className="w-5 h-5" /></Link>
            <Link href="/students" className="btn-ghost btn-lg">View All Programs</Link>
          </div>
        </div>
      </section>
    </>
  )
}
