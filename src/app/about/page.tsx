'use client'

import Link from 'next/link'
import { ArrowRight, Globe, Heart, Shield, Users, Award, Target, CheckCircle2 } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-dots-pattern" /></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl floating" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-500/20 backdrop-blur-sm rounded-full text-secondary-300 text-sm mb-6">
              <Globe className="w-4 h-4" />
              About Xperience Education
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
              15+ Years of
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-accent-400 pb-2">Changing Lives</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mt-6 max-w-2xl">
              Since 2009, we&apos;ve connected thousands of international students with life-changing American education experiences.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">Built on a Passion for Education</h2>
              <p className="text-lg text-neutral-600 mt-4">Xperience Education was founded with a simple belief: every student deserves the opportunity to experience world-class education, regardless of where they were born.</p>
              <p className="text-neutral-600 mt-4">What started as a small operation placing a handful of students has grown into one of the most trusted names in international student placement, with partnerships in over 50 countries and 200+ US schools.</p>
              <p className="text-neutral-600 mt-4">Our team of dedicated coordinators, host family managers, and education specialists work together to ensure every student has a safe, successful, and transformative experience in America.</p>
            </div>
            <div className="relative">
              {/* REPLACE: public/images/team-photo.jpg */}
              <div className="aspect-video bg-gradient-to-br from-secondary-100 to-accent-100 rounded-3xl flex items-center justify-center">
                <div className="text-center text-neutral-400"><Users className="w-20 h-20 mx-auto mb-4" /><p>public/images/team-photo.jpg</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">What Drives Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: 'Safety First', desc: 'Student welfare is our absolute top priority in everything we do', color: 'bg-secondary-100 text-secondary-600' },
              { icon: Heart, title: 'Student-Centered', desc: 'Every decision starts with what\'s best for our students', color: 'bg-accent-100 text-accent-600' },
              { icon: Target, title: 'Excellence', desc: 'We hold ourselves to the highest standards of service', color: 'bg-secondary-100 text-secondary-600' },
              { icon: Globe, title: 'Cultural Bridge', desc: 'We believe in the power of cross-cultural understanding', color: 'bg-accent-100 text-accent-600' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-soft text-center">
                <div className={`w-14 h-14 ${item.color.split(' ')[0]} rounded-2xl flex items-center justify-center mx-auto mb-4`}><item.icon className={`w-7 h-7 ${item.color.split(' ')[1]}`} /></div>
                <h3 className="font-bold text-neutral-900">{item.title}</h3>
                <p className="text-neutral-600 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section bg-primary-950 text-white">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-secondary-400">15+</div>
              <div className="text-neutral-400 mt-2">Years Operating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-accent-400">5,000+</div>
              <div className="text-neutral-400 mt-2">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-secondary-400">200+</div>
              <div className="text-neutral-400 mt-2">Partner Schools</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-accent-400">50+</div>
              <div className="text-neutral-400 mt-2">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section animated-gradient">
        <div className="container-wide text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display max-w-3xl mx-auto">Want to Learn More?</h2>
          <p className="text-lg text-white/80 mt-4 max-w-2xl mx-auto">We&apos;d love to hear from you. Reach out and let&apos;s start a conversation.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/about/contact" className="btn bg-white text-primary-900 hover:bg-neutral-100 btn-lg">Contact Us <ArrowRight className="w-5 h-5" /></Link>
            <Link href="/students" className="btn-ghost btn-lg">Explore Programs</Link>
          </div>
        </div>
      </section>
    </>
  )
}
