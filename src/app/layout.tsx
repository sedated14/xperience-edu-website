import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { LayoutWrapper } from '@/components/layout/LayoutWrapper'

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
    default: 'Xperience Education | Study in USA & Canada | F1 Visa & J1 Exchange Programs for International Students',
    template: '%s | Xperience Education',
  },
  description:
    'Study in the USA or Canada with F1 Visa, J1 Exchange, Virtual High School & Summer Programs. We help international students from China, Vietnam, Korea, Germany, Spain, Brazil, Japan, Mexico & 50+ countries attend American & Canadian high schools. Expert visa support, host family placement & school matching.',
  keywords: [
    // Core Programs
    'F1 visa high school USA',
    'J1 exchange program USA',
    'study abroad high school',
    'international student programs',
    'study in America',
    'study in Canada',
    'US high school diploma',
    'American high school international students',
    'student exchange program',
    'host family program',
    // F1 Specific
    'F1 student visa application',
    'private high school USA international',
    'boarding school USA',
    'US high school for foreign students',
    // J1 Specific  
    'J1 visa high school',
    'cultural exchange program USA',
    'high school exchange year USA',
    'American host family exchange',
    // Virtual
    'online high school diploma USA',
    'virtual high school international students',
    'US diploma online',
    // Geographic - Primary F1 Markets
    'study in USA from China',
    'study in USA from Vietnam', 
    'study in USA from Korea',
    'study in USA from Mexico',
    'study in USA from Brazil',
    'study in USA from Japan',
    'study in USA from Taiwan',
    'study in USA from Thailand',
    'study in USA from India',
    'study in USA from Philippines',
    // Geographic - Primary J1 Markets
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
    // Chinese keywords (Pinyin for search)
    '美国高中留学',
    '美国交换生',
    'meiguo liuxue',
    // Spanish keywords
    'estudiar secundaria en Estados Unidos',
    'intercambio estudiantil USA',
    'visa F1 estudiante',
    // Portuguese keywords
    'estudar nos Estados Unidos',
    'intercâmbio high school EUA',
    // German keywords
    'Schüleraustausch USA',
    'High School Jahr Amerika',
    // Korean keywords (Romanized)
    '미국유학',
    '미국고등학교',
    // Japanese keywords (Romanized)
    'アメリカ留学',
    '高校留学',
    // Vietnamese keywords
    'du học Mỹ',
    'du học trung học Mỹ',
  ],
  authors: [{ name: 'Xperience Education' }],
  creator: 'Xperience Education',
  publisher: 'Xperience Education',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://xperienceedu.com',
    languages: {
      'en-US': 'https://xperienceedu.com',
      'zh-CN': 'https://xperienceedu.com',
      'es': 'https://xperienceedu.com',
      'de': 'https://xperienceedu.com',
      'pt-BR': 'https://xperienceedu.com',
      'ko': 'https://xperienceedu.com',
      'ja': 'https://xperienceedu.com',
      'vi': 'https://xperienceedu.com',
      'th': 'https://xperienceedu.com',
      'fr': 'https://xperienceedu.com',
      'it': 'https://xperienceedu.com',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xperienceedu.com',
    siteName: 'Xperience Education',
    title: 'Xperience Education | Study in USA & Canada | International Student Programs',
    description:
      'Your gateway to American & Canadian education. F1 Visa, J1 Exchange, Virtual High School & Summer Programs for students from China, Vietnam, Korea, Germany, Spain, Brazil & 50+ countries.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Xperience Education - Study in USA & Canada - International Student Programs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Xperience_EduUS',
    creator: '@Xperience_EduUS',
    title: 'Xperience Education | Study in USA & Canada',
    description: 'F1 Visa, J1 Exchange & Virtual High School Programs for international students worldwide.',
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
  category: 'Education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Xperience Education',
    alternateName: 'XperienceEdu',
    url: 'https://xperienceedu.com',
    logo: 'https://xperienceedu.com/images/logo.png',
    description: 'International student exchange and high school programs in the USA and Canada. F1 Visa, J1 Exchange, Virtual High School, and Summer Programs.',
    sameAs: [
      'https://www.instagram.com/xperience_education/',
      'https://x.com/Xperience_EduUS',
      'https://www.youtube.com/@XperienceEducation',
    ],
    areaServed: [
      'China', 'Vietnam', 'South Korea', 'Japan', 'Germany', 'Spain', 'Italy', 
      'France', 'Brazil', 'Mexico', 'Thailand', 'Taiwan', 'India', 'Philippines',
      'Indonesia', 'Colombia', 'Denmark', 'Sweden', 'Norway', 'Belgium', 
      'Netherlands', 'Poland', 'Australia', 'United Kingdom'
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Xperience Education',
    url: 'https://xperienceedu.com',
  }

  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RPKC92700X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RPKC92700X');
          `}
        </Script>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
