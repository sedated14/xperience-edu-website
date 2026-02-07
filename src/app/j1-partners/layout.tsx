import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import '../globals.css'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' })

export const metadata: Metadata = {
  title: 'J1 Visa Partner Program | Access J1 Allocations | Partner with Xperience Education',
  description: 'Partner with Xperience Education to access J1 visa allocations for your students. Perfect for agencies in Germany, Spain, Italy, France, Brazil, China, Korea, Japan, Thailand, Nordic countries. New, small, or growing agencies welcome.',
  keywords: [
    'J1 visa partner',
    'J1 exchange partner agency',
    'J1 allocation partner',
    'become J1 sponsor partner',
    'J1 visa agency partnership',
    'J1 exchange recruitment',
    'J1 student placement',
    'J1 partner Germany',
    'J1 partner Spain',
    'J1 partner Italy',
    'J1 partner France',
    'J1 partner Brazil',
    'J1 partner China',
    'J1 partner Korea',
    'J1 partner Japan',
    'J1 partner Thailand',
    'J1 partner Denmark',
    'J1 partner Sweden',
    'J1 partner Norway',
    'Schüleraustausch Partner',
    'intercambio estudiantil socio',
    'partenaire échange scolaire',
  ],
  openGraph: {
    title: 'J1 Visa Partner Program | Xperience Education',
    description: 'Access J1 visa allocations for your students. Partner agencies from Germany, Spain, Italy, France, Brazil, China, Japan, Korea welcome.',
    url: 'https://xperienceedu.com/j1-partners',
  },
  alternates: {
    canonical: 'https://xperienceedu.com/j1-partners',
  },
}

export default function J1PartnersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} ${plusJakarta.variable} font-sans`}>
      {children}
    </div>
  )
}
