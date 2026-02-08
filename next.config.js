/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/sending-organizations',
        destination: '/partners',
        permanent: true, // 301 redirect - preserves SEO
      },
      {
        source: '/contact',
        destination: '/about/contact',
        permanent: true,
      },
      {
        source: '/StudyInTheUSA',
        destination: '/students/j1-exchange',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          has: [
            {
              type: 'host',
              value: 'j1partners.xperienceedu.com',
            },
          ],
          destination: '/j1-partners',
        },
        {
          source: '/',
          has: [
            {
              type: 'host',
              value: 'xperience-education.com',
            },
          ],
          destination: '/j1-partners',
        },
        {
          source: '/',
          has: [
            {
              type: 'host',
              value: 'www.xperience-education.com',
            },
          ],
          destination: '/j1-partners',
        },
      ],
    }
  },
}

module.exports = nextConfig
