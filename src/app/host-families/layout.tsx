import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Become a Host Family | Host Exchange Students',
  description: 'Open your home to international students. Join our host family program and make a difference while experiencing cultural exchange.',
  keywords: ['host family', 'exchange student host', 'host international student', 'J1 host family', 'F1 host family'],
}

export default function HostFamiliesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
