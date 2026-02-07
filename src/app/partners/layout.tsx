import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agency Partners | Become an International Education Partner | Recruit Students for USA',
  description: 'Partner with Xperience Education to send students to American high schools. Education agencies from China, Vietnam, Korea, Germany, Spain, Brazil, Japan, Mexico & worldwide welcome. F1 & J1 student placement, competitive commissions, marketing support.',
  keywords: [
    'education agency partnership USA',
    'student placement agency',
    'international student recruitment',
    'F1 student placement partner',
    'J1 exchange partner agency',
    'become education agent USA',
    'recruit students for America',
    'study abroad agency partnership',
    'education agent China',
    'education agent Vietnam',
    'education agent Korea',
    'education agent Japan',
    'education agent Germany',
    'education agent Spain',
    'education agent Brazil',
    'education agent Mexico',
    'education agent Thailand',
    'education agent Taiwan',
    '美国留学中介合作',
    '留学代理合作',
    'agencia de intercambio partner',
    'parceiro agência intercâmbio',
    '유학원 파트너',
  ],
  openGraph: {
    title: 'Agency Partners | Partner with Xperience Education',
    description: 'Send students to American high schools. F1 & J1 programs. Competitive commissions for agencies worldwide.',
    url: 'https://xperienceedu.com/partners',
  },
  alternates: {
    canonical: 'https://xperienceedu.com/partners',
  },
}

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
