import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'F1 Visa High School Programs | Private & Boarding Schools USA',
  description: 'Study at top American private and boarding schools with an F1 student visa. Choose your school, earn a US diploma, and prepare for top universities.',
  keywords: ['F1 visa high school', 'F1 student visa', 'private high school USA', 'boarding school America', 'international student visa'],
}

export default function F1VisaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
