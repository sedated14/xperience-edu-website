import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Assessment',
  description: 'Complete your Student Assessment Profile to apply for F1 Visa, J1 Exchange, Virtual High School, and other international student programs. Get matched with the perfect school and program.',
  keywords: [
    'student assessment form',
    'apply to study in USA',
    'international student application',
    'F1 visa application',
    'J1 exchange application',
    'high school study abroad application',
    'US student visa application',
    'Canada high school application',
  ],
  openGraph: {
    title: 'Student Assessment | Xperience Education',
    description: 'Start your application to study in the USA or Canada. Complete your profile and get matched with the perfect program.',
    url: 'https://xperienceedu.com/student-assessment',
  },
  alternates: {
    canonical: 'https://xperienceedu.com/student-assessment',
  },
}

export default function StudentAssessmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
