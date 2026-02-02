import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://xperienceedu.com'),
  title: {
    default: 'Xperience Education | US High School Programs for International Students',
    template: '%s | Xperience Education',
  },
  description:
    'Your gateway to American high school education. F1 Visa, J1 Exchange, Canadian programs, and more. Connecting international students with top US schools since 2009.',
  keywords: [
    'F1 visa high school',
    'J1 exchange program',
    'international student USA',
    'study in America high school',
    'US boarding school',
    'host family exchange student',
    'private high school international students',
    'student exchange program USA',
  ],
  authors: [{ name: 'Xperience Education' }],
  creator: 'Xperience Education',
  publisher: 'Xperience Education',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xperienceedu.com',
    siteName: 'Xperience Education',
    title: 'Xperience Education | US High School Programs for International Students',
    description:
      'Your gateway to American high school education. F1 Visa, J1 Exchange, Canadian programs, and more.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Xperience Education - International Student Programs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xperience Education | US High School Programs',
    description: 'Your gateway to American high school education.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
