import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Short-Term Programs | 2-12 Week US Experience',
  description: 'Experience American education with our flexible short-term programs. Perfect for school groups, individual students, and those wanting a taste of US education.',
  keywords: ['short term study USA', 'study tour America', 'short term exchange program', 'educational tour USA'],
}

export default function ShortTermLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
