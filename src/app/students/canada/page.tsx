'use client'

import Link from 'next/link'
import { ArrowRight, MapPin, CheckCircle2, Globe, BookOpen, Users, Clock, GraduationCap, Home, Snowflake, Sun, Calendar, School, Shield } from 'lucide-react'

const programs = [
  {
    title: 'High School Program',
    duration: '5 or 10 Months',
    description: 'Experience life in Canada with a full academic semester or year. Live with a welcoming Canadian host family and attend public or private schools.',
    features: ['Host family placement', 'Public or private schools', 'Full academic immersion', 'Cultural integration support'],
    color: 'bg-red-600',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    title: 'High School Experience',
    duration: '3-4 Months',
    description: 'A shorter immersion program perfect for students who want to experience Canadian education without a full-year commitment.',
    features: ['Shorter commitment', 'Same quality experience', 'Host family stay', 'School enrollment'],
    color: 'bg-red-500',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    title: 'Summer & Winter Camps',
    duration: '4-6 Weeks',
    description: 'Join exciting camp experiences tailored to various interests. Learn, explore, and make friends from around the world.',
    features: ['Adventure activities', 'Language learning', 'Cultural experiences', 'Supervised programs'],
    color: 'bg-red-400',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
  },
]

const benefits = [
  {
    icon: GraduationCap,
    title: 'World-Class Education',
    description: 'Canada consistently ranks among the top countries for education quality worldwide.',
  },
  {
    icon: Shield,
    title: 'Safe & Welcoming',
    description: 'Known for its safety, diversity, and welcoming culture for international students.',
  },
  {
    icon: Globe,
    title: 'Bilingual Advantage',
    description: 'Opportunity to learn in English or French-speaking regions across the country.',
  },
  {
    icon: Home,
    title: 'Host Family Experience',
    description: 'Live with carefully selected Canadian families for true cultural immersion.',
  },
  {
    icon: MapPin,
    title: 'Beautiful Locations',
    description: 'Study in diverse settings from vibrant cities to stunning natural landscapes.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Comprehensive support from enrollment through your entire program.',
  },
]

export default function CanadaPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 hero-gradient overflow-visible">
        {/* Mobile Hero Background */}
        <div className="absolute inset-0 lg:hidden">
          <img src="/images/canada-hero.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/90 to-primary-950" />
        </div>
        <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-dots-pattern" /></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-red-500/10 rounded-full blur-3xl floating" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full text-red-300 text-sm mb-6">
                <MapPin className="w-4 h-4" />
                Study in Canada
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
                Experience Canada
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-accent-400 pb-2">Your Adventure Awaits</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mt-6 max-w-2xl mx-auto lg:mx-0">
                Discover world-class education in one of the safest, most welcoming countries on earth. High school programs, short-term experiences, and summer camps across all Canadian provinces.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                <Link href="/about/contact" className="btn bg-red-600 text-white hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5 btn-lg group">Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                <Link href="#programs" className="btn-ghost btn-lg">View Programs</Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/canada-hero.jpg"
                    alt="Students in Canada"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                      <School className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">10+ Districts</div>
                      <div className="text-sm text-neutral-600">Across Canada</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">All Provinces</div>
                      <div className="text-sm text-neutral-600">Coast to Coast</div>
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
            <img src="/images/canada-hero.jpg" alt="Students in Canada" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="section bg-neutral-50 pt-36 sm:pt-40 lg:pt-16">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">Our Programs</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">Choose Your Canadian Experience</h2>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">Programs for students aged 14-18, designed to match your goals and timeline.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {programs.map((program) => (
              <div key={program.title} className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <div className={`${program.color} p-6 text-white`}>
                  <h3 className="text-xl font-bold mb-1">{program.title}</h3>
                  <p className="text-white/80 text-sm">{program.duration}</p>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600 text-sm mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CANADA */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">Why Canada?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">A World-Class Destination</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">{benefit.title}</h3>
                  <p className="text-neutral-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">What&apos;s Included</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display mb-6">Comprehensive Support</h2>
              <div className="space-y-4">
                {[
                  { title: 'Personalized Program Matching', desc: 'We help you find the perfect program tailored to your needs, interests, and language goals.' },
                  { title: 'Host Family Placement', desc: 'Carefully selected Canadian families provide a welcoming home away from home.' },
                  { title: 'School Enrollment', desc: 'Placement in quality public or private schools matched to your academic level.' },
                  { title: 'Pre-Departure Training', desc: 'Comprehensive online training on Canadian schools, host families, and cultural transitions.' },
                  { title: 'Ongoing Support', desc: 'Dedicated support throughout your program from our experienced team.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-neutral-900">{item.title}</h4>
                      <p className="text-neutral-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated">
                <img 
                  src="/images/canada-students.jpg" 
                  alt="Students enjoying Canada"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR AGENTS */}
      <section className="section bg-primary-950">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-red-500/20 text-red-300 rounded-full text-sm font-medium mb-4">For Partner Agencies</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">Expand Your Offerings with Canada</h2>
              <p className="text-neutral-300 mb-6">
                Partner with Xperience Education to offer Canadian programs to your students. We work with agencies worldwide to provide seamless access to top Canadian educational experiences.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Access to 10+ school districts across Canada',
                  'Competitive commission structure',
                  'Marketing materials and training provided',
                  'Dedicated partner support team',
                  'Streamlined enrollment process',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-neutral-200">
                    <CheckCircle2 className="w-5 h-5 text-red-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about/contact" className="btn bg-red-600 text-white hover:bg-red-700 btn-lg group">
                Become a Partner <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-elevated">
                <img 
                  src="/images/canada-partner.jpg" 
                  alt="Partner with us"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-red-600">
        <div className="container-wide text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">Ready to Study in Canada?</h2>
          <p className="text-red-100 text-lg max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our Canadian programs and find the perfect fit for your educational goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about/contact" className="btn bg-white text-red-700 hover:bg-red-50 btn-lg group">
              Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
