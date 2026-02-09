'use client'

import Link from 'next/link'
import { ArrowRight, Monitor, CheckCircle2, Globe, BookOpen, Users, Clock, GraduationCap, DollarSign, Calendar, School } from 'lucide-react'

export default function VirtualHighSchoolPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 hero-gradient overflow-hidden">
        {/* Mobile Hero Background */}
        <div className="absolute inset-0 lg:hidden">
          <img src="/images/virtual-hero.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/90 to-primary-950" />
        </div>
        <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-dots-pattern" /></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl floating" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 backdrop-blur-sm rounded-full text-indigo-300 text-sm mb-6">
                <Monitor className="w-4 h-4" />
                Virtual High School Program
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
                Earn a U.S. Diploma
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-accent-400 pb-2">From Anywhere</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mt-6 max-w-2xl mx-auto lg:mx-0">
                A flexible, affordable, and accessible way for international students to achieve a U.S. high school diploma online — study anytime, anywhere, at your own pace.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                <Link href="/about/contact" className="btn bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 btn-lg group">Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                <Link href="#benefits" className="btn-ghost btn-lg">Learn More</Link>
              </div>
              
              {/* Mobile Hero Image - In flow with overlap */}
              <div className="lg:hidden mt-12 -mb-32 relative z-20 flex justify-center">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img src="/images/virtual-hero.jpg" alt="Student learning online" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/virtual-hero.jpg"
                    alt="Student learning online"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">100% Online</div>
                      <div className="text-sm text-neutral-600">Study Anywhere</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">U.S. Diploma</div>
                      <div className="text-sm text-neutral-600">Accredited</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="section bg-neutral-50 pt-24 lg:pt-16">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">Who Is This For?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">Perfect For Many Paths</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: GraduationCap, title: 'Former Exchange Students', desc: 'J1 or F1 students who did not complete a U.S. diploma', color: 'bg-indigo-100 text-indigo-600' },
              { icon: Globe, title: 'International Students', desc: 'Students who want a U.S. diploma without traveling abroad', color: 'bg-secondary-100 text-secondary-600' },
              { icon: Users, title: 'Mobile Lifestyles', desc: 'Athletes, performers, and travelers not tied to traditional school', color: 'bg-accent-100 text-accent-600' },
              { icon: School, title: 'Schools Abroad', desc: 'Offer a dual diploma program (U.S. + local diploma)', color: 'bg-indigo-100 text-indigo-600' },
              { icon: BookOpen, title: 'Individual Students', desc: 'Anyone seeking a cost-effective path to a U.S. credential', color: 'bg-secondary-100 text-secondary-600' },
              { icon: DollarSign, title: 'Budget-Conscious', desc: 'High-value U.S. diploma at a fraction of study abroad cost', color: 'bg-accent-100 text-accent-600' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="benefits" className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">Why Choose Our Program?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">Everything You Need to Succeed</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Clock, title: 'Flexible Learning', desc: 'Study anytime, anywhere, at your own pace. Courses and resources available 24/7.' },
              { icon: Calendar, title: 'Anytime Enrollment', desc: 'Year-round entry — no waiting for intake periods. Easy enrollment for individuals, groups, or schools.' },
              { icon: BookOpen, title: 'Comprehensive Curriculum', desc: 'Earn a U.S. diploma by completing 6 credits + graduation requirements. Wide range of courses available.' },
              { icon: GraduationCap, title: 'University Pathways', desc: 'Graduates accepted to universities in the U.S. and worldwide. Enhances global admissions opportunities.' },
              { icon: Users, title: 'Supportive Experience', desc: 'U.S.-based teachers dedicated to student success. Interactive, modern virtual learning platform.' },
              { icon: DollarSign, title: 'Affordable & Accessible', desc: 'High-value U.S. credential at a fraction of the cost of traditional study abroad programs.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-neutral-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS FOR DIFFERENT GROUPS */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">Benefits</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">For Students, Groups & Schools</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-soft text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Students</h3>
              <p className="text-neutral-600">Affordable, flexible pathway to a U.S. diploma that opens doors worldwide.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-soft text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Agencies & Groups</h3>
              <p className="text-neutral-600">Expand your offerings with an in-demand, low-cost program for your clients.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-soft text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <School className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Schools</h3>
              <p className="text-neutral-600">Offer dual diplomas without the expense of full study abroad programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-indigo-600">
        <div className="container-wide text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">Ready to Earn Your U.S. Diploma?</h2>
          <p className="text-indigo-100 text-lg max-w-2xl mx-auto mb-8">
            Contact us today for program details and to receive our Virtual High School Program brochure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about/contact" className="btn bg-white text-indigo-700 hover:bg-indigo-50 btn-lg group">
              Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
