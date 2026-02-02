import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch',
  description: 'Contact Xperience Education for inquiries about international student programs, partnerships, or host family opportunities.',
  keywords: ['contact xperience education', 'international student inquiry', 'student exchange contact'],
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
