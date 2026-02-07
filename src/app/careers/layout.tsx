import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | International Student Recruitment Agent | Education Consultant Jobs',
  description: 'Join Xperience Education as international student recruitment agent. Work from China, Vietnam, Korea, Germany, Spain, Brazil, Japan, Mexico, Thailand & more. Flexible hours, competitive commissions. Recruit students for US high school programs.',
  keywords: [
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
    title: 'Careers | International Student Recruitment Agent | Xperience Education',
    description: 'Become international student recruitment agent. Work remotely from anywhere worldwide. Flexible hours, great commissions.',
    url: 'https://xperienceedu.com/careers',
  },
  alternates: {
    canonical: 'https://xperienceedu.com/careers',
  },
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
