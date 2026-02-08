import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | International Education Tips & Resources',
  description: 'Expert tips, guides, and resources for international students. Learn about F1 visas, J1 exchange programs, studying in the USA, and more.',
  keywords: [
    'international student blog',
    'study abroad tips',
    'F1 visa guide',
    'J1 exchange advice',
    'studying in USA blog',
    'international education resources',
    'student exchange tips',
    'American high school blog',
  ],
  openGraph: {
    title: 'Blog | Xperience Education',
    description: 'Expert tips and guides for international students.',
    url: 'https://xperienceedu.com/blog',
  },
  alternates: {
    canonical: 'https://xperienceedu.com/blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
