import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Virtual High School | Online US Diploma | Study from Anywhere',
  description: 'Earn an accredited American high school diploma 100% online from anywhere in the world. Flexible, affordable virtual education for international students. Study at your own pace. Students from China, Vietnam, Korea, Germany, Spain, Brazil, Japan & 50+ countries.',
  keywords: [
    'online high school diploma USA',
    'virtual high school international',
    'US diploma online',
    'American high school diploma online',
    'accredited online high school',
    'study from home US diploma',
    'online school for international students',
    'flexible high school program',
    'online American education',
    'US high school diploma from China',
    'US high school diploma from Vietnam',
    'US high school diploma from Korea',
    'US high school diploma from Germany',
    'US high school diploma from Spain',
    'US high school diploma from Brazil',
    'US high school diploma from Japan',
    'online diploma worldwide',
    '美国高中文凭在线',
    '网上美国高中',
    'diploma americano online',
    'bachillerato americano en línea',
    '온라인 미국고등학교',
    'オンラインアメリカ高校',
  ],
  openGraph: {
    title: 'Virtual High School | Online US Diploma | Xperience Education',
    description: 'Earn American high school diploma 100% online from anywhere. Flexible, affordable. Students worldwide welcome.',
    url: 'https://xperienceedu.com/students/virtual',
  },
  alternates: {
    canonical: 'https://xperienceedu.com/students/virtual',
  },
}

export default function VirtualLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
