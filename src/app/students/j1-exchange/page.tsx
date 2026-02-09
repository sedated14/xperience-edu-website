'use client'

import Link from 'next/link'
import { ArrowRight, Globe, CheckCircle2, Home, Heart, Users, Shield, BookOpen, Calendar, Star } from 'lucide-react'

const comparisonData = [
  { feature: 'Visa Type', j1: 'J1 Exchange Visitor', f1: 'F1 Student' },
  { feature: 'Duration', j1: 'Semester or 1 Academic Year', f1: 'Multi-Year (up to graduation)' },
  { feature: 'School Type', j1: 'Public High School', f1: 'Private / Boarding School' },
  { feature: 'Housing', j1: 'Host Family (included)', f1: 'Host Family or Dorm' },
  { feature: 'School Choice', j1: 'Assigned by program', f1: 'You choose your school' },
  { feature: 'Cost', j1: 'Lower cost', f1: 'Higher cost (tuition-based)' },
  { feature: 'US Diploma', j1: 'Not typically', f1: 'Yes, full US diploma' },
  { feature: 'Best For', j1: 'Cultural experience', f1: 'Academic goals / university prep' },
]

export default function J1ExchangePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 hero-gradient overflow-hidden">
        {/* Mobile Hero Background */}
        <div className="absolute inset-0 lg:hidden">
          <img src="/images/j1-exchange-hero.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/90 to-primary-950" />
        </div>
        <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-dots-pattern" /></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl floating" />
        <div className="container-wide relative z-10">
          {/* Mobile Hero Image */}
          <div className="lg:hidden mb-8 flex justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img src="/images/j1-exchange-hero.jpg" alt="J1 exchange student with host family" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full text-emerald-300 text-sm mb-6">
                <Globe className="w-4 h-4" />
                J1 Exchange Program
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
                Experience America
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-accent-400 pb-2">Like a Local</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mt-6 max-w-2xl mx-auto lg:mx-0">
                Live with an American host family, attend a public high school, and immerse yourself in US culture for a semester or full year.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                <Link href="/about/contact" className="btn bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-0.5 btn-lg group">Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                <Link href="#comparison" className="btn-ghost btn-lg">J1 vs F1 Comparison</Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/j1-exchange-hero.jpg"
                    alt="J1 exchange student with host family"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                      <Home className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">Host Family</div>
                      <div className="text-sm text-neutral-600">Included</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">Cultural</div>
                      <div className="text-sm text-neutral-600">Immersion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES J1 SPECIAL */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">The J1 Experience</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">More Than Just School</h2>
            <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">The J1 program is a true cultural exchange — you become part of an American family and community.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Home, title: 'Host Family Living', desc: 'Live as a member of a welcoming American family', color: 'bg-emerald-100 text-emerald-600' },
              { icon: BookOpen, title: 'Public School', desc: 'Attend a local public high school with American peers', color: 'bg-secondary-100 text-secondary-600' },
              { icon: Heart, title: 'Cultural Exchange', desc: 'Share your culture while discovering American life', color: 'bg-accent-100 text-accent-600' },
              { icon: Shield, title: 'Full Support', desc: 'Local coordinators and 24/7 emergency assistance', color: 'bg-secondary-100 text-secondary-600' },
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

      {/* J1 vs F1 COMPARISON */}
      <section id="comparison" className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">Compare Programs</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">J1 Exchange vs F1 Visa</h2>
            <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">Not sure which program is right for you? Here&apos;s a side-by-side comparison.</p>
          </div>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 text-neutral-500 font-medium text-sm">Feature</th>
                  <th className="text-left py-4 px-4"><span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">J1 Exchange</span></th>
                  <th className="text-left py-4 px-4"><span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">F1 Visa</span></th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}>
                    <td className="py-3 px-4 font-medium text-neutral-900 text-sm">{row.feature}</td>
                    <td className="py-3 px-4 text-neutral-600 text-sm">{row.j1}</td>
                    <td className="py-3 px-4 text-neutral-600 text-sm">{row.f1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <p className="text-neutral-600 mb-4">Not sure which is right for you?</p>
            <Link href="/about/contact" className="btn-secondary">Talk to an Advisor <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section bg-primary-950 text-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-4">Step by Step</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display">Your J1 <span className="text-emerald-400">Journey</span></h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { step: '01', title: 'Apply Online', desc: 'Complete our application with your academic records, English test scores, and personal essay.' },
              { step: '02', title: 'Get Matched', desc: 'We match you with a vetted host family and public school based on your interests and needs.' },
              { step: '03', title: 'Visa & Prep', desc: 'We handle your DS-2019 form and guide you through the J1 visa interview process.' },
              { step: '04', title: 'Welcome to America', desc: 'Arrive to your host family, attend orientation, and start your American adventure!' },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-neutral-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">What&apos;s Included</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {['Host family placement', 'Public school enrollment', 'DS-2019 & visa support', 'Pre-departure orientation', 'Health insurance', 'Local coordinator support', 'Airport transfers', '24/7 emergency line', 'Monthly check-ins & reports'].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-soft">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section animated-gradient">
        <div className="container-wide text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display max-w-3xl mx-auto">Ready for the Exchange of a Lifetime?</h2>
          <p className="text-lg text-white/80 mt-4 max-w-2xl mx-auto">Applications are open for the next academic year. Spots fill quickly — start your journey today.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/about/contact" className="btn bg-white text-primary-900 hover:bg-neutral-100 btn-lg">Apply Now <ArrowRight className="w-5 h-5" /></Link>
            <Link href="/students" className="btn-ghost btn-lg">View All Programs</Link>
          </div>
        </div>
      </section>
    </>
  )
}
