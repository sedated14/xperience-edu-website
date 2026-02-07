import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Summer Programs USA | Summer Camps & Courses | International Students',
  description: 'Make your summer unforgettable in the USA. Summer camps, English courses, academic programs, sports camps & cultural experiences. International students from China, Vietnam, Korea, Japan, Brazil, Mexico, Spain, Thailand welcome. 2-8 week programs.',
  keywords: [
    'summer program USA',
    'summer school America',
    'summer camp USA international students',
    'ESL summer camp USA',
    'summer English program USA',
    'American summer camp',
    'summer study abroad USA',
    'summer camp from China',
    'summer camp from Vietnam',
    'summer camp from Korea',
    'summer camp from Japan',
    'summer camp from Brazil',
    'summer camp from Mexico',
    'summer camp from Spain',
    'summer camp from Taiwan',
    'summer camp from Thailand',
    'sports camp USA international',
    'academic summer program USA',
    '美国夏令营',
    '美国暑期项目',
    'campamento de verano USA',
    'programa de verão EUA',
    '미국 여름캠프',
    'アメリカサマーキャンプ',
  ],
  openGraph: {
    title: 'Summer Programs USA | Summer Camps | Xperience Education',
    description: 'Summer camps, English courses, academic & sports programs in America. International students welcome.',
    url: 'https://xperienceedu.com/students/summer',
  },
  alternates: {
    canonical: 'https://xperienceedu.com/students/summer',
  },
}

export default function SummerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
