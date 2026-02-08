'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

// Routes that should NOT show the main header/footer (standalone landing pages)
const standaloneRoutes = ['/j1-partners']

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    // Check if it's a standalone route OR the j1partners subdomain OR xperience-education.com
    const isStandaloneRoute = standaloneRoutes.some(route => pathname?.startsWith(route))
    const isJ1Subdomain = typeof window !== 'undefined' && window.location.hostname.startsWith('j1partners.')
    const isJ1Domain = typeof window !== 'undefined' && window.location.hostname.includes('xperience-education.com')
    setIsStandalone(isStandaloneRoute || isJ1Subdomain || isJ1Domain)
  }, [pathname])

  if (isStandalone) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
