import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Become a Host Family USA | Host International Exchange Students',
  description: 'Open your home to international exchange students in the USA. Become a host family for F1 or J1 students from China, Germany, Spain, Brazil, Japan, Korea & more. Earn stipend, experience cultural exchange, make lifelong connections. Families needed across all US states.',
  keywords: [
    'become host family USA',
    'host exchange student',
    'host international student',
    'J1 host family program',
    'F1 host family',
    'exchange student host family',
    'host family program USA',
    'host foreign student',
    'cultural exchange host family',
    'host family stipend',
    'host family compensation',
    'American host family',
    'host student from China',
    'host student from Germany',
    'host student from Spain',
    'host student from Brazil',
    'host student from Japan',
    'host student from Korea',
    'host family California',
    'host family Texas',
    'host family Florida',
    'host family New York',
    'host family requirements',
    'how to become host family',
    'host family application',
    'hosting exchange students benefits',
  ],
  openGraph: {
    title: 'Become a Host Family | Host Exchange Students | Xperience Education',
    description: 'Open your home to international students. Earn stipend, experience cultural exchange. Families needed across USA.',
    url: 'https://xperienceedu.com/host-families',
  },
  alternates: {
    canonical: 'https://xperienceedu.com/host-families',
  },
}

export default function HostFamiliesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
