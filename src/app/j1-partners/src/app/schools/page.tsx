'use client'

import Link from 'next/link'
import { ArrowRight, Building2, CheckCircle2, Globe, Users, TrendingUp, Shield, DollarSign, BookOpen } from 'lucide-react'

export default function SchoolsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-dots-pattern" /></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl floating" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-500/20 backdrop-blur-sm rounded-full text-secondary-300 text-sm mb-6">
              <Building2 className="w-4 h-4" />
              Partner Schools
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
              Enrich Your School
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-accent-400">With Global Diversity</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mt-6 max-w-2xl">
              Partner with us to welcome international students to your campus. Boost enrollment, increase revenue, and create a globally diverse learning environment.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/about/contact" className="btn-secondary btn-lg group">Become a Partner <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
              <Link href="#benefits" className="btn-ghost btn-lg">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="section bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">Why Partner?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">Benefits for Your School</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: TrendingUp, title: 'Boost Enrollment', desc: 'Fill open seats with motivated, academically strong international students', color: 'bg-secondary-100 text-secondary-600' },
              { icon: DollarSign, title: 'Additional Revenue', desc: 'International tuition provides a consistent and reliable revenue stream', color: 'bg-accent-100 text-accent-600' },
              { icon: Globe, title: 'Global Diversity', desc: 'Create a culturally rich campus that prepares all students for a global world', color: 'bg-secondary-100 text-secondary-600' },
              { icon: Shield, title: 'Vetted Students', desc: 'Every student is screened for academics, English proficiency, and character', color: 'bg-accent-100 text-accent-600' },
              { icon: Users, title: 'Full Support Staff', desc: 'Our coordinators handle host families, transportation, and student support', color: 'bg-secondary-100 text-secondary-600' },
              { icon: BookOpen, title: 'Zero Admin Burden', desc: 'We manage immigration paperwork, insurance, and compliance requirements', color: 'bg-accent-100 text-accent-600' },
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

      {/* HOW IT WORKS */}
      <section className="section bg-primary-950 text-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary-500/20 text-secondary-400 rounded-full text-sm font-medium mb-4">Simple Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display">How <span className="text-secondary-400">Partnership Works</span></h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { step: '01', title: 'Initial Consultation', desc: 'We discuss your school\'s needs, capacity, and goals for international enrollment.' },
              { step: '02', title: 'Partnership Agreement', desc: 'Simple, transparent agreement outlining placements, fees, and mutual responsibilities.' },
              { step: '03', title: 'Student Matching', desc: 'We send you pre-screened student profiles that match your school\'s academic standards.' },
              { step: '04', title: 'Ongoing Support', desc: 'Our local coordinators handle everything — housing, transport, check-ins, and emergencies.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-secondary-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-neutral-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section animated-gradient">
        <div className="container-wide text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display max-w-3xl mx-auto">Partner With Us Today</h2>
          <p className="text-lg text-white/80 mt-4 max-w-2xl mx-auto">Join 200+ schools across America that trust Xperience Education for quality international student placements.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/about/contact" className="btn bg-white text-primary-900 hover:bg-neutral-100 btn-lg">Get Started <ArrowRight className="w-5 h-5" /></Link>
            <Link href="/about/contact" className="btn-ghost btn-lg">Schedule a Call</Link>
          </div>
        </div>
      </section>
    </>
  )
}
