'use client'

import Link from 'next/link'
import { ArrowRight, Sun, CheckCircle2, Globe, BookOpen, Users, Mountain, Palette, Lightbulb } from 'lucide-react'

export default function SummerPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 hero-gradient overflow-visible">
        {/* Mobile Hero Background */}
        <div className="absolute inset-0 lg:hidden">
          <img src="/images/summer-hero.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/90 to-primary-950" />
        </div>
        <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-dots-pattern" /></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl floating" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-300 text-sm mb-6">
                <Sun className="w-4 h-4" />
                Summer Programs
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
                Make This Summer
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-accent-400 pb-2">Unforgettable</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mt-4 max-w-2xl mx-auto lg:mx-0">
                Academic courses, summer camps, STEM programs, and more. Spend your summer learning, growing, and exploring the US.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                <Link href="/about/contact" className="btn bg-amber-600 text-white hover:bg-amber-700 hover:shadow-lg hover:-translate-y-0.5 btn-lg group">Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                <Link href="#programs" className="btn-ghost btn-lg">View Programs</Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/summer-hero.jpg"
                    alt="Students enjoying summer camp activities"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                      <Sun className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">Summer</div>
                      <div className="text-sm text-neutral-600">Adventure</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                      <Mountain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">Explore</div>
                      <div className="text-sm text-neutral-600">America</div>
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
            <img src="/images/summer-hero.jpg" alt="Students enjoying summer camp activities" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* PROGRAM TYPES */}
      <section id="programs" className="section bg-neutral-50 pt-36 sm:pt-40 lg:pt-16">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">Summer Options</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">Choose Your Adventure</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: BookOpen, title: 'Academic Courses', desc: 'Earn credits in subjects like math, science, English, and SAT prep', color: 'bg-secondary-100 text-secondary-600' },
              { icon: Lightbulb, title: 'STEM & Tech', desc: 'Coding bootcamps, robotics, engineering, and innovation programs', color: 'bg-amber-100 text-amber-600' },
              { icon: Palette, title: 'Arts & Creative', desc: 'Visual arts, music, film, theater, and creative writing workshops', color: 'bg-purple-100 text-purple-600' },
              { icon: Mountain, title: 'Outdoor & Adventure', desc: 'Hiking, kayaking, leadership camps, and outdoor exploration', color: 'bg-emerald-100 text-emerald-600' },
              { icon: Globe, title: 'English Immersion', desc: 'Intensive English language programs for all levels', color: 'bg-secondary-100 text-secondary-600' },
              { icon: Users, title: 'Leadership & Service', desc: 'Community service, leadership development, and social impact', color: 'bg-accent-100 text-accent-600' },
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
            <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-4">All Inclusive</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display">What&apos;s <span className="text-amber-400">Included</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {['Program placement', 'Housing (host family or dorm)', 'Meals during program', 'Airport transfers', 'Health insurance', 'Activity & excursion planning', 'Certificate of completion', 'Local coordinator support', '24/7 emergency line'].map((item) => (
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display max-w-3xl mx-auto">Don&apos;t Miss This Summer</h2>
          <p className="text-lg text-white/80 mt-4 max-w-2xl mx-auto">Programs fill up fast. Apply early to secure your spot for this summer&apos;s sessions.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/about/contact" className="btn bg-white text-primary-900 hover:bg-neutral-100 btn-lg">Apply Now <ArrowRight className="w-5 h-5" /></Link>
            <Link href="/students" className="btn-ghost btn-lg">View All Programs</Link>
          </div>
        </div>
      </section>
    </>
  )
}
