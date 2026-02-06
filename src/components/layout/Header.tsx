'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  {
    name: 'Students',
    href: '/students',
    children: [
      { name: 'F1 Visa Programs', href: '/students/f1-visa', description: 'USA - Private & boarding schools' },
      { name: 'J1 Exchange', href: '/students/j1-exchange', description: 'USA - Cultural exchange' },
      { name: 'Study in Canada', href: '/students/canada', description: 'Canada - High school & camps' },
      { name: 'Virtual High School', href: '/students/virtual', description: 'Online - U.S. diploma anywhere' },
      { name: 'Short-Term Programs', href: '/students/short-term', description: 'USA - 2-12 week experiences' },
      { name: 'Summer Programs', href: '/students/summer', description: 'USA - Summer camps & courses' },
    ],
  },
  { name: 'Host Families', href: '/host-families' },
  { name: 'Schools', href: '/schools' },
  { name: 'Partners', href: '/partners' },
  { name: 'Careers', href: '/careers' },
  { name: 'About', href: '/about' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-soft py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo — Uses your actual logo image */}
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/images/logo.png" alt="Xperience Education" className="h-10 w-10 rounded-full" />
          <span className={cn(
            'text-xl font-bold font-display transition-colors',
            isScrolled ? 'text-primary-900' : 'text-white'
          )}>
            Xperience<span className="text-secondary-500">Edu</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-lg transition-colors inline-flex items-center gap-1',
                  pathname === item.href || pathname?.startsWith(item.href + '/')
                    ? isScrolled ? 'text-secondary-600' : 'text-white'
                    : isScrolled ? 'text-neutral-600 hover:text-secondary-600' : 'text-white/80 hover:text-white'
                )}
              >
                {item.name}
                {item.children && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>

              {/* Dropdown */}
              {item.children && openDropdown === item.name && (
                <div className="absolute top-full left-0 pt-2 w-72">
                  <div className="bg-white rounded-2xl shadow-elevated border border-neutral-100 overflow-hidden p-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex flex-col px-4 py-3 rounded-xl hover:bg-secondary-50 transition-colors"
                      >
                        <span className="font-medium text-neutral-900">{child.name}</span>
                        <span className="text-sm text-neutral-500 mt-0.5">{child.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link
            href="/about/contact"
            className={cn(
              'hidden sm:inline-flex btn text-sm',
              isScrolled
                ? 'bg-secondary-600 text-white hover:bg-secondary-700'
                : 'bg-white text-primary-900 hover:bg-white/90'
            )}
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              isScrolled ? 'text-neutral-600' : 'text-white'
            )}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-100 shadow-elevated">
          <div className="container-wide py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    'block px-4 py-3 rounded-xl text-neutral-700 font-medium hover:bg-secondary-50 hover:text-secondary-600 transition-colors',
                    pathname === item.href && 'bg-secondary-50 text-secondary-600'
                  )}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-neutral-500 rounded-lg hover:bg-neutral-50 hover:text-neutral-700 transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Link href="/about/contact" className="block w-full text-center btn bg-secondary-600 text-white hover:bg-secondary-700">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
