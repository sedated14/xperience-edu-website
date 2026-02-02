import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agency Partners | International Education Partnership',
  description: 'Join our global network of education agencies. Partner with Xperience Education for F1 and J1 student placements with competitive commissions.',
  keywords: ['education agency partnership', 'student placement agency', 'international student recruitment', 'F1 student placement'],
}

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
