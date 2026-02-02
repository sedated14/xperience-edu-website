import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Summer Programs | Summer School & Camps in USA',
  description: 'Make your summer unforgettable with our summer programs in the USA. English camps, academic courses, sports camps, and cultural experiences.',
  keywords: ['summer program USA', 'summer school America', 'summer camp USA international students', 'ESL summer camp'],
}

export default function SummerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
