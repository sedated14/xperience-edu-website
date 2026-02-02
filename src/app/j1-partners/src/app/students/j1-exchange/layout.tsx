import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'J1 Exchange Program | Cultural Exchange High School Experience',
  description: 'Experience authentic American culture with our J1 Exchange Program. Live with a volunteer host family, attend a public high school, and create lifelong memories.',
  keywords: ['J1 exchange program', 'J1 visa high school', 'cultural exchange student', 'exchange student program USA'],
}

export default function J1ExchangeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
