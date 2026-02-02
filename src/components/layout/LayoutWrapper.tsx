'use client'

import { usePathname } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

// Routes that should NOT show the main header/footer (standalone landing pages)
const standaloneRoutes = ['/j1-partners']

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStandalone = standaloneRoutes.some(route => pathname?.startsWith(route))

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
