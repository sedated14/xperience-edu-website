import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'F1 Visa High School Programs | Study in USA | Private & Boarding Schools',
  description: 'Study at American private or boarding schools with an F1 student visa. International students from China, Vietnam, Korea, Japan, Brazil, Mexico & 50+ countries earn US diplomas. Multi-year enrollment, university pathway, school choice. Expert visa support.',
  keywords: [
    'F1 visa high school',
    'F1 student visa USA',
    'study in America F1',
    'US private high school international',
    'American boarding school',
    'US high school diploma international students',
    'F1 visa application high school',
    'study USA from China',
    'study USA from Vietnam',
    'study USA from Korea',
    'study USA from Japan',
    'study USA from Mexico',
    'study USA from Brazil',
    'study USA from Taiwan',
    'study USA from Thailand',
    'study USA from India',
    'study USA from Philippines',
    '美国高中留学',
    '美国F1签证',
    'visa F1 estudiante',
    'du học Mỹ visa F1',
    '미국유학 F1비자',
  ],
  openGraph: {
    title: 'F1 Visa High School Programs | Study in USA | Xperience Education',
    description: 'Attend American private or boarding schools with F1 student visa. Earn a US diploma, pathway to US universities.',
    url: 'https://xperienceedu.com/students/f1-visa',
  },
  alternates: {
    canonical: 'https://xperienceedu.com/students/f1-visa',
  },
}

export default function F1VisaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
