import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Short-Term Programs USA | 2-12 Week Study Experience | No Visa Required',
  description: 'Experience American high school education with flexible 2-12 week programs. Perfect for school groups & individual students from China, Vietnam, Korea, Japan, Brazil, Mexico. No student visa required. Try before committing to full year.',
  keywords: [
    'short term study USA',
    'study tour America',
    'short term exchange program',
    'educational tour USA',
    'short term high school USA',
    'study abroad 2 weeks',
    'study abroad 1 month USA',
    'try American high school',
    'school group tour USA',
    'no visa study USA',
    'short term from China',
    'short term from Vietnam',
    'short term from Korea',
    'short term from Japan',
    'short term from Brazil',
    'short term from Mexico',
    'short term from Taiwan',
    '美国短期留学',
    '美国游学',
    'intercambio corto USA',
    'programa curto EUA',
    '미국 단기유학',
    '短期留学アメリカ',
  ],
  openGraph: {
    title: 'Short-Term Programs USA | 2-12 Weeks | Xperience Education',
    description: 'Experience American high school for 2-12 weeks. No visa required. School groups & individuals welcome.',
    url: 'https://xperienceedu.com/students/short-term',
  },
  alternates: {
    canonical: 'https://xperienceedu.com/students/short-term',
  },
}

export default function ShortTermLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
