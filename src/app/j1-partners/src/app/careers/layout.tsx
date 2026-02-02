import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | Independent Education Consultants',
  description: 'Join our team as an independent 1099 contractor. Recruit international students and earn competitive commissions with flexible hours.',
  keywords: ['international student recruitment jobs', 'education consultant jobs', 'student placement agent', '1099 contractor'],
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
