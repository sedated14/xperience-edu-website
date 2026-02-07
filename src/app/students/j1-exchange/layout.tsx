import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'J1 Exchange Program USA | High School Cultural Exchange | Host Family Experience',
  description: 'Experience authentic American culture with J1 Exchange Program. Live with volunteer host family, attend public high school. Students from Germany, Spain, Italy, France, Brazil, China, Korea, Japan, Thailand, Nordic countries welcome. Semester or full year programs.',
  keywords: [
    'J1 exchange program',
    'J1 visa high school',
    'cultural exchange student USA',
    'exchange student program America',
    'host family exchange',
    'high school exchange year USA',
    'American high school exchange',
    'student exchange from Germany',
    'student exchange from Spain',
    'student exchange from Italy',
    'student exchange from France',
    'student exchange from Brazil',
    'student exchange from China',
    'student exchange from Korea',
    'student exchange from Japan',
    'student exchange from Thailand',
    'student exchange from Denmark',
    'student exchange from Sweden',
    'student exchange from Norway',
    'student exchange from Belgium',
    'student exchange from Netherlands',
    'student exchange from Poland',
    'student exchange from Australia',
    'student exchange from UK',
    'Schüleraustausch USA',
    'High School Jahr Amerika',
    'intercambio estudiantil USA',
    'intercambio Estados Unidos',
    'scambio studentesco USA',
    'échange scolaire USA',
    '美国交换生',
    '미국교환학생',
    'นักเรียนแลกเปลี่ยนอเมริกา',
  ],
  openGraph: {
    title: 'J1 Exchange Program USA | Cultural Exchange | Xperience Education',
    description: 'Live with American host family, attend public high school. Students from Germany, Spain, Italy, France, Brazil, China, Japan, Korea welcome.',
    url: 'https://xperienceedu.com/students/j1-exchange',
  },
  alternates: {
    canonical: 'https://xperienceedu.com/students/j1-exchange',
  },
}

export default function J1ExchangeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
