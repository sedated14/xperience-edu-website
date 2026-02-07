import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | International Student Recruitment Agent | Host Family Recruiter USA',
  description: 'Join Xperience Education as independent contractor. US: Recruit host families for exchange students. International: Become student recruitment agent in China, Vietnam, Korea, Germany, Spain, Brazil, Japan, Mexico, Thailand & more. Flexible hours, competitive commissions.',
  keywords: [
    // US - Host Family Recruiter
    'host family recruiter job',
    'host family recruitment USA',
    'exchange program recruiter',
    'education recruitment job USA',
    'recruit host families',
    'host family coordinator job',
    'J1 program recruiter',
    'cultural exchange recruiter USA',
    'work from home education job',
    '1099 education contractor',
    // International - Recruitment Agent General
    'international student recruitment agent',
    'education agent job',
    'student recruitment job',
    'become education agent',
    'study abroad agent',
    'international education consultant',
    'student placement agent',
    'education recruitment commission',
    // International - By Country
    'education agent China',
    'education agent Vietnam',
    'education agent Korea',
    'education agent Japan',
    'education agent Germany',
    'education agent Spain',
    'education agent Italy',
    'education agent France',
    'education agent Brazil',
    'education agent Mexico',
    'education agent Thailand',
    'education agent Taiwan',
    'education agent India',
    'education agent Philippines',
    'education agent Indonesia',
    'education agent Colombia',
    'education agent Denmark',
    'education agent Sweden',
    'education agent Norway',
    'education agent Australia',
    'education agent UK',
    // Multi-language
    '留学中介招聘',
    '教育代理工作',
    'agente de intercambio trabajo',
    'trabalho agente intercâmbio',
    'Bildungsberater Job',
    '유학원 채용',
    '留学エージェント求人',
  ],
  openGraph: {
    title: 'Careers | Student Recruitment Agent | Host Family Recruiter | Xperience Education',
    description: 'Join our team. US: Recruit host families. International: Become student recruitment agent worldwide. Flexible hours, great commissions.',
    url: 'https://xperienceedu.com/careers',
  },
  alternates: {
    canonical: 'https://xperienceedu.com/careers',
  },
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
