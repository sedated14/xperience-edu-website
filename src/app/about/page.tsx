'use client'

import Link from 'next/link'
import { ArrowRight, Globe, Heart, Shield, Users, Award, Target, CheckCircle2 } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 hero-gradient overflow-hidden">
        {/* Mobile Hero Background */}
        <div className="absolute inset-0 lg:hidden">
          <img src="/images/about-hero.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/90 to-primary-950" />
        </div>
        <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-dots-pattern" /></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl floating" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-500/20 backdrop-blur-sm rounded-full text-secondary-300 text-sm mb-6">
                <Globe className="w-4 h-4" />
                About Xperience Education
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
                A Team Dedicated
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-accent-400 pb-2">to Changing Lives</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mt-6 max-w-2xl mx-auto lg:mx-0">
                At Xperience Education, we are dedicated to fostering global education opportunities for international students.
              </p>
              
              {/* Mobile Hero Image - In flow with overlap */}
              <div className="lg:hidden mt-12 flex justify-center">
                <div className="relative z-30 w-56 h-56 sm:w-64 sm:h-64 rounded-3xl translate-y-16 overflow-hidden shadow-2xl border-4 border-white">
                  <img src="/images/about-hero.jpg" alt="Xperience Education team" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/about-hero.jpg"
                    alt="Xperience Education team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary-600 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">Passionate</div>
                      <div className="text-sm text-neutral-600">Team</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">Global</div>
                      <div className="text-sm text-neutral-600">Impact</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section bg-white relative z-0 pt-20 sm:pt-24 lg:pt-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">Built on a Passion for Education</h2>
              <p className="text-lg text-neutral-600 mt-4">At Xperience Education, we are dedicated to fostering global education opportunities for international students. As a leading international education organization, we offer a range of programs, including F1 High School Programs, J1 High School Programs, Short-Term Exchanges, and Summer Programs designed to provide students with enriching academic and cultural experiences.</p>
              <p className="text-neutral-600 mt-4">With over 15 years of collective experience in the international education industry, our team is committed to ensuring a smooth and successful journey for students. We work directly with students as well as sending organizations and independent recruitment representatives to facilitate seamless placement and support.</p>
            </div>
            <div>
              <div className="relative mb-8">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-elevated">
                  <img 
                    src="/images/team-photo.jpg" 
                    alt="Xperience Education team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-neutral-600">Our strong partnerships with schools, sponsoring organizations, host families, and service providers allow us to create a fully supportive environment, ensuring that each student has the resources and guidance they need to thrive academically and personally.</p>
              <p className="text-neutral-600 mt-4">At Xperience Education, we believe in the power of international education to shape future leaders and build meaningful global connections. Whether you&apos;re a student seeking an enriching experience abroad or a partner organization looking to collaborate, we are here to support you every step of the way.</p>
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
              <div className="text-neutral-400 mt-2">Years Combined Team Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-accent-400">100K+</div>
              <div className="text-neutral-400 mt-2">Int&apos;l Students in US Yearly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-secondary-400">200+</div>
              <div className="text-neutral-400 mt-2">School Options</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-accent-400">Proven</div>
              <div className="text-neutral-400 mt-2">Sponsor Networks</div>
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
