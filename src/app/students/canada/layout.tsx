import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Study in Canada | High School & Summer Programs | International Students',
  description: 'Study in Canada with Xperience Education. High school programs, short-term experiences & summer camps for international students from China, Vietnam, Korea, Japan, Brazil, Mexico, Germany, Spain & 50+ countries. Host family placement across all Canadian provinces.',
  keywords: [
    'study in Canada',
    'Canada high school international students',
    'study abroad Canada',
    'Canadian high school program',
    'Canada exchange student',
    'Canada summer camp international',
    'Canada host family program',
    'study Canada from China',
    'study Canada from Vietnam',
    'study Canada from Korea',
    'study Canada from Japan',
    'study Canada from Brazil',
    'study Canada from Mexico',
    'study Canada from Germany',
    'study Canada from Spain',
    'study Canada from Taiwan',
    'study Canada from Thailand',
    'study Canada from India',
    'study Canada from Philippines',
    'Canada student visa',
    'Canada study permit high school',
    'Canadian education international',
    '加拿大留学',
    '加拿大高中',
    'estudiar en Canadá',
    'intercambio Canadá',
    'estudar no Canadá',
    '캐나다 유학',
    'カナダ留学',
    'du học Canada',
  ],
  openGraph: {
    title: 'Study in Canada | High School Programs | Xperience Education',
    description: 'High school programs, summer camps & short-term experiences in Canada. International students from 50+ countries welcome.',
    url: 'https://xperienceedu.com/students/canada',
  },
  alternates: {
    canonical: 'https://xperienceedu.com/students/canada',
  },
}

export default function CanadaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
