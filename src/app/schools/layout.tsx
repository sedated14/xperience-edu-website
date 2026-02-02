import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partner Schools | International Student Programs',
  description: 'Partner with Xperience Education to welcome international students. Increase enrollment, diversify your campus, and build global connections.',
  keywords: ['international student program', 'F1 approved school', 'SEVP certified', 'international enrollment'],
}

export default function SchoolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
