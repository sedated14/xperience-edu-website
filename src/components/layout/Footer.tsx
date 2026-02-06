import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const footerLinks = {
  programs: [
    { name: 'F1 Visa Programs', href: '/students/f1-visa' },
    { name: 'J1 Exchange', href: '/students/j1-exchange' },
    { name: 'Virtual High School', href: '/students/virtual' },
    { name: 'Short-Term Programs', href: '/students/short-term' },
    { name: 'Summer Programs', href: '/students/summer' },
  ],
  getInvolved: [
    { name: 'Host Families', href: '/host-families' },
    { name: 'Partner Schools', href: '/schools' },
    { name: 'Agency Partners', href: '/partners' },
    { name: 'Careers', href: '/careers' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/about/contact' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/xperience_education/' },
  { name: 'X', icon: Twitter, href: 'https://x.com/Xperience_EduUS' },
  { name: 'YouTube', icon: Youtube, href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      {/* Main Footer */}
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              {/* Uncomment when you add your logo to public/images/ */}
              {/* <img src="/images/logo-white.png" alt="Xperience Education" className="h-10 w-10 rounded-full" /> */}
              <span className="text-xl font-bold font-display">
                Xperience<span className="text-secondary-400">Edu</span>
              </span>
            </Link>
            <p className="text-neutral-400 mt-4 max-w-sm">
              Connecting international students with exceptional American high school 
              experiences since 2009. Your gateway to F1 and J1 programs.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 hover:bg-secondary-600 rounded-xl flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-white mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-400 hover:text-secondary-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get Involved</h4>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-400 hover:text-secondary-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:Info@XperienceEdu.com" className="flex items-center gap-2 text-neutral-400 hover:text-secondary-400 transition-colors text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  Info@XperienceEdu.com
                </a>
              </li>
              <li>
                <a href="tel:+17025550123" className="flex items-center gap-2 text-neutral-400 hover:text-secondary-400 transition-colors text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +1 (702) 555-0123
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-neutral-400 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  Las Vegas, Nevada, USA
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Xperience Education. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.company.map((link) => (
              <Link key={link.href} href={link.href} className="text-neutral-500 hover:text-secondary-400 transition-colors text-sm">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
