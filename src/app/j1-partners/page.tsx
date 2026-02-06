'use client'

import { useState } from 'react'
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Users, 
  Shield, 
  FileCheck,
  Headphones,
  TrendingUp,
  Calendar,
  GraduationCap,
  Mail,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

const benefits = [
  {
    icon: FileCheck,
    title: 'J1 Visa Access',
    description: 'Secure DS-2019 allocations through our designated U.S. Department of State sponsor — no more waiting lists or rejections.',
  },
  {
    icon: Users,
    title: 'Built for Growing Agencies',
    description: 'Whether you\'re placing 3 students or 30, our Small Clients Division is designed specifically for agencies like yours.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Your own account manager plus full operational support — from application processing to student management.',
  },
  {
    icon: GraduationCap,
    title: 'Training & Development',
    description: 'Access training resources, compliance guidance, and best practices to grow your J1 program confidently.',
  },
  {
    icon: Shield,
    title: 'DOS & CSIET Compliant',
    description: 'Rest easy knowing all placements meet U.S. Department of State regulations and CSIET standards.',
  },
  {
    icon: TrendingUp,
    title: 'Scale at Your Pace',
    description: 'Start small and grow your quota as you build experience. No pressure, no minimums to start.',
  },
]

const timeline = [
  { step: '1', title: 'Apply to Partner', description: 'Submit your agency information and we\'ll schedule a call to discuss your needs.' },
  { step: '2', title: 'Sign Agreement', description: 'Review and sign the partnership agreement. Receive your initial quota allocation.' },
  { step: '3', title: 'Submit Students', description: 'Use our online system to submit student applications with all required documents.' },
  { step: '4', title: 'Placement & Support', description: 'Students will receive host family matching, school placement and ongoing support throughout the program.' },
]

const faqs = [
  {
    q: 'What is the minimum number of students required?',
    a: 'There is no minimum to get started. Our Small Clients Division is specifically designed for agencies placing anywhere from 1 to 50+ students per year. You can start with as few as 3 students and grow from there.',
  },
  {
    q: 'How do I get a visa allocation (quota)?',
    a: 'Once you sign a partnership agreement, we assign an initial quota based on your projected student numbers. Quotas are drawn from our allocation with the designated J1 sponsor and are distributed on a first-come, first-served basis.',
  },
  {
    q: 'What are the student eligibility requirements?',
    a: 'Students must be 15-18.5 years old, currently in secondary school, have a minimum 2.0 GPA, and achieve ELTiS Level 4 or 5. They must also be in good physical and emotional health and have strong English skills.',
  },
  {
    q: 'When are applications due?',
    a: 'For Fall programs: March 1. For Spring programs: October 1. Earlier submissions receive priority placement.',
  },
  {
    q: 'What support do you provide during the program?',
    a: 'Our U.S.-based team provides local coordinators, monthly check-ins with students and host families, 24/7 emergency support, and handles any issues that arise during the program.',
  },
  {
    q: 'Is insurance included?',
    a: 'Yes, comprehensive health and accident insurance meeting DOS and CSIET standards is included in the program fee for the duration of the program.',
  },
]

export default function J1PartnersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    agencyName: '', country: '', contactName: '', email: '', phone: '', studentVolume: '', message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! We\'ll be in touch within 24 hours to schedule a call.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-neutral-100">
        <div className="container-wide py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold font-display text-primary-900">
              Xperience<span className="text-secondary-500"> Education</span>
            </span>
          </div>
          <a href="#apply" className="btn-secondary text-sm">
            Apply to Partner <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* ============ HERO WITH BACKGROUND IMAGE ============ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/Students.png" 
            alt="International students in America"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/70 to-primary-950/40" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full text-emerald-300 text-sm mb-6">
              <Globe className="w-4 h-4" />
              Fall 2026 & Spring 2027 Now Open
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display leading-tight">
              Access J1 Visa Allocations
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-secondary-400">
                For Your Students
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mt-6 max-w-2xl">
              Partner with Xperience Education to place your students in American high schools. 
              We provide visa sponsorship, host family placement, and full program support — 
              designed specifically for new, small, and growing agencies.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#apply" className="btn bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-0.5 btn-lg group">
                Become a Partner <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#how-it-works" className="btn-ghost btn-lg">
                How It Works
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-6 text-white/60 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  Official Partner of a DOS Designated & CSIET Listed Sponsor
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-400" />
                  15+ Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROBLEM / SOLUTION ============ */}
      <section className="py-16 bg-neutral-50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">The Challenge</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">
              Getting J1 Visa Access Shouldn&apos;t Be This Hard
            </h2>
            <p className="text-lg text-neutral-600 mt-4">
              Large sponsors often overlook smaller agencies. Quota minimums are too high. 
              Support is limited. You&apos;re left navigating complex U.S. regulations alone.
            </p>
            <p className="text-lg text-neutral-900 font-medium mt-6">
              That&apos;s exactly why we created our Small Clients Division.
            </p>
          </div>
        </div>
      </section>

      {/* ============ WHAT IS J-1 PROGRAM - TEXT LEFT, IMAGE RIGHT ============ */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Left */}
              <div>
                <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">About the Program</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">
                  What is the J-1 High School Program?
                </h2>
                <p className="text-lg text-neutral-600 mt-4">
                  The J-1 High School Exchange Program is a cultural exchange initiative sponsored by the U.S. government, 
                  allowing international students to attend a public high school in the U.S. for up to one academic year.
                </p>
                
                <div className="mt-8 space-y-3">
                  <p className="font-semibold text-neutral-900">This program offers students the opportunity to:</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Experience American education and culture firsthand</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Improve English language skills in an immersive environment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Live with a carefully selected host family</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Participate in school activities, sports, and community events</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Build lifelong friendships and global connections</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Image Right */}
              <div className="relative">
                <img 
                  src="/images/High School Building 1.png" 
                  alt="American high school campus"
                  className="rounded-3xl shadow-elevated w-full"
                />
                {/* Optional floating accent */}
                <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white rounded-2xl p-4 shadow-lg hidden sm:block">
                  <div className="text-2xl font-bold">1 Year</div>
                  <div className="text-emerald-100 text-sm">Cultural Exchange</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW WE HELP ============ */}
      <section className="py-16 bg-neutral-50">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">Our Role</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">
                  How We Help
                </h2>
                <p className="text-lg text-neutral-600 mt-4">
                  At Xperience Education, we work closely with U.S. Department of State-designated J-1 visa sponsoring 
                  organizations to assist international students in experiencing high school life in the United States.
                </p>
                <p className="text-neutral-600 mt-4">
                  Our team supports students throughout the process, from application to placement and beyond, 
                  ensuring a smooth and enriching cultural exchange experience.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-soft">
                <h3 className="font-bold text-neutral-900 mb-6">We work alongside official J-1 visa sponsors to:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-neutral-700">Assist students in the application and placement process</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-neutral-700">Help ensure compliance with U.S. Department of State regulations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-neutral-700">Provide ongoing support to students, host families, and schools</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-neutral-700">Work with sending organizations to make the process seamless</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BANNER IMAGE ============ */}
      <section className="relative h-64 md:h-80">
        <img 
          src="/images/lockers.png" 
          alt="High school hallway with lockers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/70 via-primary-950/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-wide">
            <div className="max-w-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-white font-display">The Authentic American High School Experience</h3>
              <p className="text-white/80 mt-3">From lockers and lunch halls to sports games and prom — your students will experience it all.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROGRAM RULES & REQUIREMENTS ============ */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">Guidelines</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">
                Program Rules & Requirements
              </h2>
              <p className="text-lg text-neutral-600 mt-4">
                To ensure a successful and compliant exchange experience, students participating in the J-1 High School Program must follow these key guidelines:
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-neutral-50 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">Duration</h4>
                    <p className="text-neutral-600 text-sm mt-1">Limited to one academic year — students cannot extend or repeat under J-1 status.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-50 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">Public School Enrollment</h4>
                    <p className="text-neutral-600 text-sm mt-1">Students are placed in public high schools across the U.S. and cannot choose their school location.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-50 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">Host Family Living</h4>
                    <p className="text-neutral-600 text-sm mt-1">Students live with an approved host family who volunteers to provide a safe and welcoming home.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-50 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">Academic Performance</h4>
                    <p className="text-neutral-600 text-sm mt-1">Students must maintain satisfactory grades and meet attendance requirements.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-50 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">Age Requirement</h4>
                    <p className="text-neutral-600 text-sm mt-1">Students must typically be between 15-18 years old at the start of the program.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-50 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">Cultural Exchange Focus</h4>
                    <p className="text-neutral-600 text-sm mt-1">The primary goal is cultural exchange — students cannot work and must engage in school and community.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BENEFITS ============ */}
      <section className="py-16 bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">Why Partner With Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">Built for Agencies Like Yours</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-2xl p-6 hover:shadow-soft transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-neutral-900">{benefit.title}</h3>
                <p className="text-neutral-600 text-sm mt-2">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how-it-works" className="py-16 bg-primary-950 text-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-4">Simple Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display">How It <span className="text-emerald-400">Works</span></h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {timeline.map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-neutral-400 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOST FAMILY IMAGE BANNER ============ */}
      <section className="relative h-80 md:h-96">
        <img 
          src="/images/modern home.png" 
          alt="American host family home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container-wide">
            <h3 className="text-2xl md:text-3xl font-bold text-white font-display">Quality Host Families</h3>
            <p className="text-white/80 mt-2 max-w-xl">
              Every student is matched with a carefully vetted American host family, providing a safe and welcoming home.
            </p>
          </div>
        </div>
      </section>

      {/* ============ KEY DEADLINES ============ */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">Important Dates</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">Key Deadlines</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary-50 rounded-3xl p-8 border-2 border-secondary-100">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-8 h-8 text-secondary-600" />
                  <h3 className="text-xl font-bold text-neutral-900">Fall 2026</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Application Deadline</span>
                    <span className="font-semibold text-neutral-900">March 1, 2026</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Program Starts</span>
                    <span className="font-semibold text-neutral-900">August 2026</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Deposit Due</span>
                    <span className="font-semibold text-neutral-900">Upon Acceptance</span>
                  </div>
                </div>
              </div>
              <div className="bg-emerald-50 rounded-3xl p-8 border-2 border-emerald-100">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-8 h-8 text-emerald-600" />
                  <h3 className="text-xl font-bold text-neutral-900">Spring 2027</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Application Deadline</span>
                    <span className="font-semibold text-neutral-900">October 1, 2026</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Program Starts</span>
                    <span className="font-semibold text-neutral-900">January 2027</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Deposit Due</span>
                    <span className="font-semibold text-neutral-900">Upon Acceptance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQs ============ */}
      <section className="py-16 bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">FAQs</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">Common Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-soft overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-neutral-900 pr-4">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-neutral-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ APPLICATION FORM ============ */}
      <section id="apply" className="section bg-primary-950 text-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-4">Get Started</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display">Apply to Become a <span className="text-emerald-400">Partner</span></h2>
              <p className="text-neutral-400 mt-4">
                Fill out the form and we&apos;ll schedule a call to discuss your agency&apos;s needs, 
                answer your questions, and outline next steps.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-neutral-300">No minimum student requirements to start</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-neutral-300">Dedicated account manager assigned</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-neutral-300">Full training and onboarding provided</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-neutral-300">Response within 24 hours</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-neutral-400 text-sm mb-3">Prefer to reach out directly?</p>
                <a href="mailto:partners@xperienceedu.com" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
                  <Mail className="w-4 h-4" /> partners@xperienceedu.com
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 text-neutral-900">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Agency / Company Name *</label>
                  <input
                    type="text" required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Your agency name"
                    value={formData.agencyName}
                    onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Country *</label>
                  <input
                    type="text" required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Where is your agency located?"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Contact Name *</label>
                    <input
                      type="text" required
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Your name"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email *</label>
                    <input
                      type="email" required
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="you@agency.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Expected Students/Year *</label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      value={formData.studentVolume}
                      onChange={(e) => setFormData({ ...formData, studentVolume: e.target.value })}
                    >
                      <option value="">Select range</option>
                      <option value="1-5">1-5 students</option>
                      <option value="6-10">6-10 students</option>
                      <option value="11-25">11-25 students</option>
                      <option value="26-50">26-50 students</option>
                      <option value="50+">50+ students</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Tell us about your agency</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                    placeholder="How long have you been operating? What programs do you currently offer? Any specific questions?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="w-full btn bg-emerald-600 text-white hover:bg-emerald-700 btn-lg">
                  Submit Application <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-neutral-500 text-center">
                  By submitting, you agree to be contacted about partnership opportunities.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-primary-950 border-t border-white/10 py-8">
        <div className="container-wide text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Xperience Education LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
