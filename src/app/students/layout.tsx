import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Programs | Study in USA & Canada | F1 Visa, J1 Exchange, Summer',
  description: 'Explore international student programs: F1 Visa, J1 Exchange, Virtual High School, Summer & Short-Term. Study in USA or Canada. Students from China, Vietnam, Korea, Germany, Spain, Brazil, Japan, Mexico & 50+ countries. Find your perfect program.',
  keywords: [
    'study in USA',
    'study in Canada',
    'F1 visa high school',
    'J1 exchange program',
    'international student programs',
    'study abroad high school',
    'American high school international',
    'high school exchange program',
    'study USA from China',
    'study USA from Vietnam',
    'study USA from Korea',
    'study USA from Germany',
    'study USA from Spain',
    'study USA from Brazil',
    'study USA from Japan',
    'study USA from Mexico',
    '美国留学',
    '美国高中',
    'estudiar en Estados Unidos',
    'Schüleraustausch',
    '미국유학',
    'アメリカ留学',
    'du học Mỹ',
  ],
  openGraph: {
    title: 'Student Programs | Study in USA & Canada | Xperience Education',
    description: 'F1 Visa, J1 Exchange, Virtual & Summer programs for international students.',
    url: 'https://xperienceedu.com/students',
  },
  alternates: {
    canonical: 'https://xperienceedu.com/students',
  },
}

export default function StudentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
