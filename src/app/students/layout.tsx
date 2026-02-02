import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Programs | Study in America',
  description: 'Explore our F1 Visa, J1 Exchange, Canadian, Virtual, and Summer high school programs. Find the perfect path to your American education.',
  keywords: ['F1 visa high school', 'J1 exchange program', 'study in USA', 'international student programs'],
}

export default function StudentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
