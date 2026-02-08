import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import '../globals.css'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' })

export const metadata: Metadata = {
  title: 'J1 Visa Allocations for Sending Organizations | Partner with US Sponsor | Xperience Education',
  description: 'Get J1 visa allocations for your high school exchange students. US-based sponsor partner for international sending organizations in Germany, Spain, Italy, France, Brazil, China, Korea, Japan, Vietnam, Mexico, Thailand, Nordic countries & 50+ markets. New agencies, small organizations & growing companies welcome. Access American host families and public high schools.',
  keywords: [
    // Core J1 Partnership Terms
    'J1 visa allocation',
    'J1 visa allocations for agencies',
    'J1 sponsor partner',
    'J1 sending organization partner',
    'J1 exchange partner',
    'J1 visa partner program',
    'US J1 sponsor for agencies',
    'J1 high school program partner',
    'become J1 partner',
    'J1 student placement USA',
    'J1 host family placement',
    'American high school exchange partner',
    'US cultural exchange partner',
    'Department of State J1 program',
    'designated sponsor partner',
    
    // For New/Small Agencies
    'J1 allocation for new agencies',
    'J1 partner small agency',
    'start J1 exchange business',
    'J1 allocation for growing agencies',
    'no minimum students J1',
    
    // European Markets
    'J1 partner Germany',
    'J1 partner Spain',
    'J1 partner Italy',
    'J1 partner France',
    'J1 partner Belgium',
    'J1 partner Netherlands',
    'J1 partner Poland',
    'J1 partner UK',
    'J1 partner Austria',
    'J1 partner Switzerland',
    'J1 partner Portugal',
    
    // Nordic Markets
    'J1 partner Denmark',
    'J1 partner Sweden',
    'J1 partner Norway',
    'J1 partner Finland',
    
    // Asia Pacific Markets
    'J1 partner China',
    'J1 partner Japan',
    'J1 partner Korea',
    'J1 partner Thailand',
    'J1 partner Vietnam',
    'J1 partner Taiwan',
    'J1 partner Indonesia',
    'J1 partner Philippines',
    'J1 partner Malaysia',
    'J1 partner India',
    'J1 partner Australia',
    
    // Americas Markets
    'J1 partner Brazil',
    'J1 partner Mexico',
    'J1 partner Colombia',
    'J1 partner Argentina',
    'J1 partner Chile',
    
    // Middle East Markets
    'J1 partner Turkey',
    'J1 partner Saudi Arabia',
    'J1 partner UAE',
    
    // German - Top J1 Market
    'Schüleraustausch USA Partner',
    'J1 Visum Partneragentur',
    'Austauschorganisation USA Partner',
    'High School Jahr USA Partner',
    'Gastfamilie USA Vermittlung',
    
    // Spanish
    'socio intercambio estudiantil USA',
    'partner programa J1 USA',
    'agencia intercambio Estados Unidos',
    'visa J1 allocaciones',
    
    // French
    'partenaire échange scolaire USA',
    'programme J1 partenaire',
    'séjour linguistique USA partenaire',
    
    // Italian
    'partner scambio studenti USA',
    'programma J1 partner',
    'anno scolastico USA partner',
    
    // Portuguese
    'parceiro intercâmbio EUA',
    'programa J1 parceiro',
    'high school EUA parceiro',
    
    // Chinese
    'J1签证合作',
    '美国交换生合作机构',
    '美国高中交换项目合作',
    'J1学生名额',
    
    // Korean
    'J1비자 파트너',
    '미국교환학생 파트너',
    '미국 고등학교 교환 파트너',
    
    // Japanese
    'J1ビザパートナー',
    'アメリカ交換留学パートナー',
    '高校留学アメリカ提携',
    
    // Vietnamese
    'đối tác J1 visa',
    'chương trình trao đổi Mỹ',
    'du học Mỹ đối tác',
    
    // Thai
    'พาร์ทเนอร์ J1 วีซ่า',
    'แลกเปลี่ยนนักเรียนอเมริกา',
  ],
  openGraph: {
    title: 'J1 Visa Allocations for Sending Organizations | Xperience Education',
    description: 'Get J1 visa allocations for your exchange students. US sponsor partner for agencies in Germany, Spain, Italy, France, Brazil, China, Japan, Korea, Vietnam, Thailand & 50+ countries.',
    url: 'https://xperience-education.com',
    siteName: 'Xperience Education',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'J1 Visa Allocations for Sending Organizations',
    description: 'Partner with US J1 sponsor. Get allocations for your exchange students.',
  },
  alternates: {
    canonical: 'https://xperience-education.com',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function J1PartnersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} ${plusJakarta.variable} font-sans`}>
      {children}
    </div>
  )
}
