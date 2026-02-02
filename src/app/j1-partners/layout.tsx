import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' })

export const metadata = {
  title: 'J1 Visa Partner Program | Xperience Education',
  description: 'Partner with Xperience Education to access J1 visa allocations for your students. Perfect for new, small, or growing agencies. Fall 2026 & Spring 2027 programs now open.',
}

export default function J1PartnersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} ${plusJakarta.variable} font-sans`}>
      {children}
    </div>
  )
}
