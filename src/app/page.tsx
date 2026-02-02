'use client'

import Link from 'next/link'
import { 
  ArrowRight, 
  GraduationCap, 
  Home,
  Building2, 
  Share2, 
  Briefcase,
  Star,
  Globe,
  Users,
  Award,
  CheckCircle2,
  Play
} from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* HERO — Dark charcoal matching logo */}
      <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-dots-pattern" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl floating-delayed" />

        <div className="container-wide relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6 animate-fade-down">
                <Globe className="w-4 h-4" />
                Connecting Students to Their American Dream
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight font-display animate-fade-up">
                Your Gateway to
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 via-secondary-300 to-accent-400">
                  US High School Education
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mt-6 max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-200">
                F1 Visa, J1 Exchange, Short-Term, and Summer Programs. 
                Start your international education journey with a trusted partner.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8 animate-fade-up animation-delay-400">
                <Link href="/students" className="btn-secondary btn-lg group">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/about" className="btn-ghost btn-lg">
                  <Play className="w-5 h-5" />
                  Watch Our Story
                </Link>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10 animate-fade-up animation-delay-600">
                <p className="text-white/60 text-sm mb-4">Trusted by families worldwide</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">4.9/5</div>
                    <div className="text-sm text-white/60">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-sm text-white/60">Reviews</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-sm text-white/60">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block animate-fade-in animation-delay-400">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* REPLACE: Add your hero image to public/images/hero-students.jpg */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/hero-students.jpg"
                    alt="International students on an American campus"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-elevated animate-fade-up animation-delay-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary-600 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">5,000+</div>
                      <div className="text-sm text-neutral-600">Students Placed</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-elevated animate-fade-up animation-delay-1000">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">50+</div>
                      <div className="text-sm text-neutral-600">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* FIVE PILLARS BENTO GRID */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">Our Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 font-display">Your Journey Starts Here</h2>
            <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">Whether you&apos;re a student, host family, school, or partner — we have a path designed just for you.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Students — Blue hover */}
            <Link href="/students" className="col-span-1 sm:col-span-2 row-span-2 group relative overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-600 to-secondary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-secondary-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-4 transition-colors"><GraduationCap className="w-7 h-7 text-secondary-600 group-hover:text-white transition-colors" /></div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-white transition-colors">Students</h3>
                <p className="text-neutral-600 group-hover:text-white/80 mt-2 transition-colors">F1 Visa, J1 Exchange, Short-Term &amp; Summer programs for international students</p>
                <div className="mt-4 flex items-center text-secondary-600 group-hover:text-white font-medium transition-colors">Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" /></div>
              </div>
            </Link>
            {/* Host Families — Gold hover */}
            <Link href="/host-families" className="col-span-1 sm:col-span-2 group relative overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-accent-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-4 transition-colors"><Home className="w-7 h-7 text-accent-600 group-hover:text-white transition-colors" /></div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-white transition-colors">Host Families</h3>
                <p className="text-neutral-600 group-hover:text-white/80 mt-2 transition-colors">Open your home to an international student</p>
                <div className="mt-4 flex items-center text-accent-600 group-hover:text-white font-medium transition-colors">Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" /></div>
              </div>
            </Link>
            {/* Schools — Charcoal hover */}
            <Link href="/schools" className="group relative overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-4 transition-colors"><Building2 className="w-7 h-7 text-primary-700 group-hover:text-white transition-colors" /></div>
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-white transition-colors">Schools</h3>
                <p className="text-neutral-600 group-hover:text-white/80 mt-2 transition-colors">Partner with us to welcome international students</p>
                <div className="mt-4 flex items-center text-primary-700 group-hover:text-white font-medium transition-colors">Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" /></div>
              </div>
            </Link>
            {/* Partners — Blue hover */}
            <Link href="/partners" className="group relative overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-500 to-secondary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-secondary-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-4 transition-colors"><Share2 className="w-7 h-7 text-secondary-600 group-hover:text-white transition-colors" /></div>
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-white transition-colors">Partners</h3>
                <p className="text-neutral-600 group-hover:text-white/80 mt-2 transition-colors">Join our global network of education agencies</p>
                <div className="mt-4 flex items-center text-secondary-600 group-hover:text-white font-medium transition-colors">Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" /></div>
              </div>
            </Link>
            {/* Careers — Charcoal hover */}
            <Link href="/careers" className="col-span-1 sm:col-span-2 group relative overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-4 transition-colors"><Briefcase className="w-7 h-7 text-primary-700 group-hover:text-white transition-colors" /></div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-white transition-colors">Careers</h3>
                <p className="text-neutral-600 group-hover:text-white/80 mt-2 transition-colors">Work with us as an independent agent</p>
                <div className="mt-4 flex items-center text-primary-700 group-hover:text-white font-medium transition-colors">Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" /></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS — Blue accent numbers */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            <div className="text-center group">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-600 transition-colors"><Award className="w-8 h-8 text-secondary-600 group-hover:text-white transition-colors" /></div>
              <div className="stat-number text-primary-900">15+</div>
              <div className="text-neutral-600 mt-2">Years of Experience</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-600 transition-colors"><GraduationCap className="w-8 h-8 text-secondary-600 group-hover:text-white transition-colors" /></div>
              <div className="stat-number text-primary-900">5,000+</div>
              <div className="text-neutral-600 mt-2">Students Placed</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-600 transition-colors"><Building2 className="w-8 h-8 text-secondary-600 group-hover:text-white transition-colors" /></div>
              <div className="stat-number text-primary-900">200+</div>
              <div className="text-neutral-600 mt-2">Partner Schools</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-600 transition-colors"><Globe className="w-8 h-8 text-secondary-600 group-hover:text-white transition-colors" /></div>
              <div className="stat-number text-primary-900">50+</div>
              <div className="text-neutral-600 mt-2">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — Dark section */}
      <section className="section bg-primary-950 text-white overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-secondary-500/20 text-secondary-400 rounded-full text-sm font-medium mb-4">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">Excellence in International <span className="text-secondary-400">Education</span></h2>
              <p className="text-lg text-neutral-400 mt-4">With over 15 years of experience, we&apos;ve helped thousands of students achieve their dreams of studying in America.</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" /><span className="text-neutral-300">Personalized school matching</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" /><span className="text-neutral-300">Comprehensive visa support</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" /><span className="text-neutral-300">Dedicated program coordinators</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" /><span className="text-neutral-300">24/7 emergency assistance</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" /><span className="text-neutral-300">Pre-departure orientation</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" /><span className="text-neutral-300">Ongoing academic monitoring</span></div>
              </div>
              <div className="mt-8"><Link href="/about" className="btn-secondary btn-lg">Learn More About Us <ArrowRight className="w-5 h-5" /></Link></div>
            </div>
            <div className="relative">
              {/* REPLACE: Add your video or image to public/images/about-video.jpg */}
              <div className="aspect-video bg-gradient-to-br from-primary-800 to-secondary-900 rounded-3xl flex items-center justify-center">
                <div className="text-center text-white/80"><Play className="w-16 h-16 mx-auto mb-4" /><p>public/images/about-video.jpg</p></div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — Gold stars */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">Success Stories</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 font-display">What Our Community Says</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-elevated transition-all duration-300">
              <div className="flex gap-1 mb-4"><Star className="w-5 h-5 fill-accent-400 text-accent-400" /><Star className="w-5 h-5 fill-accent-400 text-accent-400" /><Star className="w-5 h-5 fill-accent-400 text-accent-400" /><Star className="w-5 h-5 fill-accent-400 text-accent-400" /><Star className="w-5 h-5 fill-accent-400 text-accent-400" /></div>
              <p className="text-neutral-700 mb-6">&quot;Xperience Education made my dream of studying in America come true. The support from day one was incredible, and my host family became my second family.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center"><Users className="w-6 h-6 text-secondary-500" /></div>
                <div><div className="font-semibold text-neutral-900">Sofia Martinez</div><div className="text-sm text-neutral-500">F1 Student from Mexico</div></div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-elevated transition-all duration-300">
              <div className="flex gap-1 mb-4"><Star className="w-5 h-5 fill-accent-400 text-accent-400" /><Star className="w-5 h-5 fill-accent-400 text-accent-400" /><Star className="w-5 h-5 fill-accent-400 text-accent-400" /><Star className="w-5 h-5 fill-accent-400 text-accent-400" /><Star className="w-5 h-5 fill-accent-400 text-accent-400" /></div>
              <p className="text-neutral-700 mb-6">&quot;Hosting exchange students has been one of the most rewarding experiences for our family. We&apos;ve learned so much about different cultures.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center"><Users className="w-6 h-6 text-accent-500" /></div>
                <div><div className="font-semibold text-neutral-900">The Johnson Family</div><div className="text-sm text-neutral-500">Host Family, Texas</div></div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-elevated transition-all duration-300">
              <div className="flex gap-1 mb-4"><Star className="w-5 h-5 fill-accent-400 text-accent-400" /><Star className="w-5 h-5 fill-accent-400 text-accent-400" /><Star className="w-5 h-5 fill-accent-400 text-accent-400" /><Star className="w-5 h-5 fill-accent-400 text-accent-400" /><Star className="w-5 h-5 fill-accent-400 text-accent-400" /></div>
              <p className="text-neutral-700 mb-6">&quot;As a partner agency, we&apos;ve sent over 100 students through Xperience Edu. Their professionalism and support are unmatched in the industry.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center"><Users className="w-6 h-6 text-primary-500" /></div>
                <div><div className="font-semibold text-neutral-900">Chen Wei</div><div className="text-sm text-neutral-500">Partner Agency, China</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Animated charcoal/blue gradient */}
      <section className="section animated-gradient">
        <div className="container-wide text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display max-w-3xl mx-auto">Ready to Start Your International Education Journey?</h2>
          <p className="text-lg sm:text-xl text-white/80 mt-4 max-w-2xl mx-auto">Take the first step toward your American education experience. Our team is ready to guide you every step of the way.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/students" className="btn bg-white text-primary-900 hover:bg-neutral-100 btn-lg">Apply Now <ArrowRight className="w-5 h-5" /></Link>
            <Link href="/about/contact" className="btn-ghost btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
