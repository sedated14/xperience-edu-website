import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Xperience Education. Have questions about F1 Visa, J1 Exchange, or other international student programs? Our team responds within 24 hours.',
  keywords: [
    'contact Xperience Education',
    'international student help',
    'study abroad questions',
    'F1 visa inquiry',
    'J1 exchange questions',
    'student program consultation',
  ],
  openGraph: {
    title: 'Contact Us | Xperience Education',
    description: 'Have questions about studying in the USA or Canada? Contact our team for a free consultation.',
    url: 'https://xperienceedu.com/contact',
  },
  alternates: {
    canonical: 'https://xperienceedu.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
