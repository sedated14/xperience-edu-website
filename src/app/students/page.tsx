'use client'

import Link from 'next/link'
import { ArrowRight, GraduationCap, Globe, BookOpen, Sun, Calendar, CheckCircle2, Shield } from 'lucide-react'

const programs = [
  {
    title: 'F1 Visa Programs',
    href: '/students/f1-visa',
    description: 'Attend a Private, Public or Boarding School in the US with a student visa. Graduate with a US diploma and prepare for American universities.',
    badge: 'Most Popular',
    badgeColor: 'bg-secondary-100 text-secondary-700',
    iconBg: 'bg-secondary-100',
    iconColor: 'text-secondary-600',
    features: ['US diploma', 'University prep', 'Multi-year enrollment'],
  },
  {
    title: 'J1 Exchange',
    href: '/students/j1-exchange',
    description: 'Live with an American host family and attend a public high school for a semester or full academic year. A true cultural immersion.',
    badge: 'Cultural Exchange',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    features: ['Host family', 'Public school', 'Cultural immersion'],
  },
  {
    title: 'Short-Term Programs',
    href: '/students/short-term',
    description: 'Experience American education for 2 to 12 weeks. Perfect for students who want a taste of US school life before committing long-term.',
    badge: '2-12 Weeks',
    badgeColor: 'bg-purple-100 text-purple-700',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    features: ['Flexible dates', 'No visa hassle', 'Trial experience'],
  },
  {
    title: 'Summer Programs',
    href: '/students/summer',
    description: 'Join summer camps, academic courses, or enrichment programs across the US. Build skills, make friends, and explore America.',
    badge: 'Summer',
    badgeColor: 'bg-amber-100 text-amber-700',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    features: ['Camps & courses', 'Skill building', 'Summer adventure'],
  },
]

export default function StudentsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-dots-pattern" /></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl floating-delayed" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-500/20 backdrop-blur-sm rounded-full text-secondary-300 text-sm mb-6">
              <GraduationCap className="w-4 h-4" />
              Student Programs
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
              Your American Education
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-accent-400">Starts Here</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mt-6 max-w-2xl">
              Whether you dream of earning a US diploma, experiencing American culture, or exploring summer opportunities — we have the perfect program for you.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/about/contact" className="btn-secondary btn-lg group">
                Get Started Today <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#programs" className="btn-ghost btn-lg">Explore Programs</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS GRID */}
      <section id="programs" className="section bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">Choose Your Path</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 font-display">Four Programs, One Goal</h2>
            <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">Every student is different. That&apos;s why we offer flexible programs to match your goals, timeline, and budget.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {programs.map((program) => (
              <Link key={program.title} href={program.href} className="group bg-white rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 ${program.iconBg} rounded-2xl flex items-center justify-center`}>
                    <GraduationCap className={`w-7 h-7 ${program.iconColor}`} />
                  </div>
                  <span className={`px-3 py-1 ${program.badgeColor} rounded-full text-xs font-medium`}>{program.badge}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-secondary-600 transition-colors">{program.title}</h3>
                <p className="text-neutral-600 mt-2">{program.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {program.features.map((feature) => (
                    <span key={feature} className="inline-flex items-center gap-1 text-xs text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="w-3 h-3" /> {feature}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center text-secondary-600 font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STUDY IN THE US */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">Why the US?</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">World-Class Education Awaits</h2>
              <p className="text-lg text-neutral-600 mt-4">The United States offers some of the best high school education in the world, with diverse extracurriculars, advanced academics, and pathways to top universities.</p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0"><BookOpen className="w-5 h-5 text-secondary-600" /></div>
                  <div><h4 className="font-semibold text-neutral-900">Academic Excellence</h4><p className="text-neutral-600 text-sm mt-1">AP courses, honors programs, and college preparatory curriculum</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0"><Globe className="w-5 h-5 text-accent-600" /></div>
                  <div><h4 className="font-semibold text-neutral-900">Cultural Immersion</h4><p className="text-neutral-600 text-sm mt-1">Live, learn, and grow in an English-speaking environment</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0"><Shield className="w-5 h-5 text-secondary-600" /></div>
                  <div><h4 className="font-semibold text-neutral-900">Local Support</h4><p className="text-neutral-600 text-sm mt-1">Local support from coordinators and dedicated staff</p></div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* REPLACE: public/images/students-hero.jpg */}
              <div className="aspect-square bg-gradient-to-br from-secondary-100 to-accent-100 rounded-3xl flex items-center justify-center">
                <div className="text-center text-neutral-400"><GraduationCap className="w-20 h-20 mx-auto mb-4" /><p>public/images/students-hero.jpg</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="section bg-primary-950 text-white">
        <div className="container-wide">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 bg-secondary-500/20 text-secondary-400 rounded-full text-sm font-medium mb-4">Why Xperience</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">Trusted by Families, Students, Schools and <span className="text-secondary-400">Agencies Worldwide</span></h2>
            <p className="text-lg text-neutral-400 mt-6 max-w-2xl mx-auto">With over 15 years of experience, we&apos;ve built a reputation for excellence in international student placement. Our dedicated team ensures every student has a safe, successful, and transformative experience.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section animated-gradient">
        <div className="container-wide text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display max-w-3xl mx-auto">Ready to Begin Your Journey?</h2>
          <p className="text-lg sm:text-xl text-white/80 mt-4 max-w-2xl mx-auto">Our admissions team is ready to help you find the perfect program. Get started today.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/about/contact" className="btn bg-white text-primary-900 hover:bg-neutral-100 btn-lg">Apply Now <ArrowRight className="w-5 h-5" /></Link>
            <Link href="/about/contact" className="btn-ghost btn-lg">Talk to an Advisor</Link>
          </div>
        </div>
      </section>
    </>
  )
}
