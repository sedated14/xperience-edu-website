'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  Globe, 
  CheckCircle2,
  User,
  GraduationCap,
  Calendar,
  MessageSquare,
  Sparkles,
  ChevronDown,
  Phone,
  ArrowRight,
  ClipboardCheck
} from 'lucide-react'

// Grade options
const gradeOptions = [
  '5th Grade', '6th Grade', '7th Grade', '8th Grade', '9th Grade', 
  '10th Grade', '11th Grade', '12th Grade'
]

// Program options
const programOptions = [
  { id: 'f1', label: 'F1 High School Programs – USA', sublabel: 'Public Day, Private Day, Boarding' },
  { id: 'j1', label: 'J1 Exchange Program – USA', sublabel: '' },
  { id: 'shortterm', label: 'Short Term Programs – USA', sublabel: '' },
  { id: 'summer', label: 'Summer Programs – USA', sublabel: '' },
  { id: 'virtual', label: 'Virtual High School Program – USA', sublabel: '' },
  { id: 'canada', label: 'Canada High School Program', sublabel: '' },
]

// Duration options
const durationOptions = [
  { id: '2weeks-3months', label: '2 Weeks – 3 Months' },
  { id: 'semester', label: 'Semester' },
  { id: 'academic-year', label: 'Academic Year' },
  { id: 'calendar-year', label: 'Calendar Year' },
]

// Start date options
const startDateOptions = [
  'August/September 2025',
  'January/February 2026',
  'August/September 2026',
  'January/February 2027',
  'Flexible'
]

// Communication preferences
const commOptions = [
  { id: 'email', label: 'Email', icon: Mail },
  { id: 'whatsapp', label: 'WhatsApp / Phone', icon: Phone },
  { id: 'text', label: 'Text Message', icon: MessageSquare },
]

export default function StudentAssessmentPage() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    age: '',
    currentGrade: '',
    hasGraduated: '',
    englishLevel: [] as string[],
    gender: '',
    nationality: '',
    countryOfResidence: '',
    email: '',
    phone: '',
    whatsapp: '',
    interestedPrograms: [] as string[],
    programDuration: [] as string[],
    requestedGrade: '',
    seekingGraduation: '',
    desiredStartDate: '',
    preferredComm: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  // Handle checkbox arrays
  const handleCheckboxChange = (field: 'englishLevel' | 'interestedPrograms' | 'programDuration', value: string) => {
    setFormData(prev => {
      const currentValues = prev[field]
      if (currentValues.includes(value)) {
        return { ...prev, [field]: currentValues.filter(v => v !== value) }
      } else {
        return { ...prev, [field]: [...currentValues, value] }
      }
    })
  }

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // ============================================
    // IMPORTANT: Replace 'YOUR_FORM_ID' with your actual Formspree form ID
    // Get one free at https://formspree.io
    // ============================================
    const FORMSPREE_ID = 'YOUR_FORM_ID'

    try {
      // If Formspree ID is not configured, simulate success for testing
      if (FORMSPREE_ID === 'YOUR_FORM_ID') {
        // Simulate network delay for testing
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log('Form submitted (TEST MODE):', formData)
        setIsSubmitted(true)
        setFormData({
          firstName: '', middleName: '', lastName: '', age: '', currentGrade: '',
          hasGraduated: '', englishLevel: [], gender: '', nationality: '',
          countryOfResidence: '', email: '', phone: '', whatsapp: '',
          interestedPrograms: [], programDuration: [], requestedGrade: '',
          seekingGraduation: '', desiredStartDate: '', preferredComm: '',
        })
        return
      }

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'Student Assessment Profile',
          ...formData,
          englishLevel: formData.englishLevel.join(', '),
          interestedPrograms: formData.interestedPrograms.join(', '),
          programDuration: formData.programDuration.join(', '),
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          firstName: '', middleName: '', lastName: '', age: '', currentGrade: '',
          hasGraduated: '', englishLevel: [], gender: '', nationality: '',
          countryOfResidence: '', email: '', phone: '', whatsapp: '',
          interestedPrograms: [], programDuration: [], requestedGrade: '',
          seekingGraduation: '', desiredStartDate: '', preferredComm: '',
        })
      } else {
        setError('Something went wrong. Please try again or email us directly.')
      }
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Styled input component
  const inputClasses = (fieldName: string) => `
    w-full px-4 py-3.5 bg-white border-2 rounded-xl transition-all duration-300 outline-none
    ${focusedField === fieldName 
      ? 'border-secondary-500 shadow-lg shadow-secondary-500/20 scale-[1.01]' 
      : 'border-neutral-200 hover:border-neutral-300'
    }
  `

  const labelClasses = "block text-sm font-semibold text-neutral-700 mb-2"
  const requiredStar = <span className="text-red-500 ml-0.5">*</span>

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 hero-gradient overflow-hidden">
        {/* Mobile Hero Background */}
        <div className="absolute inset-0 lg:hidden">
          <img src="/images/contact-hero.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/90 to-primary-950" />
        </div>
        <div className="absolute inset-0 opacity-10"><div className="absolute inset-0 bg-dots-pattern" /></div>
        
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-500/20 backdrop-blur-sm rounded-full text-secondary-300 text-sm mb-6 animate-pulse">
                <ClipboardCheck className="w-4 h-4" />
                Start Your Application
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
                Student Assessment
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-accent-400 pb-2">Profile</span>
              </h1>
              <p className="text-lg text-white/80 mt-6 max-w-2xl mx-auto lg:mx-0">
                Complete your profile to help us match you with the perfect program and school. The more details you provide, the better we can serve you.
              </p>
              <a 
                href="#form" 
                className="inline-flex items-center gap-2 mt-8 btn-secondary btn-lg group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Start Assessment
              </a>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/contact-hero.jpg"
                    alt="Student consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-elevated animate-bounce-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary-600 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">24 Hour</div>
                      <div className="text-sm text-neutral-600">Response</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-elevated animate-bounce-slow animation-delay-500">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">200+</div>
                      <div className="text-sm text-neutral-600">Schools</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Overlapping Hero Image */}
      <div className="lg:hidden relative z-20 flex justify-center -mt-8 -mb-24">
        <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <img src="/images/contact-hero.jpg" alt="Student consultation" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* FORM SECTION */}
      <section id="form" className="section bg-gradient-to-b from-neutral-50 to-white pt-32 sm:pt-36 lg:pt-16 scroll-mt-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-neutral-100">
                {isSubmitted ? (
                  <div className="text-center py-16 animate-fade-in">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce-slow">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">Thank You for Your Inquiry!</h3>
                    <p className="text-neutral-600 max-w-md mx-auto">
                      A member of our team is reviewing the information you have submitted and will be in contact shortly. We&apos;ve also sent a confirmation to your email.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)} 
                      className="btn-secondary mt-8"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                <>
                  {/* Form Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl mb-4 shadow-lg">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-display">Student Assessment Form</h2>
                    <p className="text-neutral-600 mt-3 max-w-xl mx-auto text-sm sm:text-base">
                      Complete the form with as much information as possible. The more details you provide, the better we can determine which program and school would most closely fit your needs and desires. A representative will review your information and reach out soon.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {error && (
                      <div className="bg-red-50 text-red-600 px-5 py-4 rounded-xl text-sm border border-red-200 flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-red-500 font-bold">!</span>
                        </div>
                        {error}
                      </div>
                    )}

                  {/* ==================== ABOUT YOU ==================== */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-3 border-b border-neutral-200">
                      <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center">
                        <User className="w-5 h-5 text-secondary-600" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900">About You</h3>
                    </div>

                    {/* Name Fields */}
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <label className={labelClasses}>First Name {requiredStar}</label>
                        <input
                          type="text"
                          required
                          className={inputClasses('firstName')}
                          placeholder="First name"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          onFocus={() => setFocusedField('firstName')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Middle Name</label>
                        <input
                          type="text"
                          className={inputClasses('middleName')}
                          placeholder="Middle name"
                          value={formData.middleName}
                          onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
                          onFocus={() => setFocusedField('middleName')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Last Name {requiredStar}</label>
                        <input
                          type="text"
                          required
                          className={inputClasses('lastName')}
                          placeholder="Last name"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          onFocus={() => setFocusedField('lastName')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>
                    </div>

                    {/* Age & Grade */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClasses}>Age {requiredStar}</label>
                        <input
                          type="number"
                          required
                          min="10"
                          max="25"
                          className={inputClasses('age')}
                          placeholder="Your age"
                          value={formData.age}
                          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                          onFocus={() => setFocusedField('age')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Current Grade Level</label>
                        <div className="relative">
                          <select
                            className={`${inputClasses('currentGrade')} appearance-none cursor-pointer pr-10`}
                            value={formData.currentGrade}
                            onChange={(e) => setFormData({ ...formData, currentGrade: e.target.value, hasGraduated: '' })}
                            onFocus={() => setFocusedField('currentGrade')}
                            onBlur={() => setFocusedField(null)}
                          >
                            <option value="">Select grade</option>
                            {gradeOptions.map(grade => (
                              <option key={grade} value={grade}>{grade}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Conditional: 12th Grade Graduation Question */}
                    {formData.currentGrade === '12th Grade' && (
                      <div className="bg-secondary-50 rounded-xl p-4 border border-secondary-200 animate-fade-in">
                        <label className={labelClasses}>Have you graduated in your home country?</label>
                        <div className="flex gap-4 mt-2">
                          {['Yes', 'No'].map(option => (
                            <label 
                              key={option}
                              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                formData.hasGraduated === option 
                                  ? 'border-secondary-500 bg-secondary-100 text-secondary-700' 
                                  : 'border-neutral-200 hover:border-neutral-300 bg-white'
                              }`}
                            >
                              <input
                                type="radio"
                                name="hasGraduated"
                                value={option}
                                checked={formData.hasGraduated === option}
                                onChange={(e) => setFormData({ ...formData, hasGraduated: e.target.value })}
                                className="sr-only"
                              />
                              <span className="font-medium">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* English Level */}
                    <div>
                      <label className={labelClasses}>English Level {requiredStar}</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['Low', 'Intermediate', 'Fluent'].map(level => (
                          <label 
                            key={level}
                            className={`flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              formData.englishLevel.includes(level)
                                ? 'border-secondary-500 bg-secondary-50 text-secondary-700 shadow-md shadow-secondary-500/20 scale-[1.02]' 
                                : 'border-neutral-200 hover:border-neutral-300 bg-white hover:bg-neutral-50'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.englishLevel.includes(level)}
                              onChange={() => handleCheckboxChange('englishLevel', level)}
                              className="sr-only"
                            />
                            <span className="font-medium text-sm sm:text-base">{level}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Gender & Nationality */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClasses}>Gender</label>
                        <div className="relative">
                          <select
                            className={`${inputClasses('gender')} appearance-none cursor-pointer pr-10`}
                            value={formData.gender}
                            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                            onFocus={() => setFocusedField('gender')}
                            onBlur={() => setFocusedField(null)}
                          >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="prefer-not">Prefer not to say</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label className={labelClasses}>Nationality</label>
                        <input
                          type="text"
                          className={inputClasses('nationality')}
                          placeholder="Your nationality"
                          value={formData.nationality}
                          onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                          onFocus={() => setFocusedField('nationality')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>
                    </div>

                    {/* Country of Residence */}
                    <div>
                      <label className={labelClasses}>Country of Residence {requiredStar}</label>
                      <input
                        type="text"
                        required
                        className={inputClasses('countryOfResidence')}
                        placeholder="Where do you currently live?"
                        value={formData.countryOfResidence}
                        onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
                        onFocus={() => setFocusedField('countryOfResidence')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>

                    {/* Contact Info */}
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <label className={labelClasses}>Email Address {requiredStar}</label>
                        <input
                          type="email"
                          required
                          className={inputClasses('email')}
                          placeholder="you@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Phone Number</label>
                        <input
                          type="tel"
                          className={inputClasses('phone')}
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>WhatsApp Number</label>
                        <input
                          type="tel"
                          className={inputClasses('whatsapp')}
                          placeholder="+1 (555) 000-0000"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          onFocus={() => setFocusedField('whatsapp')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* ==================== PROGRAM PREFERENCES ==================== */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-3 border-b border-neutral-200">
                      <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-accent-600" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900">Program Preferences</h3>
                    </div>

                    {/* Interested Programs */}
                    <div>
                      <label className={labelClasses}>Interested In {requiredStar}</label>
                      <p className="text-sm text-neutral-500 mb-3">Select all that apply</p>
                      <div className="space-y-3">
                        {programOptions.map(program => (
                          <label 
                            key={program.id}
                            className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              formData.interestedPrograms.includes(program.id)
                                ? 'border-secondary-500 bg-secondary-50 shadow-md shadow-secondary-500/20' 
                                : 'border-neutral-200 hover:border-neutral-300 bg-white hover:bg-neutral-50'
                            }`}
                          >
                            <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 mt-0.5 ${
                              formData.interestedPrograms.includes(program.id)
                                ? 'border-secondary-500 bg-secondary-500' 
                                : 'border-neutral-300'
                            }`}>
                              {formData.interestedPrograms.includes(program.id) && (
                                <CheckCircle2 className="w-4 h-4 text-white" />
                              )}
                            </div>
                            <input
                              type="checkbox"
                              checked={formData.interestedPrograms.includes(program.id)}
                              onChange={() => handleCheckboxChange('interestedPrograms', program.id)}
                              className="sr-only"
                            />
                            <div>
                              <span className="font-medium text-neutral-900">{program.label}</span>
                              {program.sublabel && (
                                <span className="block text-sm text-neutral-500 mt-0.5">{program.sublabel}</span>
                              )}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Program Duration */}
                    <div>
                      <label className={labelClasses}>Program Duration {requiredStar}</label>
                      <p className="text-sm text-neutral-500 mb-3">Select all that apply</p>
                      <div className="grid grid-cols-2 gap-3">
                        {durationOptions.map(duration => (
                          <label 
                            key={duration.id}
                            className={`flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              formData.programDuration.includes(duration.id)
                                ? 'border-secondary-500 bg-secondary-50 text-secondary-700 shadow-md shadow-secondary-500/20 scale-[1.02]' 
                                : 'border-neutral-200 hover:border-neutral-300 bg-white hover:bg-neutral-50'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.programDuration.includes(duration.id)}
                              onChange={() => handleCheckboxChange('programDuration', duration.id)}
                              className="sr-only"
                            />
                            <span className="font-medium text-sm">{duration.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ==================== ADDITIONAL INFORMATION ==================== */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-3 border-b border-neutral-200">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-emerald-600" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900">Additional Information</h3>
                    </div>

                    {/* Requested Grade */}
                    <div>
                      <label className={labelClasses}>Requested Grade Level</label>
                      <div className="relative">
                        <select
                          className={`${inputClasses('requestedGrade')} appearance-none cursor-pointer pr-10`}
                          value={formData.requestedGrade}
                          onChange={(e) => setFormData({ ...formData, requestedGrade: e.target.value, seekingGraduation: '' })}
                          onFocus={() => setFocusedField('requestedGrade')}
                          onBlur={() => setFocusedField(null)}
                        >
                          <option value="">Select grade</option>
                          {gradeOptions.map(grade => (
                            <option key={grade} value={grade}>{grade}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Conditional: 12th Grade Graduation Question */}
                    {formData.requestedGrade === '12th Grade' && (
                      <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 animate-fade-in">
                        <label className={labelClasses}>Are you seeking graduation?</label>
                        <div className="flex gap-4 mt-2 mb-3">
                          {['Yes', 'No'].map(option => (
                            <label 
                              key={option}
                              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                formData.seekingGraduation === option 
                                  ? 'border-emerald-500 bg-emerald-100 text-emerald-700' 
                                  : 'border-neutral-200 hover:border-neutral-300 bg-white'
                              }`}
                            >
                              <input
                                type="radio"
                                name="seekingGraduation"
                                value={option}
                                checked={formData.seekingGraduation === option}
                                onChange={(e) => setFormData({ ...formData, seekingGraduation: e.target.value })}
                                className="sr-only"
                              />
                              <span className="font-medium">{option}</span>
                            </label>
                          ))}
                        </div>
                        <p className="text-xs text-emerald-700 bg-emerald-100/50 rounded-lg p-3">
                          <strong>Note:</strong> Graduation depends on meeting graduation requirements of the school you are applying to. Some schools do not allow graduation and some schools require more than 1 year of attendance in order to graduate.
                        </p>
                      </div>
                    )}

                    {/* Desired Start Date */}
                    <div>
                      <label className={labelClasses}>Desired Start Date</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {startDateOptions.map(date => (
                          <label 
                            key={date}
                            className={`flex items-center justify-center text-center px-3 py-3.5 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              formData.desiredStartDate === date
                                ? 'border-secondary-500 bg-secondary-50 text-secondary-700 shadow-md shadow-secondary-500/20 scale-[1.02]' 
                                : 'border-neutral-200 hover:border-neutral-300 bg-white hover:bg-neutral-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="desiredStartDate"
                              value={date}
                              checked={formData.desiredStartDate === date}
                              onChange={(e) => setFormData({ ...formData, desiredStartDate: e.target.value })}
                              className="sr-only"
                            />
                            <span className="font-medium text-sm">{date}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Preferred Communication Method */}
                    <div>
                      <label className={labelClasses}>Preferred Method of Communication</label>
                      <div className="grid grid-cols-3 gap-3">
                        {commOptions.map(option => (
                          <label 
                            key={option.id}
                            className={`flex flex-col items-center justify-center gap-2 px-4 py-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              formData.preferredComm === option.id
                                ? 'border-secondary-500 bg-secondary-50 text-secondary-700 shadow-lg shadow-secondary-500/30 scale-[1.03]' 
                                : 'border-neutral-200 hover:border-neutral-300 bg-white hover:bg-neutral-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="preferredComm"
                              value={option.id}
                              checked={formData.preferredComm === option.id}
                              onChange={(e) => setFormData({ ...formData, preferredComm: e.target.value })}
                              className="sr-only"
                            />
                            <option.icon className={`w-6 h-6 transition-colors ${formData.preferredComm === option.id ? 'text-secondary-600' : 'text-neutral-400'}`} />
                            <span className="font-medium text-sm">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto group relative overflow-hidden btn bg-gradient-to-r from-secondary-600 to-secondary-500 text-white hover:from-secondary-700 hover:to-secondary-600 btn-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-secondary-500/30 hover:shadow-2xl hover:shadow-secondary-500/40 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                            Submit Assessment
                            <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </button>
                    <p className="text-xs text-neutral-500 mt-4">
                      Fields marked with <span className="text-red-500">*</span> are required. By submitting, you agree to be contacted about our programs.
                    </p>
                  </div>
                </form>
                </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-neutral-100">
                <h3 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-secondary-500" />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a href="mailto:Info@XperienceEdu.com" className="flex items-center gap-3 text-neutral-600 hover:text-secondary-600 transition-colors group">
                    <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-200 transition-colors">
                      <Mail className="w-5 h-5 text-secondary-600" />
                    </div>
                    <span className="text-sm">Info@XperienceEdu.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-neutral-600">
                    <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-secondary-600" />
                    </div>
                    <span className="text-sm">Las Vegas, Nevada, USA</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-xl border border-neutral-100">
                <h3 className="font-bold text-neutral-900 mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <Clock className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                    We respond within 24 hours
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <Globe className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                    Video consultations available worldwide
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                    Free consultation, no obligation
                  </div>
                </div>
              </div>

              {/* Just have a question? Card */}
              <div className="bg-neutral-100 rounded-3xl p-6 border border-neutral-200">
                <h3 className="font-bold text-neutral-900 mb-2">Just have a question?</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  If you&apos;re not ready to apply yet, feel free to reach out with any questions.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-secondary-600 font-medium text-sm hover:text-secondary-700 transition-colors"
                >
                  Go to Contact Page <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-primary-950 to-primary-900 rounded-3xl p-6 text-white shadow-xl">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-secondary-400" />
                  What Happens Next?
                </h3>
                <div className="space-y-3 text-sm text-neutral-300">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-secondary-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                    <span>We&apos;ll review your assessment and respond within 24 hours</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-secondary-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                    <span>Schedule a free consultation call to discuss your goals</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-secondary-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                    <span>Receive a personalized program recommendation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </>
  )
}
