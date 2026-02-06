'use client'

import Link from 'next/link'
import { ArrowRight, GraduationCap, CheckCircle2, BookOpen, Home, Shield, Globe, Star, Calendar, DollarSign } from 'lucide-react'

const highlights = [
  { title: 'US Diploma', description: 'Graduate with an accredited American high school diploma', icon: GraduationCap },
  { title: 'University Pathway', description: 'Direct pathway to US colleges and universities', icon: BookOpen },
  { title: 'Public or Private School', description: 'Attend top Public or Private Day Schools or Boarding Schools', icon: Home },
  { title: 'Local Support', description: 'Local area support from dedicated program coordinators', icon: Shield },
]

const faqs = [
  { q: 'What is an F1 student visa?', a: 'The F1 visa is a non-immigrant student visa that allows international students to attend accredited US academic institutions, including private high schools. It allows multi-year enrollment and pathways to university.' },
  { q: 'How long can I study on an F1 visa?', a: 'Students can enroll for multiple years, typically completing their full high school education in the US. Many students start in 9th or 10th grade and graduate with a US diploma.' },
  { q: 'What are the costs?', a: 'Tuition varies by school, typically ranging from $15,000 to $60,000+ per year. This includes tuition, room and board (for boarding schools), and program fees. Financial aid may be available.' },
  { q: 'Can I choose my school?', a: 'Yes! Unlike J1 programs, F1 students can choose their specific school. We help match you with schools that fit your academic goals, interests, location preferences, and budget.' },
  { q: 'Do I need to take an English test?', a: 'Most schools require an English proficiency test such as TOEFL, IELTS, or ELTiS. Some schools also require the SSAT. We help you prepare for these tests and find schools that match your level.' },
  { q: 'What happens after I graduate?', a: 'F1 graduates can apply to US colleges and universities. Having a US diploma and transcript is a significant advantage in university admissions. We can also connect you with college counseling services.' },
]

export default function F1VisaPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-dots-pattern" /></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl floating" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-500/20 backdrop-blur-sm rounded-full text-secondary-300 text-sm mb-6">
                <GraduationCap className="w-4 h-4" />
                F1 Student Visa Program
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
                Earn Your US
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-accent-400">High School Diploma</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mt-6 max-w-2xl">
                Attend an American Private, Public, or Boarding School. Build your path to US universities with a world-class education and full academic support.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/about/contact" className="btn-secondary btn-lg group">Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                <Link href="#faqs" className="btn-ghost btn-lg">View FAQs</Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/High School Building 1.png"
                    alt="American high school campus"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary-600 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">US Diploma</div>
                      <div className="text-sm text-neutral-600">Accredited Education</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">200+</div>
                      <div className="text-sm text-neutral-600">Partner Schools</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">Program Highlights</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">Why Choose F1?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mb-4"><item.icon className="w-6 h-6 text-secondary-600" /></div>
                <h3 className="font-bold text-neutral-900">{item.title}</h3>
                <p className="text-neutral-600 text-sm mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">Step by Step</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">How It Works</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { step: '01', title: 'Inquire & Consult', desc: 'Inquire and schedule a consultation. We assess your goals, academic level, and preferences.' },
              { step: '02', title: 'Apply', desc: 'Complete our application and apply to the school of your choice.' },
              { step: '03', title: 'School Matching', desc: 'We match you with schools that fit your academic profile, interests, location preferences, and budget.' },
              { step: '04', title: 'Acceptance & Visa', desc: 'Once accepted, we guide you through the I-20 process and F1 visa application with full support.' },
              { step: '05', title: 'Pre-Departure Prep', desc: 'Orientation, travel planning, health insurance, and everything you need for a smooth transition.' },
              { step: '06', title: 'Arrive & Thrive', desc: 'Welcome to America! Our coordinators provide ongoing support throughout your entire program.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-primary-900 text-white rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                  <p className="text-neutral-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="section bg-primary-950 text-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary-500/20 text-secondary-400 rounded-full text-sm font-medium mb-4">All Inclusive</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display">What&apos;s <span className="text-secondary-400">Included</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {['School placement & matching', 'I-20 & visa guidance', 'Airport pickup & orientation', 'Health insurance coordination', 'Academic monitoring & reports', '24/7 emergency support', 'Host family or dorm placement', 'College counseling referrals', 'Ongoing coordinator support'].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                <CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <span className="text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section id="faqs" className="section bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">FAQs</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">Common Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-soft">
                <h3 className="font-bold text-neutral-900">{faq.q}</h3>
                <p className="text-neutral-600 mt-2">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section animated-gradient">
        <div className="container-wide text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display max-w-3xl mx-auto">Start Your F1 Visa Application</h2>
          <p className="text-lg text-white/80 mt-4 max-w-2xl mx-auto">Join thousands of students who&apos;ve earned their US diploma through Xperience Education.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/about/contact" className="btn bg-white text-primary-900 hover:bg-neutral-100 btn-lg">Apply Now <ArrowRight className="w-5 h-5" /></Link>
            <Link href="/about/contact" className="btn-ghost btn-lg">Talk to an Advisor</Link>
          </div>
        </div>
      </section>
    </>
  )
}
