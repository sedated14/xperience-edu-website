'use client'

import Link from 'next/link'
import { ArrowRight, Home, CheckCircle2, Heart, Globe, Shield, Users, Star, DollarSign } from 'lucide-react'

export default function HostFamiliesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-dots-pattern" /></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl floating" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/20 backdrop-blur-sm rounded-full text-accent-300 text-sm mb-6">
                <Home className="w-4 h-4" />
                Host Families
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
                Open Your Home,
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-secondary-400 pb-2">Change a Life</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mt-6 max-w-2xl">
                Host an international student and experience the world from your living room. Build cross-cultural connections that last a lifetime.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/contact" className="btn bg-accent-600 text-white hover:bg-accent-700 hover:shadow-lg hover:-translate-y-0.5 btn-lg group">Apply to Host <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                <Link href="#benefits" className="btn-ghost btn-lg">Learn More</Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/host-families-hero.jpg"
                    alt="Host family with international student"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">Meaningful</div>
                      <div className="text-sm text-neutral-600">Connections</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">Cultural</div>
                      <div className="text-sm text-neutral-600">Exchange</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="section bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">Why Host?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">The Rewards of Hosting</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Heart, title: 'Meaningful Connection', desc: 'Build a lasting bond with a student who becomes part of your family', color: 'bg-accent-100 text-accent-600' },
              { icon: Globe, title: 'Cultural Exchange', desc: 'Learn about another culture while sharing your own traditions', color: 'bg-secondary-100 text-secondary-600' },
              { icon: Users, title: 'Enrich Your Family', desc: 'Give your children a global perspective and lifelong friend', color: 'bg-accent-100 text-accent-600' },
              { icon: DollarSign, title: 'Monthly Stipend', desc: 'Receive a monthly hosting stipend to offset costs (F1 program)', color: 'bg-secondary-100 text-secondary-600' },
              { icon: Shield, title: 'Full Support', desc: 'Local coordinators provide ongoing assistance and monthly check-ins', color: 'bg-accent-100 text-accent-600' },
              { icon: Star, title: 'Make a Difference', desc: 'Help shape a young person\'s future and create memories for both families', color: 'bg-secondary-100 text-secondary-600' },
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

      {/* TWO TRACKS */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">Two Options</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">Choose Your Hosting Track</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-neutral-50 rounded-3xl p-8 border-2 border-transparent hover:border-emerald-200 transition-colors">
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">J1 Exchange Host</span>
              <h3 className="text-2xl font-bold text-neutral-900">Volunteer Hosting</h3>
              <p className="text-neutral-600 mt-2">Host a J1 exchange student as a volunteer. Provide room, meals, and a welcoming home for a semester or academic year.</p>
              <ul className="mt-4 space-y-2">
                {['Semester or full year', 'Volunteer basis (no stipend)', 'Public school student', 'Cultural exchange focus'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-neutral-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-50 rounded-3xl p-8 border-2 border-transparent hover:border-secondary-200 transition-colors">
              <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">F1 Paid Host</span>
              <h3 className="text-2xl font-bold text-neutral-900">Paid Hosting</h3>
              <p className="text-neutral-600 mt-2">Host an F1 visa student attending a private school. Receive a monthly stipend while providing a home away from home.</p>
              <ul className="mt-4 space-y-2">
                {['Semester, year, or multi-year', 'Monthly hosting stipend', 'Private school student', 'Academic focus'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-neutral-600"><CheckCircle2 className="w-4 h-4 text-secondary-500 flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="section bg-primary-950 text-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent-500/20 text-accent-400 rounded-full text-sm font-medium mb-4">Requirements</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display">What We <span className="text-accent-400">Look For</span></h2>
            <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">You don&apos;t need a perfect home — just a welcoming heart. Here&apos;s what we need:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {['Private bedroom for the student', 'Three meals daily', 'Safe and supportive home environment', 'Transportation to/from school', 'Background check (all household members 18+)', 'Willingness to include student in family life'].map((item) => (
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display max-w-3xl mx-auto">Ready to Welcome a Student?</h2>
          <p className="text-lg text-white/80 mt-4 max-w-2xl mx-auto">The application takes about 15 minutes. Our team will guide you through every step.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact" className="btn bg-white text-primary-900 hover:bg-neutral-100 btn-lg">Apply to Host <ArrowRight className="w-5 h-5" /></Link>
            <Link href="/contact" className="btn-ghost btn-lg">Ask a Question</Link>
          </div>
        </div>
      </section>
    </>
  )
}
