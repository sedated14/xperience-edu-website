import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Our Story & Mission',
  description: "Learn about Xperience Education's mission to connect international students with American education opportunities.",
  keywords: ['about xperience education', 'international education company', 'student exchange organization'],
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
