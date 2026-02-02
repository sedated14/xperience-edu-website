'use client'

import Link from 'next/link'
import { ArrowRight, Briefcase, CheckCircle2, Globe, Users, DollarSign, Clock, Target, Heart } from 'lucide-react'

const positions = [
  {
    title: 'Regional Coordinator',
    type: '1099 Contractor',
    location: 'Nationwide (Remote + Local)',
    description: 'Manage host families, students, and school relationships in your region. Be the local face of Xperience Education.',
    responsibilities: ['Host family recruitment & vetting', 'Student orientation & monthly check-ins', 'School relationship management', 'Emergency response coordination'],
  },
  {
    title: 'International Recruitment Agent',
    type: '1099 Contractor',
    location: 'International (Remote)',
    description: 'Recruit students in your country and guide them through the application process. Leverage your local network to grow placements.',
    responsibilities: ['Student recruitment & outreach', 'Application support & counseling', 'Agency partnership development', 'Local marketing & events'],
  },
  {
    title: 'Host Family Recruiter',
    type: '1099 Contractor',
    location: 'US-Based (Remote + Local)',
    description: 'Find and qualify great host families in your community. Help match students with welcoming homes.',
    responsibilities: ['Host family outreach & screening', 'Home visits & interviews', 'Community engagement', 'Ongoing family support'],
  },
]

export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-dots-pattern" /></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl floating" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-500/20 backdrop-blur-sm rounded-full text-secondary-300 text-sm mb-6">
              <Briefcase className="w-4 h-4" />
              Join Our Team
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
              Build a Career in
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-accent-400">International Education</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mt-6 max-w-2xl">
              We&apos;re always looking for passionate people to join our network of independent contractors. Flexible hours, meaningful work, great pay.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="#positions" className="btn-secondary btn-lg group">View Open Positions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">Why Join Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">Perks of Working With Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Clock, title: 'Flexible Schedule', desc: 'Work on your own time as an independent contractor. Set your own hours.', color: 'bg-secondary-100 text-secondary-600' },
              { icon: DollarSign, title: 'Competitive Pay', desc: 'Earn competitive compensation with performance-based bonuses.', color: 'bg-accent-100 text-accent-600' },
              { icon: Heart, title: 'Meaningful Impact', desc: 'Help international students achieve their dreams of studying in America.', color: 'bg-secondary-100 text-secondary-600' },
              { icon: Globe, title: 'Global Community', desc: 'Join a network of professionals passionate about international education.', color: 'bg-accent-100 text-accent-600' },
              { icon: Target, title: 'Growth Opportunity', desc: 'Build your territory and earnings as you grow your network.', color: 'bg-secondary-100 text-secondary-600' },
              { icon: Users, title: 'Training & Support', desc: 'Comprehensive onboarding and ongoing professional development.', color: 'bg-accent-100 text-accent-600' },
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

      {/* OPEN POSITIONS */}
      <section id="positions" className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">Now Hiring</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">Open Positions</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {positions.map((pos) => (
              <div key={pos.title} className="bg-neutral-50 rounded-3xl p-6 sm:p-8 hover:shadow-soft transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">{pos.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium">{pos.type}</span>
                      <span className="px-3 py-1 bg-neutral-200 text-neutral-600 rounded-full text-xs font-medium">{pos.location}</span>
                    </div>
                  </div>
                  <Link href="/about/contact" className="btn-secondary text-sm">Apply <ArrowRight className="w-4 h-4" /></Link>
                </div>
                <p className="text-neutral-600">{pos.description}</p>
                <div className="mt-4 grid sm:grid-cols-2 gap-2">
                  {pos.responsibilities.map(r => (
                    <div key={r} className="flex items-center gap-2 text-sm text-neutral-600"><CheckCircle2 className="w-4 h-4 text-secondary-500 flex-shrink-0" />{r}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section animated-gradient">
        <div className="container-wide text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display max-w-3xl mx-auto">Ready to Make a Difference?</h2>
          <p className="text-lg text-white/80 mt-4 max-w-2xl mx-auto">Send us your resume and tell us why you&apos;re passionate about international education.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/about/contact" className="btn bg-white text-primary-900 hover:bg-neutral-100 btn-lg">Apply Now <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
